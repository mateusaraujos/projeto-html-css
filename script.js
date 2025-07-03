const projeto = "projeto-html-css";
console.log(`Iniciando o ${projeto}`);

const form = document.getElementById("form-contato");

const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const erroNome = document.getElementById("erro-nome");
const erroEmail = document.getElementById("erro-email");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
    validarFormulario();
})

nomeInput.addEventListener("input", () => {
    if (nomeInput.value.trim() !== "") {
        nomeInput.classList.remove("erro");
        nomeInput.classList.add("sucesso");
        erroNome.style.display = "none";
    } else {
        nomeInput.classList.remove("sucesso");
        nomeInput.classList.add("erro");
        erroNome.innerText = "O nome é obrigatório.";
        erroNome.style.display = "block";
    }
})

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

emailInput.addEventListener("input", () => {
    if (emailInput.value.trim() !== "" && emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.remove("erro");
        emailInput.classList.add("sucesso");
        erroEmail.style.display = "none";
    } else {
        emailInput.classList.remove("sucesso");
        emailInput.classList.add("erro");
        erroEmail.innerText = "O e-mail é obrigatório.";
        erroEmail.style.display = "block";
    }
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
    } else if (emailInput.value.trim() !== "" && emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.remove("erro");
        emailInput.classList.add("sucesso");
        erroEmail.style.display = "none";
    }

    if (valido) {
        emailInput.value = ""; // Limpa o campo de email após a validação
        emailInput.classList.remove("erro", "sucesso");
        nomeInput.value = ""; // Limpa o campo de nome após a validação
        nomeInput.classList.remove("erro", "sucesso");

        alert("Formulário enviado com sucesso!");
    }
}