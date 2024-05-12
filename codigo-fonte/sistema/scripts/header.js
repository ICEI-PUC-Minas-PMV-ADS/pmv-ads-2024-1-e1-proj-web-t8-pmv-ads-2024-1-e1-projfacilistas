const header = () => {
  document.addEventListener("DOMContentLoaded", function () {
    if (!userLogged || Object.keys(userLogged).length === 0) {
      alert("Você não está logado. Por favor, faça login.");
      window.location.href = "../login/login.html";
    }
  });

  const logout = document.getElementsByClassName("btn-header");
  logout[0].addEventListener("click", () => {
    window.localStorage.setItem("userLogged", JSON.stringify({}));
    window.location.href = "../paginaIncial/index.html";
  });

  const logo = document.getElementById("logo");
  logo.addEventListener("click", () => {
    window.location.href = "../paginaIncial/index.html";
  });
};
header();
