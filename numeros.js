function carregarComponentes() {
    document.getElementById('descobrir_dobro').addEventListener('click', funcao_dobrar)
    document.getElementById('descobrir_menor').addEventListener('click', funcao_menor)
    document.getElementById('descobrir_soma').addEventListener('click', funcao_soma_antecessor)
}

function funcao_dobrar() {
    var n1 = parseInt(document.getElementById('n1').value)

    n1 = dobrar(n1)

    document.getElementById('resultado1').innerHTML = n1
}

function dobrar(n) {
    return n * 2
}

function funcao_menor() {
    var n2 = parseInt(document.getElementById('n2').value)
    var n3 = parseInt(document.getElementById('n3').value)

    var menor = menor_numero(n2, n3)

    document.getElementById('resultado2').innerHTML = `O menor número é ${menor}`
}

function menor_numero(n1, n2) {
    if (n1 > n2) {
        return n2
    }
    else {
        return n1
    }
}

function funcao_soma_antecessor() {
    var n4 = parseInt(document.getElementById('n4').value)

    var soma = soma_antecessor(n4)

    document.getElementById('resultado3').innerHTML = soma
}

function soma_antecessor(n) {
    var soma = 0
    var index = 1

    while (index < n) {
        soma += index
        index++
    }
    return soma
}