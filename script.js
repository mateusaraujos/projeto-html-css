const projeto = "projeto-html-css";

console.log(`Iniciando o ${projeto}`);

function mostrarMensagem() {
    alert("Bem-vindo ao projeto!");
}

function trocarTexto() {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerText = "Texto modificado com JS!";
    mensagemDiv.style.color = "purple";
    mensagemDiv.style.fontSize = "24px";
}