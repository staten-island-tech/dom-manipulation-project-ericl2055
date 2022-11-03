const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.getElementById("text"),
  text2: document.getElementById("text2"),
  input: document.querySelector("#songname"),
  input2: document.querySelector("#artistname"),
};

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  let input2 = DOMSelectors.input2.value;
  DOMSelectors.text.insertAdjacentHTML("afterend", `<p>${input}</p>`);
  DOMSelectors.input.value = "";
  DOMSelectors.text2.insertAdjacentHTML("afterend", `<p>${input2}</p>`);
  DOMSelectors.input2.value = "";
});
