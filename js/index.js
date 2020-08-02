let escolhaJogador
let score = document.querySelector("h3#pontos")
let valorScore = 0
let vida = document.querySelector("h3#vida")
let valorVida = 3
let resultado = document.querySelector("p#resultado")

function selecao(escolha) {

    escolhaJogador = escolha

    if (escolhaJogador == 0) {
        escolhaJogador = "Pedra"
    } else if (escolhaJogador == 1) {
        escolhaJogador = "Papel"
    } else {
        escolhaJogador = "Tesoura"
    }
    /*   window.alert(`${escolhaJogador}`) */
}

function jogar() {

    let escolhaComputador = Math.floor(Math.random() * (3 - 0) - 0)
    if (escolhaComputador == 0) {
        escolhaComputador = "Pedra"
    } else if (escolhaComputador == 1) {
        escolhaComputador = "Papel"
    } else {
        escolhaComputador = "Tesoura"
    }

    if (escolhaJogador === "Pedra") {
        if (escolhaComputador === "Pedra") {
            resultado.innerHTML = `Empate, você escolheu ${escolhaJogador} o computador escolheu ${escolhaComputador}`
        } else if (escolhaComputador === "Tesoura") {
            resultado.innerHTML = `Jogador Ganhou, você escolheu ${escolhaJogador} o computador escolheu ${escolhaComputador}`
            valorScore++
        } else {
            resultado.innerHTML = `Jogador Perdeu, você escolheu ${escolhaJogador} o computador escolheu ${escolhaComputador}`
            valorVida--
        }
    } else if (escolhaJogador === "Tesoura") {
        if (escolhaComputador === "Pedra") {
            resultado.innerHTML =  `Jogador Perdeu, você escolheu ${escolhaJogador} o computador escolheu ${escolhaComputador}`
            valorVida--
        } else if (escolhaComputador === "Tesoura") {
            resultado.innerHTML = `Empate, você escolheu ${escolhaJogador} o computador escolheu ${escolhaComputador}`
            valorScore++
        } else {
            resultado.innerHTML = `Jogador Ganhou, você escolheu ${escolhaJogador} o computador escolheu ${escolhaComputador}`
        }
    } else if (escolhaJogador === "Papel") {
        if (escolhaComputador === "Tesoura") {
            resultado.innerHTML = `Jogador Perdeu, você escolheu ${escolhaJogador} o computador escolheu ${escolhaComputador}`
            valorScore++
        } else if (escolhaComputador === "Papel") {
            resultado.innerHTML =  `Empate, você escolheu ${escolhaJogador} o cumputador escolheu ${escolhaComputador}` 
        } else {
           resultado.innerHTML = `Jogador Ganhou, você escolheu ${escolhaJogador} o computador escolheu ${escolhaComputador}`
            valorVida--
        }
    }

    if (valorVida === 0) {
        resultado.innerHTML = `Se ferrou`
        valorVida = 3
        valorScore = 0
    }
    score.innerHTML = `Pontos: ${valorScore}`
    vida.innerHTML = `Vidas: ${valorVida}`
}

function reset() {
    valorScore = 0
    valorVida = 3
    score.innerHTML = `Belezura de Pontos: ${valorScore}`
    vida.innerHTML = `Vidas: ${valorVida}`
}





















/* 
if (escolhaJogador === "pedra" && escolhaComputador === "pedra") {
    alert(`empate`)
} else if (escolhaJogador === "papel" && escolhaComputador === "papel") {
    alert(`empate`)

} else if (escolhaJogador === "tesoura" && escolhaComputador === "tesoura") {
    alert(`empate`)

} else if (escolhaJogador === "papel" && escolhaComputador === "tesoura") {
    alert(`vc perdeu`)

} else if (escolhaJogador === "pedra" && escolhaComputador === "tesoura") {
    alert(`vc ganhou`)

} else if (escolhaJogador === "pedra" && escolhaComputador === "papel") {
    alert(`vc ganhou`)

} else if (escolhaJogador === "papel" && escolhaComputador === "pedra") {
    alert(`vc ganhou`)

} else if (escolhaJogador === "tesoura" && escolhaComputador === "papel") {
    alert(`vc ganhou`)

} else if (escolhaJogador === "tesoura" && escolhaComputador === "pedra") {
    alert(`vc perdeu`)
} */