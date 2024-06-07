var nome = document.getElementById("name").value;
var senha = document.getElementById("password").value;

console.log(nome, senha);

function permitirLogin(nome, senha) {
  if (nome == "Gustavo" && senha == 1234) {
    paginaHome();
  } else {
    alert("Nome ou senha incorretos");
  }
}

function paginaHome() {
  window.location.href = index.html;
}


