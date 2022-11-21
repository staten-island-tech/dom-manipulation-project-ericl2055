const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("parent"),
  input: document.querySelector("#songname"),
  input2: document.querySelector("#artistname"),
  input3: document.querySelector("#imglink"),
  output: document.getElementById("output"),
};

function clearinput() {
  DOMSelectors.input.value = "";
  DOMSelectors.input2.value = "";
  DOMSelectors.input3.value = "";
}
function remove() {
  center = document.querySelectorAll("#center");
  center.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.target.parentElement.remove();
    });
  });
}
function create(container) {
  let input = DOMSelectors.input.value;
  let input2 = DOMSelectors.input2.value;
  let input3 = DOMSelectors.input3.value;
  container.insertAdjacentHTML(
    "beforeend",
    `<div id = "center"> <p> <h1>${input}</h1> <h2>${input2}</h2> <img src  = ${input3}></p> <button id = "red">Done</button></div>`
  );
}

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  let input2 = DOMSelectors.input2.value;
  let input3 = DOMSelectors.input3.value;
  create(DOMSelectors.output, input, input2, input3);
  clearinput();
  remove();
});
