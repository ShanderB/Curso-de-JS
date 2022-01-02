var vetor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

var inicio = 0
var final = 9
var found = false

var busca = 6


while (inicio <= final && !found) {
    var meio = Math.ceil((inicio + final) / 2)

   // console.log(`Inicio: ${inicio} \n Final: ${final} \n Busca: ${busca}`);

    if (vetor[meio] == busca) {
        found = true;
    }

    if (vetor[meio] > busca) {
        final = meio - 1
    } else {
        inicio = meio + 1
    }
}

if (found) {
    console.log("achou");

} else {
    console.log("não achou");
}