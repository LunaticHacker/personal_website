const words = ["Sometimes Poems,", "But", "Mostly Code;"];
const poem_section = document.getElementById("poems");
const API_URL = "https://pw-cms.herokuapp.com/poems";
let wordIndex = 0;
let charIndex = 0;
(function boom() {
  if (wordIndex == words.length) wordIndex = 0;
  let currentText = words[wordIndex].slice(0, ++charIndex);
  document.querySelector(".typing").textContent = currentText;
  if (currentText.length == words[wordIndex].length) {
    wordIndex++;
    charIndex = 0;
  }
  setTimeout(boom, 500);
})();
(function drop() {
  let month = new Date().getMonth();
  for (let i = 0; i < 30; i++) {
    let emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.style.left = (Math.random() * window.innerWidth) / 4 + "px";
    emoji.style.top = (Math.random() * window.innerHeight) / 2 + "px";
    emoji.textContent = `${randomFromArray(m_data[month].emojis)}`;
    document.body.appendChild(emoji);
    document.body.style.color = m_data[month].color;
    let links = document.querySelectorAll("a");
    for (link of links) link.style["border-color"] = m_data[month].color;
  }
})();

function randomFromArray(arr) {
  let len = arr.length;
  let r = Math.floor(Math.random() * len);
  return arr[r];
}
//TODO : Add pagiantion ,will be useful if switch career :D
(async function getandSetPoems() {
  let res = await fetch(API_URL);
  let json = await res.json();
  for (let poem of json) {
    let content = poem.content.replace(/\n/g, "<br />");
    let poem_div = document.createElement("div");
    poem_div.classList.add("hand-drawn");
    poem_div.innerHTML = `<h1>${poem.name}</h1>
    <h3>${poem.desc}</h3>
    <p>${content}</p>`;
    poem_section.appendChild(poem_div);
  }
})();
