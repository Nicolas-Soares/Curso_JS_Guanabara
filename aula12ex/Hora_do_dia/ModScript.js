window.addEventListener('load', carregar)

function carregar() {
    var mensagem = document.querySelector('#mensagem')
    var img = document.querySelector('#timeimg')
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = './images/PexelsManhaRound.jpg'
        document.body.style.background = 'rgb(246, 204, 126)'
    } else if (hora >= 12 && hora < 18) {
        img.src = './images/PexelsTardeRound.jpg'
        document.body.style.background = 'rgb(170, 138, 95)'
    } else {
        img.src = './images/PexelsNoiteRound.jpg'
        document.body.style.background = 'rgb(25, 12, 100)'
    }
}

