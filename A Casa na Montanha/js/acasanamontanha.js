/* acasanamontanha.js */

var nomeJogador;

function solicitaNomeJogador() {
    nomeJogador = prompt("Olá. Qual seu nome?");
    if ((nomeJogador == null) || (nomeJogador.trim() == '')) {
        nomeJogador = 'Jogador';
    }
    else {
        nomeJogador = nomeJogador.trim();
    }
}
        
function escreveNomeJogador() {
    document.getElementById('jogador').innerText = nomeJogador;
}
        
function salvaNomeJogador() {
    document.cookie = nomeJogador;
}

function leCookie() {
    nomeJogador = document.cookie;
    if (nomeJogador == '') {
        location = 'index.html';
    }
}
