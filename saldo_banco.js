
function carrega_banco(){
    document.getElementById('saldo').innerHTML = `<h1>Saldo:  ${0}  R$`
    document.getElementById('estado').innerHTML = '<h2>Saldo positivo</h2>'

    document.getElementById('sacar').addEventListener('click', sacar)
    document.getElementById('depositar').addEventListener('click', depositar)
}

function depositar(){
    var valor_deposito = parseInt(document.getElementById('valor_deposito').value)
    let saldo = document.getElementById('saldo').innerHTML = 0

    document.getElementById('saldo').innerHTML = saldo + valor_deposito

}

function sacar(){
    var valor_saque = parseInt(document.getElementById('valor_saque').value)
    var saldo = parseInt(document.getElementById('saldo').value)

    if (saldo >= valor_saque){
        document.getElementById('saldo').innerHTML = saldo - valor_saque
    }

    else{document.getElementById('estado').innerHTML = 'Saldo negativo'}
}


// function saldo_e_situacao(){
//     document.getElementById('saldo').innerHTML = `<h2>0 R$</h2>`
//     document.getElementById('estado').innerHTML = `<h2>Saldo Positivo</h2>`
// }

// document.getElementById('saldo').innerHTML = `0`
// document.saldo.write = `<h1>${saldo_inicial}</h1>`
// document.estado_inical.write = `${estado}`