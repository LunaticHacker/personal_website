const words = ["Sometimes Poems,", "But", "Mostly Code;"];
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
