// ---- EDIT HERE ----------------------------------------------------------
const BANNER = "banner.jpg";

const GROUPS = [
  { name: "media", links: [
    ["youtube", "https://www.youtube.com"],
    ["netflix", "https://www.netflix.com"],
    ["crunchyroll", "https://www.crunchyroll.com"],
  ]},
  { name: "game dev", links: [
    ["ellipsus", "https://ellipsus.com"],
    ["renpy docs", "https://www.renpy.org/doc/html/index.html"],
    ["itch.io", "https://itch.io"],
  ]},
  { name: "gaming", links: [
    ["roll20", "https://roll20.net"],
    ["mabinogi world wiki", "https://wiki.mabinogiworld.com/"],
    ["universalis", "https://universalis.app"],
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
