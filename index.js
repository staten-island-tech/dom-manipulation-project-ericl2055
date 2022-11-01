const DOMselectors = {
  button: document.getElementById("button"),
  text: document.querySelector("both"),
};
console.log(DOMselectors.button);
function text(text) {
  text.textContent = "song name, artist name";
  text.style.fontSize = "20px";
}
DOMselectors.button.addEventListener("click", function () {
  text(DOMselectors.text);
});
