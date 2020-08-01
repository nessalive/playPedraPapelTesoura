let escolhaJogador
let score = document.querySelector("h1#pontos")
let valorScore = 0
let vida = document.querySelector("h1#vida")
let valorVida = 3

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
            alert(`empate`)
        } else if (escolhaComputador === "tesoura") {
            alert(`Jogador venceu`)
            valorScore++
        } else {
            alert(`Jogador Perdeu`)
            valorVida--
        }
    } else if (escolhaJogador === "tesoura") {
        if (escolhaComputador === "pedra") {
            alert(`Jogador Perdeu`)
            valorVida--
        } else if (escolhaComputador === "tesoura") {
            alert(`jogador Ganhou`)
            valorScore++
        } else {
            alert(`Empate`)
        }
    } else if (escolhaJogador === "papel") {
        if (escolhaComputador === "tesoura") {
            alert(`ganhou`)
            valorScore++
        } else if (escolhaComputador === "papel") {
            alert(`empate`)
        } else {
            alert(`perdeu`)
            valorVida--
        }
    }

    if (valorVida === 0) {
        alert(`Se ferrou`)
        valorVida = 3
        valorScore = 0
    }
    score.innerHTML = ` Belezura de Pontos: ${valorScore}`
    vida.innerHTML = `Vida: ${valorVida}`
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