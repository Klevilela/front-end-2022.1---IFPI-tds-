function carrega_componentes(){
    document.getElementById('link1').addEventListener('click', saudacao)
    document.getElementById('link2').addEventListener('click', calcular)
}

function saudacao(){
    var texto_cargo = document.getElementById('cargo').value
    texto_cargo = texto_cargo.toLowerCase()

    switch(texto_cargo){
        case 'admin':
            document.getElementById('resultado').innerHTML = 'Boas festas, Chefe ! !'
        break

        case 'gerente':
            document.getElementById('resultado').innerHTML = 'Felicidades, meu amigo !'
        break

        default:
            document.getElementById('resultado').innerHTML = 'Boas festas !'
    }
}

function calcular(){
    var n1 = parseInt(document.getElementById('n1').value)
    var n2 = parseInt(document.getElementById('n2').value)
    var op = document.getElementById('op').value

    switch (op){
        case '+':
            document.getElementById('resultado2').innerHTML = n1 + n2
        break

        case '-':
            document.getElementById('resultado2').innerHTML = n1 - n2
        break

        case '*':
            document.getElementById('resultado2').innerHTML = n1 * n2
        break

        case '/':
            document.getElementById('resultado2').innerHTML = n1 / n2
        break

        default:
            document.getElementById('resultado2').innerHTML = 'Operação inválida !'
    }
}