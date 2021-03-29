var lista = document.querySelector('#lista')
var confirm = document.querySelector('#confirm')
var c = document.querySelector('#lista').children
var numero = document.querySelector('#numero')

confirm.addEventListener('click', tabuada)

function tabuada() {
    let num = Number(numero.value)
    let count = 0

    if (numero.value == '') {
        alert('[ERRO] Um número deve ser informado!')
    } else {
        for(var i = 0; i <= 11; i++){
            c[i].innerText = `${num} x ${count} = ${num * count}`
            count++
        }
    }
}