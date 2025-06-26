let titulo = document.querySelector('h1');
titulo.textContent = 'Hora do Desafio';


function ConsoleButton(){
    console.log("O botão foi clicado");
}

function AlertButton(){
       alert('Eu amo JS');
}

function PromptButton(){
    let NomeDaCidade = prompt("Qual o nome da sua cidade?");
    if (NomeDaCidade) {
        alert(`Estive em ${NomeDaCidade} e lembrei de você.`);
    } else {
        alert("Você não digitou o nome da ciadade.");
    }
}

function SomaButton() {
    let num1 = prompt("Digite o primeiro número inteiro:");
    let num2 = prompt("Digite o segundo número inteiro:");

    // Converter para inteiro
    let inteiro1 = parseInt(num1, 10);
    let inteiro2 = parseInt(num2, 10);

    if (isNaN(inteiro1) || isNaN(inteiro2)) {
        alert("Por favor, digite números inteiros válidos.");
    } else {
        let soma = inteiro1 + inteiro2;
        alert(`A soma de ${inteiro1} + ${inteiro2} é ${soma}`);
    }
}
