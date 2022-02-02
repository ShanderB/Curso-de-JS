var stringOriginal = 'redivider'
var stringInvertida = ''
let stack = []

for (let index = stringOriginal.length; index != -1; index--) {
    stack.push(stringOriginal[index])
}

stringInvertida = stack.join('')
console.log(stringInvertida)