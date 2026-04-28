const DAYS = ["월", "화", "수", "목", "금", "토", "일"];
const PEOPLE = {
  dawon: { name: "다원", color: "#ff4fa3" },
  sechan: { name: "세찬", color: "#1b64f2" },
};

const versions = [
  {
    id: "latest",
    name: "최신표",
    note: "PDF 4페이지 기준",
    events: [
      ...school("dawon", { 월: "14:30", 화: "14:30", 수: "13:50", 목: "14:30", 금: "14:30" }),
      ...school("sechan", { 월: "13:50", 화: "13:50", 수: "13:50", 목: "14:30", 금: "13:50" }),
      e("dawon", "토", "10:00", "11:00", "독서", "study"),
      e("dawon", "토", "13:00", "15:00", "수학", "math"),
      e("dawon", "수", "14:20", "15:30", "배드민턴", "sports"),
      e("dawon", "월", "16:20", "19:05", "엠폴리", "english"),
      e("dawon", "금", "16:20", "19:05", "엠폴리", "english"),
      e("dawon", "화", "15:30", "17:30", "수영", "sports"),
      e("dawon", "목", "15:30", "17:30", "수영", "sports"),
      e("dawon", "수", "16:00", "17:00", "독서", "study"),
      e("dawon", "화", "19:00", "21:00", "수학", "math"),
      e("dawon", "목", "19:00", "21:00", "수학", "math"),
      e("dawon", "토", "16:30", "17:30", "기타", "music"),

      e("sechan", "토", "10:00", "11:00", "독서", "study"),
      e("sechan", "토", "12:00", "14:50", "필즈", "math"),
      e("sechan", "월", "14:00", "15:30", "해법", "math"),
      e("sechan", "수", "14:20", "15:30", "로봇과학", "science"),
      e("sechan", "금", "14:40", "15:50", "생명과학", "science"),
      e("sechan", "화", "15:30", "17:30", "수영", "sports"),
      e("sechan", "목", "15:30", "17:30", "수영", "sports"),
      e("sechan", "월", "16:00", "16:25", "드럼", "music"),
      e("sechan", "토", "16:00", "16:25", "드럼", "music"),
      e("sechan", "수", "16:20", "17:20", "독서", "study"),
      e("sechan", "월", "17:30", "19:00", "영어", "english"),
      e("sechan", "화", "17:30", "19:00", "해법", "math"),
      e("sechan", "수", "17:30", "19:00", "영어", "english"),
      e("sechan", "목", "17:30", "19:00", "해법", "math"),
      e("sechan", "금", "17:30", "19:00", "영어", "english"),
    ],
  },
  {
    id: "alt1",
    name: "스케줄 A",
    note: "PDF 1페이지 기준",
    events: [
      ...school("dawon", { 월: "14:30", 화: "14:30", 수: "13:50", 목: "14:30", 금: "14:30" }),
      ...school("sechan", { 월: "13:50", 화: "13:50", 수: "13:50", 목: "14:30", 금: "13:50" }),
      e("dawon", "토", "10:00", "11:00", "독서", "study"),
      e("dawon", "토", "13:00", "15:00", "수학", "math"),
      e("dawon", "수", "14:20", "15:30", "배드민턴", "sports"),
      e("dawon", "월", "16:20", "19:05", "엠폴리", "english"),
      e("dawon", "금", "16:20", "19:05", "엠폴리", "english"),
      e("dawon", "화", "15:30", "17:30", "수영", "sports"),
      e("dawon", "목", "15:30", "17:30", "수영", "sports"),
      e("dawon", "수", "16:00", "17:00", "독서", "study"),
      e("dawon", "화", "19:00", "21:00", "수학", "math"),
      e("dawon", "목", "19:00", "21:00", "수학", "math"),
      e("dawon", "수", "20:00", "20:50", "기타", "music"),

      e("sechan", "토", "10:00", "11:00", "독서", "study"),
      e("sechan", "토", "12:00", "14:50", "필즈", "math"),
      e("sechan", "월", "14:30", "15:00", "드럼", "music"),
      e("sechan", "화", "14:30", "15:30", "독서", "study"),
      e("sechan", "수", "14:20", "15:30", "로봇과학", "science"),
      e("sechan", "목", "15:00", "15:30", "드럼", "music"),
      e("sechan", "금", "14:40", "15:50", "생명과학", "science"),
      e("sechan", "월", "15:30", "18:00", "영어", "english"),
      e("sechan", "화", "16:00", "17:30", "해법", "math"),
      e("sechan", "수", "16:30", "17:30", "해법", "math"),
      e("sechan", "목", "16:00", "17:30", "해법", "math"),
      e("sechan", "금", "16:30", "17:30", "해법", "math"),
      e("sechan", "화", "18:00", "18:30", "테니스", "sports"),
      e("sechan", "목", "18:00", "18:30", "테니스", "sports"),
    ],
  },
  {
    id: "alt2",
    name: "스케줄 B",
    note: "PDF 3페이지 기준",
    events: [
      e("dawon", "월", "10:30", "11:30", "독서", "study"),
      e("dawon", "화", "10:30", "11:30", "독서", "study"),
      e("dawon", "수", "10:30", "11:30", "독서", "study"),
      e("dawon", "목", "10:30", "11:30", "독서", "study"),
      e("dawon", "금", "10:30", "11:30", "독서", "study"),
      e("dawon", "월", "13:00", "16:30", "도서관", "study"),
      e("dawon", "수", "13:00", "16:30", "도서관", "study"),
      e("dawon", "금", "13:00", "16:30", "도서관", "study"),
      e("dawon", "목", "14:00", "15:30", "미술", "art"),
      e("dawon", "화", "16:00", "17:00", "수영", "sports"),
      e("dawon", "목", "16:00", "17:00", "수영", "sports"),
      e("dawon", "금", "16:20", "17:10", "기타", "music"),
      e("dawon", "월", "17:30", "19:30", "이자경수학", "math"),
      e("dawon", "수", "17:30", "19:30", "이자경수학", "math"),
      e("dawon", "금", "17:30", "19:30", "이자경수학", "math"),
      e("dawon", "화", "18:10", "20:50", "영어", "english"),
      e("dawon", "일", "17:00", "19:00", "영어", "english"),

      e("sechan", "월", "10:30", "11:30", "독서", "study"),
      e("sechan", "화", "10:30", "11:30", "독서", "study"),
      e("sechan", "수", "10:30", "11:30", "독서", "study"),
      e("sechan", "목", "10:30", "11:30", "독서", "study"),
      e("sechan", "금", "10:30", "11:30", "독서", "study"),
      e("sechan", "토", "12:00", "14:50", "필즈수학", "math"),
      e("sechan", "월", "13:00", "14:20", "해법수학", "math"),
      e("sechan", "화", "13:00", "14:00", "태권도", "sports"),
      e("sechan", "수", "13:00", "14:00", "태권도", "sports"),
      e("sechan", "목", "13:00", "14:00", "태권도", "sports"),
      e("sechan", "금", "13:00", "14:00", "태권도", "sports"),
      e("sechan", "월", "15:30", "18:00", "영어학원", "english"),
      e("sechan", "금", "15:30", "18:00", "영어학원", "english"),
      e("sechan", "화", "16:00", "17:20", "해법수학", "math"),
      e("sechan", "수", "16:00", "17:20", "해법수학", "math"),
      e("sechan", "목", "16:00", "17:20", "해법수학", "math"),
      e("sechan", "월", "18:30", "19:00", "드럼", "music"),
      e("sechan", "수", "18:30", "19:00", "드럼", "music"),
      e("sechan", "금", "18:30", "19:00", "드럼", "music"),
      e("sechan", "월", "19:30", "20:00", "눈높이", "study"),
    ],
  },
];

const state = {
  view: "day",
  person: "dawon",
  version: "latest",
  day: currentDayName(),
};

const content = document.querySelector("#content");
const weekToggle = document.querySelector("#weekToggle");
const todayText = document.querySelector("#todayText");
const currentStatus = document.querySelector("#currentStatus");
const nextStatus = document.querySelector("#nextStatus");
const personButtons = [...document.querySelectorAll("[data-person]")];
let carouselScrollTimer;

init();

function init() {
  updateDateText();

  personButtons.forEach((button) => button.addEventListener("click", () => updateState("person", button.dataset.person)));
  weekToggle.addEventListener("click", () => setView(state.view === "day" ? "week" : "day"));

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  }

  render();
}

function setView(view) {
  state.view = view;
  render();
}

function updateState(key, value) {
  state[key] = value;
  render();
}

function render() {
  const versionEvents = activeVersion().events;
  personButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.person === state.person));
  weekToggle.textContent = state.view === "day" ? "주간" : "일간";
  weekToggle.classList.toggle("is-week", state.view === "week");
  updateDateText();
  updateProfileCounts(versionEvents);

  const events = filteredEvents();
  updateStatus(events);

  if (state.view === "day") renderDay(events);
  if (state.view === "week") renderWeek(events);
}

function renderDay(events) {
  content.innerHTML = `
    <div class="day-carousel" id="dayCarousel" aria-label="요일별 일간 일정">
      ${DAYS.map((day) => {
        const dayEvents = sortEvents(events.filter((event) => event.day === day));
        return `
          <section class="day-panel" aria-label="${day}요일 일정">
            <div class="day-panel-head">
              <strong>${formatDayDate(day)}</strong>
              <span>${PEOPLE[state.person].name}</span>
            </div>
            <div class="timeline">
              ${dayEvents.length ? dayEvents.map(eventCard).join("") : empty("일정이 없습니다.")}
            </div>
          </section>
        `;
      }).join("")}
    </div>
  `;
  connectDayCarousel();
}

function renderWeek(events) {
  content.innerHTML = `
    <div class="section-head">
      <div>
        <h2>${PEOPLE[state.person].name}의 주간 일정</h2>
      </div>
    </div>
    <div class="week-grid">
      ${DAYS.map((day) => {
        const dayEvents = sortEvents(events.filter((event) => event.day === day));
        return `
          <article class="day-column">
            <h3>${day}</h3>
            ${dayEvents.length ? dayEvents.map(compactEvent).join("") : `<span class="no-event">비어 있음</span>`}
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function eventCard(event) {
  const current = isCurrentEvent(event);
  return `
    <article class="event-card ${current ? "is-current" : ""}" style="--accent:${PEOPLE[event.person].color}">
      <div class="time">${event.start} - ${event.end}</div>
      <div>
        <strong>${event.title}${current ? `<span class="live-badge">진행중</span>` : ""}</strong>
        <span>${PEOPLE[event.person].name} · ${categoryLabel(event.category)}</span>
      </div>
    </article>
  `;
}

function compactEvent(event) {
  return `
    <div class="compact-event ${event.category}" style="--accent:${PEOPLE[event.person].color}">
      <strong>${event.title}</strong>
      <span>${event.start} - ${event.end} · ${PEOPLE[event.person].name}</span>
    </div>
  `;
}

function filteredEvents() {
  const events = activeVersion().events;
  return events.filter((event) => event.person === state.person);
}

function updateProfileCounts(events) {
  const today = currentDayName();
  for (const person of Object.keys(PEOPLE)) {
    const count = events.filter((event) => event.person === person && event.day === today).length;
    const el = document.querySelector(`#${person}Today`);
    if (el) el.textContent = `오늘 ${count}개`;
  }
}

function activeVersion() {
  return versions.find((version) => version.id === state.version) ?? versions[0];
}

function updateStatus(events) {
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const dayEvents = sortEvents(events.filter((event) => event.day === state.day));
  const current = dayEvents.find((event) => toMinutes(event.start) <= nowMinutes && nowMinutes < toMinutes(event.end));
  const next = dayEvents.find((event) => toMinutes(event.start) > nowMinutes);

  currentStatus.textContent = current ? `${current.title} 진행중` : "진행중 없음";
  currentStatus.classList.toggle("is-live", Boolean(current));
  nextStatus.textContent = next ? `${next.start} ${next.title}` : "남은 일정 없음";
}

function isCurrentEvent(event) {
  if (event.day !== state.day) return false;
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  return toMinutes(event.start) <= nowMinutes && nowMinutes < toMinutes(event.end);
}

function connectDayCarousel() {
  const carousel = document.querySelector("#dayCarousel");
  if (!carousel) return;

  const index = DAYS.indexOf(state.day);
  requestAnimationFrame(() => {
    carousel.scrollLeft = carousel.clientWidth * index;
  });

  carousel.addEventListener("scroll", () => {
    window.clearTimeout(carouselScrollTimer);
    carouselScrollTimer = window.setTimeout(() => {
      const nextIndex = Math.round(carousel.scrollLeft / carousel.clientWidth);
      const nextDay = DAYS[Math.min(Math.max(nextIndex, 0), DAYS.length - 1)];
      if (nextDay !== state.day) {
        state.day = nextDay;
        updateDateText();
        updateStatus(filteredEvents());
      }
    }, 80);
  });
}

function sortEvents(events) {
  return [...events].sort((a, b) => DAYS.indexOf(a.day) - DAYS.indexOf(b.day) || toMinutes(a.start) - toMinutes(b.start));
}

function school(person, endsByDay) {
  return Object.entries(endsByDay).map(([day, end]) => e(person, day, "09:00", end, "학교수업", "school"));
}

function e(person, day, start, end, title, category) {
  return { person, day, start, end, title, category };
}

function currentDayName() {
  return DAYS[(new Date().getDay() + 6) % 7];
}

function updateDateText() {
  todayText.textContent = formatDayDate(state.day);
}

function formatDayDate(day) {
  const formatter = new Intl.DateTimeFormat("ko-KR", {
    month: "long",
    day: "numeric",
    weekday: "long",
  });
  return formatter.format(dateForDay(day));
}

function dateForDay(day) {
  const today = new Date();
  const diff = DAYS.indexOf(day) - DAYS.indexOf(currentDayName());
  return new Date(today.getFullYear(), today.getMonth(), today.getDate() + diff);
}

function toMinutes(time) {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

function categoryLabel(category) {
  const labels = {
    school: "학교",
    study: "학습",
    math: "수학",
    english: "영어",
    sports: "운동",
    science: "과학",
    music: "음악",
    art: "예술",
  };
  return labels[category] ?? "기타";
}

function empty(message) {
  return `<div class="empty">${message}</div>`;
}
