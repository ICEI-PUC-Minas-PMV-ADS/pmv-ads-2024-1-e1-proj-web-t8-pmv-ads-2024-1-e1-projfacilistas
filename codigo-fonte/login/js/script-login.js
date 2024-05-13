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

let valid = 0;

let form = document.getElementById("login-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let inputs = document.getElementsByClassName("input-form");
  for (let input of inputs) {
    if (input.value.trim() == "") {
      input.parentElement.classList.add("wrap-input-invalid");
    }
  }

  const email = document.querySelector("#login").value;
  const senha = document.querySelector("#senha").value;

  if (email === "" && senha === "") {
    alert("Todos os dados devem ser informados!");
    console.log({
      email: email,
      senha: senha,
    });
    return;
  }

  const listaUsuario = window.localStorage.getItem("contas");
  const listaUsuarioAjustada = JSON.parse(listaUsuario);

  if (listaUsuarioAjustada.length !== 0) {
    for (let i = 0; i < listaUsuarioAjustada.length; i++) {
      if (
        listaUsuarioAjustada[i].email === email &&
        listaUsuarioAjustada[i].senha === senha
      ) {
        window.localStorage.setItem("userLogado", email);
        window.location.href = "../sistema/index.html";
        return;
      }
    }
  } else {
    alert("Conta inexistente!");
    return;
  }

  alert("Conta inexistente!");
});

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
