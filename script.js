let pontos = 0;

function mostrar(pagina) {

    document.getElementById("home").style.display = "none";
    document.getElementById("curiosidades").style.display = "none";
    document.getElementById("jogo").style.display = "none";

    document.getElementById(pagina).style.display = "block";

}

function clicarNuvem() {

    pontos = pontos + 1;

    document.getElementById("pontuacao").innerHTML = "Pontuação: " + pontos;

}

function reiniciar() {

    pontos = 0;

    document.getElementById("pontuacao").innerHTML = "Pontuação: 0";

}