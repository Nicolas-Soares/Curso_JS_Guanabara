var obj = {
    nome: 'Foka',
    cor: 'Preto',
    peso: 80.00,
    idade: 22,

    trabalhar(en){
        this.peso += en
        console.log(`O ${this.nome} trabalhou q nem escravo, comeu um Dog3 e agora esta com ${this.peso}Kg`)
    }
}

console.log(obj.peso)
obj.trabalhar(2)
