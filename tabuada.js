function carregar_componentes() {
    document.getElementById('resultado_for').addEventListener('click', tabuada_for)
    document.getElementById('resultado_for').addEventListener('click', tabuada_while)
    document.getElementById('resultado_for').addEventListener('click', tabuada_doWhile)
}

function tabuada_for() {
    var n1 = parseInt(document.getElementById('n1').value)
    var resultado = ' '
    const i = 0

    for (i; i <= 10; i++) {
        resultado = resultado + `${n1} x ${i}`
    }

    document.getElementById('resultado_for').innerHTML = resultado
}