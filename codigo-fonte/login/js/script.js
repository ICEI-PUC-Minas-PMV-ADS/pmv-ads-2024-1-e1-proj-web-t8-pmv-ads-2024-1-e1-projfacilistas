let inputs = document.getElementsByClassName('input-form');
for (let input of inputs) {
    input.addEventListener("blur", function(){
        if (input.value.trim() != "") {
            input.classList.add('has-val');
        } else {
            input.classList.remove('has-val');
        }
    })
}


/*Validação do login do formulário*/

function logar() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if(login == "admin@admin" && senha == "admin") {
        alert('sucesso')
        location.href = "../../sistema/index.html"
        } else {
        alert('Usuário e login incorretos')
    }
};






/*teste*/
/*Validação dos campos do formulário*/

/*let form = document.getElementById('login-form');
form.addEventListener("submit", function(event) {
    let inputs = document.getElementsByClassName('input-form');
    for (let input of inputs) { 
        if (input.value.trim() == ""){
            input.parentElement.classList.add('wrap-input-invalid');
        } 
    }
    event.preventDefault();
});*/

/*if(login.value == "" || senha.value == "") {
    let form = document.getElementById('login-form');
    form.addEventListener("submit", function(event) {
        let inputs = document.getElementsByClassName('input-form');
        for (let input of inputs) { 
            if (input.value.trim() == ""){
                input.parentElement.classList.add('wrap-input-invalid');
            } 
        }
        event.preventDefault();
        });

} else {
    function logar() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if(login == "admin@admin" && senha == "admin") {
        alert('sucesso')
        location.href = "../../sistema/index.html"
        } else {
        alert('Usuário e login incorretos')
    }
};
}*/