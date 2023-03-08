function toggleText() {

let btn = document.querySelector(".toggle-text-button");
  let text = document.querySelector("#text");
  btn.addEventListener("click", () => {
    text.hidden == true ? (text.hidden = false) : (text.hidden = true);
  });
