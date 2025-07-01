const projeto = "projeto-html-css";
console.log(`Iniciando o ${projeto}`);

const form = document.getElementById("form-contato");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
    validarFormulario();
})

function mostrarMensagem() {
    alert("Bem-vindo ao projeto!");
}

function trocarTexto() {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerText = "Texto modificado com JS!";
    mensagemDiv.style.color = "purple";
    mensagemDiv.style.fontSize = "24px";
}

function validarFormulario() {
    const nome = document.getElementById("nome").value.trim(); // Remove espaços em branco
	const email = document.getElementById("email").value.trim();

    if (nome === "" || email === "") {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    console.log(`Nome: ${nome}`);
    console.log(`E-mail: ${email}`);
    alert("Formulário enviado com sucesso!");
}