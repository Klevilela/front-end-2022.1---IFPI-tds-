
//const estado_inicial = document.getElementById('estado').innerHTML= 'Saldo positvo'

/*const saldo =  document.getElementById('saldo')
const estado = document.getElementById('estado')

const saque = document.getElementById('saque').value
const deposito = document.getElementById('depositar').value

const valor_saque = parseFloat(document.getElementById('valor_saldo').value)*/

function carrega_banco(){
    document.getElementById('saldo').innerHTML = 'Saldo: 0 R$'
    document.getElementById('estado').innerHTML = 'Estado: Saldo Positivo'

    document.getElementById('valor_deposito').addEventListener('click', depositar)
    document.getElementById('depositar').addEventListener('click', depositar)


    document.getElementById('saque').addEventListener('click', sacar)
    document.getElementById('valor_saque').addEventListener('click', sacar)

    document.getElementById('sacar').addEventListener('click', sacar)

}

function depositar(){
    //var saldo_atual = aumentar_saldo
    var valor_deposito = parseInt(document.getElementById('valor_deposito').value)
    //var soma = valor_deposito
    var aumentar_saldo = valor_deposito

    //aumentar_saldo = parseFloat(valor_deposito)
        //aumentar_saldo =+ saldo_atual
    //document.getElementById('depositar') = aumentar_saldo
    document.getElementById('saldo').innerHTML = aumentar_saldo  + ' R$'
    


    //document.valor_saque.innerHTML = aumentar_saldo
    //var saldo =+ aumentar_saldo
    //document.getElementById('saldo').innerHTML = saldo

}

function sacar(){
    var saldo = parseInt(document.getElementById('saldo').value)
    var valor_saque = parseInt(document.getElementById('valor_saque').value)
    var estado = document.getElementById('estado')

    var saque = saldo - valor_saque

    //document.getElementById('saldo').innerHTML = saque

    if (saldo > 0 && valor_saque <= saldo){
        saque = saldo - valor_saque
        document.saldo.innerHTML = saque + 'R$' 
    }
    else{document.estado.innerHTML = 'Saldo negativo'}

}


/*function saldo_e_situacao(){
    
    document.getElementById('saldo').innerHTML = `${saldo_inicial}  'R$`
    document.getElementById('estado').innerHTML = '<h2>Saldo Positivo</h2>'
}


// document.getElementById('saldo').innerHTML = `0`
// document.saldo.write = `<h1>${saldo_inicial}</h1>`
// document.estado_inical.write = `${estado}`*/