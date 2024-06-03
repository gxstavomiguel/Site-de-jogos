function load(){document.getElementById('btn').addEventListener('click', function() {
    window.location.href = "ind.html";
})}

function paginaHome(){document.getElementById('btnLogin').addEventListener('click', function() {
    window.location.href = Index.html;
})}


function permitirLogin(nome, senha) {
    if (nome == "Gustavo" & senha == "1234") {
        paginaHome();
    }
    
}