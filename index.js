const DOMSelectors = {
  button: document.getElementById("btn"),
  reset: document.getElementById("btn2"),
  text: document.getElementById("text"),
  text2: document.getElementById("text2"),
  a: document.querySelector("img"),
  input: document.querySelector("#songname"),
  input2: document.querySelector("#artistname"),
  input3: document.querySelector("#imglink"),
};
function image() {
  let input3 = DOMSelectors.input3.value;
  DOMSelectors.a.src = `${input3}`;
  DOMSelectors.input3.value = "";
}
DOMSelectors.reset.addEventListener("click", function () {
  DOMSelectors.text.value = "";
  DOMSelectors.text2.value = "";
  DOMSelectors.a.src = "";
});
DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  let input2 = DOMSelectors.input2.value;
  DOMSelectors.text.insertAdjacentHTML("afterend", `<p>${input}</p>`);
  DOMSelectors.input.value = "";
  DOMSelectors.text2.insertAdjacentHTML("afterend", `<p>${input2}</p>`);
  DOMSelectors.input2.value = "";
  image(DOMSelectors.a);
});
