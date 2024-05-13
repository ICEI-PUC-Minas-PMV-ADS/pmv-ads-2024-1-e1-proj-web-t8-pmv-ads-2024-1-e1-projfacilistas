let inputs = document.getElementsByClassName("input-form");
for (let input of inputs) {
  input.addEventListener("blur", function () {
    if (input.value.trim() != "") {
      input.classList.add("has-val");
    } else {
      input.classList.remove("has-val");
    }
  });
}

/*Validação do preenchimento do login e senha*/

let form = document.getElementById("login-form");
form.addEventListener("submit", function (event) {
  let inputs = document.getElementsByClassName("input-form");
  for (let input of inputs) {
    if (input.value.trim() == "") {
      input.parentElement.classList.add("wrap-input-invalid");
    }
  }
  event.preventDefault();
});

/*Validação do login do formulário*/

const allUsersString = window.localStorage.getItem("users");
const allUsers = JSON.parse(allUsersString);

function logar() {
  var login = document.getElementById("login").value;
  var senha = document.getElementById("senha").value;

  let user;

  allUsers.users.find((elem) => {
    if (elem.email == login && elem.password == senha) {
      user = elem;
      window.localStorage.setItem("userLogged", JSON.stringify(elem));
      location.href = "../sistema/index.html";
    }
  });

  if (!user) {
    alert("Usuário e login incorretos");
  }
}
/*Validação simples do login do formulário*/

/*function logar() {
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;

    if(login == "admin@admin" && senha == "admin") {
        alert('sucesso')
        location.href = "../sistema/index.html";
        } else {
        alert('Usuário e login incorretos')
    }
};*/
