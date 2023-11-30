if (localStorage.getItem("token") == null) {
    alert("O acesso a essa página é permitido apenas para usúarios logados!");
    window.location.href = "login.html";
}

let userLogado = JSON.parse(localStorage.getItem("userLogado"));

let logado = document.queryselector("#logado");
logado.innerHTML = `Olá ${userLogado.nome}`;

function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "login.html";
}