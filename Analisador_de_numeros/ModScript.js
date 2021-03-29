//Botoes
var adic = document.querySelector('#add')
var final = document.querySelector('#final')

//Numero e lista
var num = document.querySelector('#numero')
var lista = document.querySelector('#lista')

//Outros
var result = document.querySelector('#result')
var ar = []

//Eventos
adic.addEventListener('click', adicionar)
final.addEventListener('click', finalizar)

//------------------------------------------------
function adicionar() {
    var numero = Number(num.value)
    var confirmador = 0
    result.innerHTML = ''
    
    if(numero < 1 || numero > 100 || numero == ''){
        alert('Valor inválido!')
        confirmador = 1
    }

    for(i in ar){
        if (numero == ar[i]) {
            alert('Valor já está na lista!')
            confirmador = 1
        }
    }

    if (confirmador == 0) { 
        ar.push(numero) 
        var item = document.createElement('li')
        item.innerHTML = `Valor ${numero} adicionado.`
        lista.appendChild(item)
    }
}

function finalizar() {
    let reducer = (a, b) => a + b
    let soma = ar.reduce(reducer)
    let media = soma/ar.length

    if (ar == '') {
        alert('Adicione valores antes de finalizar!')
    } else {
        result.innerHTML = 
        `
        Ao todo temos ${ar.length} números cadastrados.<br>
        O maior valor informado foi ${Math.max(...ar)}.<br>
        O menor valor informado foi ${Math.min(...ar)}.<br>
        Somando todos os valores, temos: ${soma}.<br>
        A média dos valores digitados é: ${media.toFixed(2)}.
        `
    }
}