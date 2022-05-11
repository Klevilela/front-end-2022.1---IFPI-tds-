const saldo_inicial = 0
const estado_inical = 'Saldo positvo'

const saldo =  document.getElementById('saldo')
const estado = document.getElementById('estado')

const saque = parseInt(document.getElementById('saque').value)
const deposito = parseInt(document.getElementById('depositar').value)

const valor_saque = parseFloat(document.getElementById('valor_saldo').value)
const valor_deposito = parseFloat(document.getElementById('valor_deposito').value)

function carrega_banco(){
    document.saldo.addEventListener('click', saldo_e_situacao)
    document.estado.addEventListener('click', saldo_e_situacao)

    document.valor_saque.addEventListener('click', sacar)
    document.valor_deposito.addEventListener('click', depositar)

    document.getElementById('depositar').addEventListener('click', depositar)
    document.getElementById('sacar').addEventListener('click', sacar)
}

function depositar(){
    const saldo = 0
    const aumentar_saldo = saldo_inicial + valor_deposito
    return aumentar_saldo
    //document.saldo.innerHTML = `${aumentar_saldo}`

    document.valor_saque.innerHTML = aumentar_saldo
    document.saldo.innerHTML = `<h1>${valor_saque} R$</h1>`

}

function sacar(){
    const saque = saldo - valor_saq
    document.saldo.innerHTML = `${aumentar_saldo}`

    if (saldo >= 0 && valor_saque <= saldo && estado === 'Saldo posiitvo'){
        const saque = saldo - valor_saque 
    }
    else{document.estado.innerHTML = 'saldo negativo'}

    document.getElementById
}


function saldo_e_situacao(){
    document.saldo.innerHTML = `<h2>${saldo_inicial} R$</h2>`
    document.estado_inical.innerHTML = `<h2>${saldo_inicial}</h2>`
}

// document.getElementById('saldo').innerHTML = `0`
// document.saldo.write = `<h1>${saldo_inicial}</h1>`
// document.estado_inical.write = `${estado}`