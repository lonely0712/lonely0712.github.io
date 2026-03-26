let data;
let toolsData = [];

fetch("data.json")
  .then(res => res.json())
  .then(json => {
    data = json;
    toolsData = data.tools;
    loadData();
  });

function loadData() {
  document.getElementById("name").textContent = data.name;
  document.getElementById("avatar").src = data.avatar;

  document.getElementById("nameTop").textContent = data.name;
  document.getElementById("avatarTop").src = data.avatar;

  loadPortfolio();
  loadTools();
  loadExtra();
}

/* PORTFOLIO = BUTTONS */
function loadPortfolio() {
  const container = document.getElementById("portfolio");

  data.portfolio.forEach(item => {
    container.innerHTML += `
      <a href="${item.link}" class="link-btn" target="_blank">
        <img src="${item.image}">
        <span>${item.name}</span>
      </a>
    `;
  });
}

/* TOOLS = CARDS */
function loadTools() {
  const container = document.getElementById("toolsList");

  container.innerHTML = "";

  toolsData.forEach(item => {
    container.innerHTML += `
      <a href="${item.link}" class="card" target="_blank">
        <img src="${item.image}">
        <div class="card-content">
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
        </div>
      </a>
    `;
  });
}

/* SEARCH */
function searchTools() {
  const value = document.getElementById("search").value.toLowerCase();

  toolsData = data.tools.filter(t =>
    t.name.toLowerCase().includes(value)
  );

  loadTools();
}

/* EXTRA DROPDOWN */
function loadExtra() {
  const dropdown = document.getElementById("dropdownMenu");

  data.extra.forEach(item => {
    dropdown.innerHTML += `
      <a href="${item.link}" target="_blank">${item.name}</a>
    `;
  });
}

/* NAV */
function showTab(tabId, el) {
  document.querySelectorAll(".tab-content").forEach(e => e.classList.remove("active"));
  document.querySelectorAll(".tab").forEach(e => e.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
  el.classList.add("active");

  if (tabId === "portfolio") {
    document.getElementById("profile").style.display = "block";
    document.getElementById("header").style.display = "none";
  } else {
    document.getElementById("profile").style.display = "none";
    document.getElementById("header").style.display = "flex";
  }
}

/* DROPDOWN */
function toggleDropdown() {
  document.getElementById("dropdownMenu").classList.toggle("show");
}