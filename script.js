const ul = document.querySelector("ul");
const bar = document.querySelector(".bar");

bar.addEventListener("click", menu);

function menu() {
  document.body.classList.toggle("nav-show");
}
