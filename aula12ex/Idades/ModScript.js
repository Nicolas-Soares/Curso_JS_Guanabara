var bt = document.querySelector('#bt')
var result = document.querySelector('#result')
var nasc = document.querySelector('#datnasc')
bt.addEventListener('click', verificar)

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var res = 0

    if (nasc.value.length == 0 || nasc.value >= ano) {
        alert('Ano inválido!')
    } else {
        var radsex = document.getElementsByName('radsex')
        res = ano - nasc.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'imagem')

        if (radsex[0].checked) {
            genero = 'Homem'
            if (res >= 0 && res < 10) {
                img.setAttribute('src', './images/criancaM.png')
            } else if (res < 50) {
                img.setAttribute('src', './images/jovemM.png')
            } else {
                img.setAttribute('src', './images/idosoM.png')
            }
        } else if (radsex[1].checked) {
            genero = 'Mulher'
            if (res >= 0 && res < 10) {
                img.setAttribute('src', './images/criancaF.png')
            } else if (res < 50) {
                img.setAttribute('src', './images/jovemF.png')
            } else {
                img.setAttribute('src', './images/idosoF.png')
            }
        }

        result.innerHTML = `Você tem <b>${res}</b> anos e é <b>${genero}</b>`
        result.appendChild(img)
        
    }
}