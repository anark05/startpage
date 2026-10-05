// ---- EDIT HERE ----------------------------------------------------------
const BANNER = "banner.jpg"; // image above the search box, "" to hide

const GROUPS = [
  { name: "work", links: [
    ["gmail", "https://mail.google.com"],
    ["calendar", "https://calendar.google.com"],
    ["hubspot", "https://app.hubspot.com"],
    ["linkedin", "https://linkedin.com"],
  ]},
  { name: "dev", links: [
    ["github", "https://github.com"],
    ["python docs", "https://docs.python.org/3/"],
    ["godot docs", "https://docs.godotengine.org"],
    ["devdocs", "https://devdocs.io"],
  ]},
  { name: "reddit", links: [
    ["learnpython", "https://reddit.com/r/learnpython"],
    ["godot", "https://reddit.com/r/godot"],
    ["selfhosted", "https://reddit.com/r/selfhosted"],
  ]},
  { name: "play", links: [
    ["youtube", "https://youtube.com"],
    ["twitch", "https://twitch.tv"],
    ["netflix", "https://netflix.com"],
  ]},
];
// -------------------------------------------------------------------------

const grid = document.getElementById("grid");
for (const g of GROUPS) {
  const sec = document.createElement("section");
  const h = document.createElement("h2");
  h.textContent = g.name;
  const ul = document.createElement("ul");
  for (const [label, href] of g.links) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = label;
    a.href = href;
    li.appendChild(a);
    ul.appendChild(li);
  }
  sec.append(h, ul);
  grid.appendChild(sec);
}

if (BANNER) {
  const img = document.getElementById("banner");
  img.src = BANNER;
  img.style.display = "block";
}
