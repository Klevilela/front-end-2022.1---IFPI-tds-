function configurarPagina(){
    document.getElementById('link1').addEventListener('click', saudacao)
    document.getElementById('link2').addEventListener('click', saudacao2)
    document.getElementById('link3').addEventListener('click', saudacao3)
    document.getElementById('link4').addEventListener('click', limpar)
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