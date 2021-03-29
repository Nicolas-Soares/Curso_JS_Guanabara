var min = document.querySelector('#minimo')
var max = document.querySelector('#maximo')
var confirm = document.querySelector('#contar')
var result = document.querySelector('#result')
var passo = document.querySelector('#passo')

confirm.addEventListener('click', contar)

function contar() {
    var minV = Number(min.value)
    var maxV = Number(max.value)
    var pass = Number(passo.value)

    if (minV == '' || maxV == '') {
        result.innerHTML = '[ERRO] Informações faltando!'
        alert('[ERRO] Informações faltando!')
    }

    else if(pass == 0) {
        alert('Pass deve ser maior que zero! Considerando valor 1')
        result.innerHTML = ''
        pass = 1
        for(minV; minV <= maxV; minV+=pass) {
            result.innerHTML += ` ${minV} \u{1F600}`
        }
        result.innerHTML += `\u{1F3C1}`
    }

    else {
        result.innerHTML = ''
        
        for(minV; minV <= maxV; minV+=pass) {
            result.innerHTML += ` ${minV} \u{1F600}`
        }
        result.innerHTML += `\u{1F3C1}`
    }
}