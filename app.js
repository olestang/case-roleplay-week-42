(() => {
  "use strict";

  const state = {
    groupSize: null,
    caseId: null,
    roleKey: null,
    level: null
  };

  const levelLabels = {
    supported: "Level 1 · Supported",
    standard: "Level 2 · Standard",
    challenge: "Level 3 · Challenge"
  };

  const screenOrder = ["group", "case", "role", "level", "briefing"];
  const screens = Object.fromEntries(screenOrder.map(name => [name, document.querySelector(`#${name}-screen`)]));
  const caseGrid = document.querySelector("#case-grid");
  const roleGrid = document.querySelector("#role-grid");
  const chosenCaseSummary = document.querySelector("#chosen-case-summary");
  const privacyCover = document.querySelector("#privacy-cover");

  function currentCase() {
    return CASES.find(item => item.id === state.caseId) || null;
  }

  function availableCases() {
    return CASES.filter(item => item.groupSizes.includes(state.groupSize));
  }

  function roleKeysForCase(item) {
    return state.groupSize === 3 ? item.roleOrder3 : item.roleOrder4;
  }

  function showScreen(name) {
    Object.entries(screens).forEach(([key, el]) => el.classList.toggle("active", key === name));
    updateProgress(name);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateProgress(activeName) {
    const activeIndex = screenOrder.indexOf(activeName);
    document.querySelectorAll("#progress li").forEach((li, index) => {
      li.classList.toggle("active", index === activeIndex);
      li.classList.toggle("done", index < activeIndex);
    });
  }

  function savePublicProgress() {
    // Store only non-private navigation choices. Role stories and levels are intentionally not persisted.
    localStorage.setItem("kindergartenRoleplay.publicProgress", JSON.stringify({
      groupSize: state.groupSize,
      caseId: state.caseId
    }));
  }

  function clearPrivateState() {
    state.roleKey = null;
    state.level = null;
  }

  function selectGroupSize(size) {
    state.groupSize = Number(size);
    state.caseId = null;
    clearPrivateState();
    savePublicProgress();
    renderCases();
    showScreen("case");
  }

  function renderCases() {
    caseGrid.innerHTML = "";
    const cases = availableCases();

    cases.forEach((item, index) => {
      const button = document.createElement("button");
      button.className = "case-card";
      button.innerHTML = `
        <span class="case-number">CASE ${String(index + 1).padStart(2, "0")}</span>
        <span class="case-icon" aria-hidden="true">${item.icon}</span>
        <h2>${item.title}</h2>
        <p>${item.preview}</p>
        <span class="case-fit">For ${item.groupSizes.join(" or ")} people</span>
      `;
      button.addEventListener("click", () => selectCase(item.id));
      caseGrid.appendChild(button);
    });
  }

  function selectCase(caseId) {
    state.caseId = caseId;
    clearPrivateState();
    savePublicProgress();
    renderRoles();
    showScreen("role");
  }

  function renderRoles() {
    const item = currentCase();
    const keys = roleKeysForCase(item);

    chosenCaseSummary.innerHTML = `
      <span class="icon" aria-hidden="true">${item.icon}</span>
      <span><strong>${item.title}</strong><small>${state.groupSize}-person version · ${item.setting}</small></span>
    `;

    roleGrid.innerHTML = "";
    keys.forEach((key, index) => {
      const role = item.roles[key];
      const button = document.createElement("button");
      button.className = "role-card";
      button.innerHTML = `
        <span class="role-letter">${String.fromCharCode(65 + index)}</span>
        <span>
          <h3>${role.name}</h3>
          <p>Choose this role only if nobody else in your group has chosen it.</p>
          ${role.starter ? '<span class="starter-chip">Conversation starter</span>' : ""}
        </span>
      `;
      button.addEventListener("click", () => {
        state.roleKey = key;
        state.level = null;
        showScreen("level");
      });
      roleGrid.appendChild(button);
    });
  }

  function chooseLevel(level) {
    state.level = level;
    renderBriefing();
    showScreen("briefing");
  }

  function renderBriefing() {
    const item = currentCase();
    const role = item.roles[state.roleKey];
    const paragraphs = role.levels[state.level];

    document.querySelector("#story-badges").innerHTML = `
      <span class="badge">${state.groupSize} people</span>
      <span class="badge">${levelLabels[state.level]}</span>
    `;
    document.querySelector("#story-role").textContent = role.name;
    document.querySelector("#story-case").textContent = `${item.title} · ${item.setting}`;
    document.querySelector("#story-icon").textContent = item.icon;

    const storyText = document.querySelector("#story-text");
    storyText.innerHTML = "";
    paragraphs.forEach(text => {
      const p = document.createElement("p");
      p.textContent = text;
      storyText.appendChild(p);
    });

    const starterBox = document.querySelector("#starter-box");
    const starterReminder = document.querySelector("#starter-reminder");
    if (role.starter) {
      starterBox.classList.remove("hidden");
      starterBox.innerHTML = `<strong>🎬 You open the conversation.</strong><span>${role.starterCue}</span>`;
      starterReminder.textContent = "You are the starter. When everyone has put their story away, open the conversation in your own words.";
    } else {
      starterBox.classList.add("hidden");
      starterBox.innerHTML = "";
      starterReminder.textContent = "Wait for the person marked ‘Conversation starter’ to begin, then respond naturally as your character.";
    }

    privacyCover.classList.add("hidden");
  }

  function resetAll() {
    state.groupSize = null;
    state.caseId = null;
    clearPrivateState();
    localStorage.removeItem("kindergartenRoleplay.publicProgress");
    showScreen("group");
  }

  document.querySelectorAll("[data-group-size]").forEach(button => {
    button.addEventListener("click", () => selectGroupSize(button.dataset.groupSize));
  });

  document.querySelectorAll("[data-level]").forEach(button => {
    button.addEventListener("click", () => chooseLevel(button.dataset.level));
  });

  document.querySelectorAll("[data-back]").forEach(button => {
    button.addEventListener("click", () => {
      const target = button.dataset.back;
      if (target === "group") {
        state.caseId = null;
        clearPrivateState();
      }
      if (target === "case") clearPrivateState();
      if (target === "role") state.level = null;
      showScreen(target);
    });
  });

  document.querySelector("#hide-card").addEventListener("click", () => privacyCover.classList.remove("hidden"));
  document.querySelector("#reveal-card").addEventListener("click", () => privacyCover.classList.add("hidden"));
  document.querySelector("#new-role").addEventListener("click", () => {
    clearPrivateState();
    renderRoles();
    showScreen("role");
  });
  document.querySelector("#start-over").addEventListener("click", resetAll);
  document.querySelector("#home-link").addEventListener("click", event => {
    event.preventDefault();
    resetAll();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !privacyCover.classList.contains("hidden")) {
      privacyCover.classList.add("hidden");
    }
  });

  // A refresh may restore only group size and case, never a private role card.
  try {
    const saved = JSON.parse(localStorage.getItem("kindergartenRoleplay.publicProgress") || "null");
    if (saved && [3, 4].includes(Number(saved.groupSize))) {
      state.groupSize = Number(saved.groupSize);
      renderCases();
      const savedCase = CASES.find(item => item.id === saved.caseId && item.groupSizes.includes(state.groupSize));
      if (savedCase) {
        state.caseId = savedCase.id;
        renderRoles();
      }
    }
  } catch (_) {
    localStorage.removeItem("kindergartenRoleplay.publicProgress");
  }

  showScreen("group");
})();
