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

const formulario = document.querySelector("form");

formulario.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const nome = document.querySelector("#nome").value;
  const email = document.querySelector("#email").value;
  const senha = document.querySelector("#senha").value;

  if (!nome | !email | !senha) {
    alert("Todos os dados devem ser preenchidos");
    return;
  }

  const allUsers = window.localStorage.getItem("users");
  let allUsersFormated = JSON.parse(allUsers);

  let usersFinal;

  if (allUsersFormated) {
    for (let i = 0; i < allUsersFormated.length; i++) {
      if (allUsersFormated[i].email === email) {
        document.querySelector("#email").style.color = "red";
        alert("Já existe conta cadastrada com esse e-mail!");
        return;
      }
    }

    const users = allUsersFormated;
    users.users.push({
      id: generateUUID(),
      email: email,
      name: nome,
      password: senha,
    });
    usersFinal = users;
  } else {
    const users = { users: [] };
    users.users.push({
      id: generateUUID(),
      email: email,
      name: nome,
      password: senha,
    });
    usersFinal = users;
  }

  window.localStorage.setItem("users", JSON.stringify(usersFinal));

  window.location.href = "../login/login.html";
});

const generateUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

/*   const createUser = () => {
    const allUsersString = window.localStorage.getItem("users");
    const allUsers = JSON.parse(allUsersString);
   
    const users = allUsers;
    users.users.push({
      id: "3",
      name: "usuario3",
      email: "usuario3@email.com",
      password: "hash de senha",
    });
    window.localStorage.setItem("users", JSON.stringify(users));
  }; */
