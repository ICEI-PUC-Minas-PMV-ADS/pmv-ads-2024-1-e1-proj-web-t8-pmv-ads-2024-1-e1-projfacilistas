let inputs = document.getElementsByClassName("input-form");
        for(let input of inputs) {
            input.addEventListener("blur", function(){
                if(input.value.trim() != ""){
                    input.classList.add("has-val");
                } else {
                    input.classList.remove("has-val");
                }
        })
        }

const createUser = () => {
    const allUsersString = window.localStorage.getItem("users");
    const allUsers = JSON.parse(allUsersString);
   
    const users = allUsers;
    users.users.push({
      id: "3",
      name: document.getElementsByName("name"),
      email: document.getElementsByName("email"),
      password: document.getElementsByName("password"),
    });
    window.localStorage.setItem("users", JSON.stringify(users));
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