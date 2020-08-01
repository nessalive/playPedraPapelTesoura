let escolhaJogador

function selecao(escolha) {

    escolhaJogador = escolha

    if (escolhaJogador == 0) {
        escolhaJogador = "pedra"
    } else if (escolhaJogador == 1) {
        escolhaJogador = "papel"
    } else {
        escolhaJogador = "tesoura"
    }
    window.alert(`${escolhaJogador}`)
}

function jogar() {
    let escolhaComputador = Math.floor(Math.random() * 3)
    alert(escolhaComputador)
    if (escolhaJogador === "pedra" && escolhaComputador === 0) {

    }
}