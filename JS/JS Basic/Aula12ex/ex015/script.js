function verificar() {

    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.querySelector("div#res");

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("Verifique os dados.");

    } else {

        var fsex = document.getElementsByName("radsex");
        var idade = ano - Number(fano.value);
        var genero = "";
        var img = document.createElement("img");
        img.setAttribute("id", "foto");

        if (fsex[0].checked) {
            genero = "masculinos";
            if (idade >= 0 && idade < 10) { //bb
                img.setAttribute("src", "H-BB.png");
            } else if (idade < 21) {  //jovem
            

            } else if (idade < 50) {//adulto
                img.setAttribute("src", "H.png");
            } else {
                img.setAttribute("src", "H-V.png");
                //idoso
            }

        } else if (fsex[1].checked) {
            genero = "feminino";
            if (idade >= 0 && idade < 10) { //bb
                img.setAttribute("src", "M-BB.png");
            } else if (idade < 21) {  //jovem

            } else if (idade < 50) {//adulto
                img.setAttribute("src", "M.png");
            } else {
                img.setAttribute("src", "M-V.png");
                //idoso

            }

        }
        res.style.textAlign = "center";
        res.innerHTML = `Idade calculada ${idade} e genero ${genero}`;
        res.appendChild(img);
    }

}