const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.getElementById("text"),
};
console.log(DOMSelectors.text);

function text(text) {
  text.textContent = "song name, artist name";
  text.style.fontSize = "20px";
}
DOMSelectors.button.addEventListener("click", function () {
  text(DOMSelectors.text);
});
