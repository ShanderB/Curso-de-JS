function clicar(){

var numeroInserido = window.document.getElementById("numero");
var res = window.document.getElementById("res");

var c = Number(numeroInserido.value);
res.innerHTML = `A tabuada calculada do ${c} é: <br> <br>`; 

for(var i=0; i<=10; i++){
    var tabuada = c*[i];
    res.innerHTML += `Tabuada do ${c}*${i} = ${tabuada} <br>`;
   //    res.innerHTML = tabuada;
}



}
