var x = [1, 2, 'asas', 4, 5]
x.push('john')
x.sort()
for(var i in x){
    console.log(x[i])
}

console.log('A posição de John é: ' + x.indexOf('john'))