function carregar() {


    var data = new Date();
    var hora = data.getHours();
    var msg = window.document.getElementById("msg");
    var foto = window.document.getElementById("imagem");
    msg.innerHTML=`São ${hora}`;
    if (hora >= 0 && hora < 12) {
        foto.src = "a.jpg";
        document.body.style.background = "#e2cd9f";
    } else if (hora >= 12 && hora < 18) {
        foto.src = "b.jpg";
        document.body.style.background = "#b9846f";
    } else {
        foto.src = "c.png";
        document.body.style.background = "#515154";
    }

}



