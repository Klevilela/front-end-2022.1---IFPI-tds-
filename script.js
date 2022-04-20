function configurarPagina(){
    document.getElementById('link1').addEventListener('click', saudacao)
    document.getElementById('link2').addEventListener('click', saudacao2)
    document.getElementById('link3').addEventListener('click', saudacao3)
    document.getElementById('link4').addEventListener('click', limpar)

    document.getElementById('n1').addEventListener('click',  somar)
    document.getElementById('n2').addEventListener('click',  somar)
    document.getElementById('soma').addEventListener('click', somar)
}

function saudacao(){
    alert('Boa tarde, boa quarta !')
}

function saudacao2(){
    alert('Bom feriado')
}

function saudacao3(){
    document.getElementById('resultado').innerHTML = '<h1>Olá a todos</h1>'
}

function limpar(){
    document.getElementById('resultado').innerHTML= ''
}

function somar(){
    const  n1 = parseInt(document.getElementById('n1').value)
    const  n2 = parseInt(document.getElementById('n2').value)

    const soma = n1 + n2

    document.getElementById('soma').innerHTML=`<h1>${soma}</h1>`
}