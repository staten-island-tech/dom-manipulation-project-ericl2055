const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("parent"),
  input: document.querySelector("#songname"),
  input2: document.querySelector("#artistname"),
  input3: document.querySelector("#imglink"),
  a: document.querySelector("img"),
};

function removeParent(d) {
  d.remove();
}
DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  let input2 = DOMSelectors.input2.value;
  let input3 = DOMSelectors.input3.value;
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<p> - ${input} ${input2} <img src  = ${input3}> <button onclick="removeParent(this.parentNode)">Finished</button </p>`
  );
  DOMSelectors.input.value = "";
  DOMSelectors.input2.value = "";
  DOMSelectors.input3.value = "";
});
