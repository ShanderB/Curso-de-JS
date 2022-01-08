function calcular() {


   var inicio = window.document.getElementById("inicio");
   var fim = window.document.getElementById("fim");
   var passo = window.document.getElementById("passo");
   var res = window.document.getElementById("res");






   if (inicio.value == 0 || fim.value == 0 || passo.value == 0) {
      alert("Algum campo em branco.");
      res.innerHTML="";
   } else {

      var i = Number(inicio.value);
      var f = Number(fim.value);
      var p = Number(passo.value);

      res.innerHTML = "Contando: <br>"
      if (p <= 0) {
         window.alert("Passo inválido.");
         p = 1;
      }

      else if (i <= 0) {
         window.alert("Inicial inválido.");
         i = 1;
      }

      else if(f <= 0) {
         window.alert("Final inválido.");
         f = 1;
      }



      if (i < f) {
         //decrescente
         for (var x = i; x <= f; x += p) {
            res.innerHTML += ` ${x} \u{1F449}`;
         }

      } else {
         //crescente
         for (var x = i; x >= f; x -= p) {
            res.innerHTML += ` ${x} \u{1F449}`;
         }

      }
      res.innerHTML += `\u{1F3C1}`;
   }






} 