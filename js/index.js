let escolhaJogador
let score = document.querySelector("h1#pontos")
let valorScore = 0
let vida = document.querySelector("h1#vida")
let valorVida = 3
let resultado = document.querySelector("p#resultado")

function selecao(escolha) {

    escolhaJogador = escolha

    if (escolhaJogador == 0) {
        escolhaJogador = "pedra"
    } else if (escolhaJogador == 1) {
        escolhaJogador = "papel"
    } else {
        escolhaJogador = "tesoura"
    }
    /*   window.alert(`${escolhaJogador}`) */
}

function jogar() {

    let escolhaComputador = Math.floor(Math.random() * (3 - 0) - 0)
    if (escolhaComputador == 0) {
        escolhaComputador = "pedra"
    } else if (escolhaComputador == 1) {
        escolhaComputador = "papel"
    } else {
        escolhaComputador = "tesoura"
    }

    if (escolhaJogador === "pedra") {
        if (escolhaComputador === "pedra") {
            resultado.innerHTML = `empate, você escolheu ${escolhaJogador} o computador escolheu ${escolhaComputador}`
        } else if (escolhaComputador === "tesoura") {
            resultado.innerHTML = `Jogador venceu, você escolheu ${escolhaJogador} o computador escolheu ${escolhaComputador}`
            valorScore++
        } else {
            resultado.innerHTML = `Jogador Perdeu, você escolheu ${escolhaJogador} o computador escolheu ${escolhaComputador}`
            valorVida--
        }
    } else if (escolhaJogador === "tesoura") {
        if (escolhaComputador === "pedra") {
            resultado.innerHTML =  `Jogador Perdeu, você escolheu ${escolhaJogador} o computador escolheu ${escolhaComputador}`
            valorVida--
        } else if (escolhaComputador === "tesoura") {
            resultado.innerHTML = `Jogador Ganhou, você escolheu ${escolhaJogador} o computador escolheu ${escolhaComputador}`
            valorScore++
        } else {
            resultado.innerHTML = `Empate, você escolheu ${escolhaJogador} o computador escolheu ${escolhaComputador}`
        }
    } else if (escolhaJogador === "papel") {
        if (escolhaComputador === "tesoura") {
            resultado.innerHTML = `Jogador Ganhou, você escolheu ${escolhaJogador} o computador escolheu ${escolhaComputador}`
            valorScore++
        } else if (escolhaComputador === "papel") {
            resultado.innerHTML =  `Empate, você escolheu ${escolhaJogador} o cumputador escolheu ${escolhaComputador}` 
        } else {
           resultado.innerHTML = `Jogador Perdeu, você escolheu ${escolhaComputador} o computador escolheu ${escolhaComputador}`
            valorVida--
        }
    }

    if (valorVida === 0) {
        resultado.innerHTML = `Se ferrou`
        valorVida = 3
        valorScore = 0
    }
    score.innerHTML = ` Belezura de Pontos: ${valorScore}`
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