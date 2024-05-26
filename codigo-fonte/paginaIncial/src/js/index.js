const btnMenuLateral = document.querySelector("#icon-header");
const exit = document.querySelector("#exit");
const menuLateral = document.querySelector("#navbar-lateral");

btnMenuLateral.addEventListener("click", () => {
  menuLateral.style.right = 0;
});

exit.addEventListener("click", () => {
  menuLateral.style.right = "-200px";
});
