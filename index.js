const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.getElementById("text"),
  text2: document.getElementById("text2"),
  a: document.querySelector("img"),
  input: document.querySelector("#songname"),
  input2: document.querySelector("#artistname"),
  input3: document.querySelector("#imglink"),
};
function makeCard() {
  let input = DOMSelectors.input.value;
  let input2 = DOMSelectors.input2.value;
  let input3 = DOMSelectors.input3.value;
  DOMSelectors.text.insertAdjacentHTML("afterend", `<p>${input}</p>`);
  DOMSelectors.input.value = "";
  DOMSelectors.text2.insertAdjacentHTML("afterend", `<p>${input2}</p>`);
  DOMSelectors.input2.value = "";
  DOMSelectors.a.src = `${input3}`;
  DOMSelectors.input3.value = "";
  const delbutton = document.createElement("button");
  document.querySelectorAll("#delbutton");
  DOMSelectors.a.appendChild(delbutton);
  delbutton.forEach((button) => {
    button.addEventListener("click", function () {
      DOMSelectors.text.value = "";
      DOMSelectors.text2.value = "";
      DOMSelectors.a.src = "";
    });
  });
}

DOMSelectors.button.addEventListener("click", function () {
  makeCard(DOMSelectors);
});
