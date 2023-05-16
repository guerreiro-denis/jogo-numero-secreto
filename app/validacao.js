function validaOChute(chute) {
    const numero = +chute;
    //além de cria a const a soma faz com que o type seja int.
    if (chuteNaoNumeral(numero)) {
        //confere Number.isNaN confere se o parâmetro é ou não número, true significa q é Nan.
        elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
        <div>Valor inválido: tente chutar um número natural.</div>
    `
    }
    
    if (chuteForaDoRange(numero)) {
        elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
        Valor inválido: O número secreto estar entre ${menorValor} e ${maiorValor}.
        `
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Parabéns você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="botao-ng" class="botao-ng">Jogar novamente</button>
        `
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `;

    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `;
    }
}

function chuteNaoNumeral(numero) {
    return Number.isNaN(numero);
    //confere Number.isNaN confere se o parâmetro é ou não número, true significa q é Nan.
}

function chuteForaDoRange(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == "botao-ng") {
        window.location.reload();
    }
})