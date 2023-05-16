const menorValor = 1;
const maiorValor = 1000;

const numeroSecreto = geraNumeroAleatorio();

function geraNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor +1);
}

console.log('numero aleatório:', numeroSecreto);
var numeroDeTentativas = 0;
var numeroDeChances = 10;

const elementoMenorValor = document.getElementById("menor-valor");
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById("maior-valor");
elementoMaiorValor.innerHTML = maiorValor;