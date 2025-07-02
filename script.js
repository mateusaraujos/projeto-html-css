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
    const nomeInput = document.getElementById("nome");
	const emailInput = document.getElementById("email");
    const erroNome = document.getElementById("erro-nome");
    const erroEmail = document.getElementById("erro-email");

    let valido = true;

    // Validação do nome
    if (nomeInput.value.trim() === "") {
        nomeInput.classList.add("erro");
        erroNome.innerText = "O nome é obrigatório.";
        erroNome.style.display = "block";
        valido = false;
    } else {
        nomeInput.classList.remove("erro");
        nomeInput.classList.add("sucesso");
        erroNome.style.display = "none";
    }

    // Validação do email
    if (emailInput.value.trim() === "") {
        emailInput.classList.add("erro");
        erroEmail.innerText = "O e-mail é obrigatório.";
        erroEmail.style.display = "block";
        valido = false;
    } else {
        emailInput.classList.remove("erro");
        emailInput.classList.add("sucesso");
        erroEmail.style.display = "none";
    }

    if (valido) {
        alert("Formulário enviado com sucesso!");
    }
}