import * as pdfjs from "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.min.mjs";

const PDF_URL = "assets/schedule_paper.pdf";

const cropRegions = {
  dawon: { x: 0.04, y: 0.075, width: 0.395, height: 0.855, title: "다원 스케줄" },
  sechan: { x: 0.465, y: 0.075, width: 0.395, height: 0.855, title: "세찬 스케줄" },
  all: { x: 0, y: 0, width: 1, height: 1, title: "전체 스케줄" },
};

const canvas = document.querySelector("#scheduleCanvas");
const ctx = canvas.getContext("2d", { alpha: false });
const canvasWrap = document.querySelector("#canvasWrap");
const statusEl = document.querySelector("#renderStatus");
const viewTitle = document.querySelector("#viewTitle");
const pageNumber = document.querySelector("#pageNumber");
const pageTotal = document.querySelector("#pageTotal");
const prevPage = document.querySelector("#prevPage");
const nextPage = document.querySelector("#nextPage");
const modeButtons = [...document.querySelectorAll("[data-mode]")];

let pdfDocument;
let currentPage = 1;
let currentMode = "dawon";
let renderToken = 0;

const setStatus = (text) => {
  statusEl.textContent = text;
};

const updateControls = () => {
  const total = pdfDocument?.numPages ?? 4;
  pageNumber.textContent = String(currentPage);
  pageTotal.textContent = `/ ${total}`;
  prevPage.disabled = currentPage <= 1;
  nextPage.disabled = currentPage >= total;

  modeButtons.forEach((button) => {
    const active = button.dataset.mode === currentMode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });

  viewTitle.textContent = cropRegions[currentMode].title;
  canvasWrap.classList.toggle("is-wide", currentMode === "all");
};

const drawPage = async () => {
  if (!pdfDocument) return;

  const token = ++renderToken;
  setStatus("불러오는 중");
  updateControls();

  const page = await pdfDocument.getPage(currentPage);
  if (token !== renderToken) return;

  const baseViewport = page.getViewport({ scale: 1 });
  const targetWidth = currentMode === "all" ? 2200 : 1450;
  const scale = targetWidth / (baseViewport.width * cropRegions[currentMode].width);
  const viewport = page.getViewport({ scale });
  const offscreen = document.createElement("canvas");
  const offscreenCtx = offscreen.getContext("2d", { alpha: false });

  offscreen.width = Math.floor(viewport.width);
  offscreen.height = Math.floor(viewport.height);

  await page.render({ canvasContext: offscreenCtx, viewport }).promise;
  if (token !== renderToken) return;

  const crop = cropRegions[currentMode];
  const sx = Math.floor(offscreen.width * crop.x);
  const sy = Math.floor(offscreen.height * crop.y);
  const sw = Math.floor(offscreen.width * crop.width);
  const sh = Math.floor(offscreen.height * crop.height);

  canvas.width = sw;
  canvas.height = sh;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, sw, sh);
  ctx.drawImage(offscreen, sx, sy, sw, sh, 0, 0, sw, sh);
  setStatus("완료");
};

const changePage = (delta) => {
  if (!pdfDocument) return;
  const next = Math.min(Math.max(currentPage + delta, 1), pdfDocument.numPages);
  if (next === currentPage) return;
  currentPage = next;
  drawPage();
};

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentMode = button.dataset.mode;
    drawPage();
  });
});

prevPage.addEventListener("click", () => changePage(-1));
nextPage.addEventListener("click", () => changePage(1));

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") changePage(-1);
  if (event.key === "ArrowRight") changePage(1);
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js").catch(() => {});
}

pdfjs.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs";

pdfjs
  .getDocument(PDF_URL)
  .promise.then((doc) => {
    pdfDocument = doc;
    updateControls();
    return drawPage();
  })
  .catch(() => {
    setStatus("PDF를 불러오지 못했습니다");
  });
