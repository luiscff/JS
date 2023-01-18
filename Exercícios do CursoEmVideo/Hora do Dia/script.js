


function carregar() {
    var msg = document.getElementById("msg")
    var foto = document.getElementById("foto")
    var imagem = document.getElementById("imagem")
    const body = document.querySelector('body');
    var hora = new Date().getHours()

    msg.innerHTML = `Agora são ${hora} hora(s).`

    if (6 < hora && hora <= 12) {
        imagem.src = "images/manha.png"
        body.style.backgroundColor = "#b1bfc6"
    } //manha b1bfc6
    else if (12 < hora && hora <= 20) {
        imagem.src = "images/tarde.png"
        body.style.backgroundColor = "#f65713"
    } //tarde f65713
    else {
        imagem.src = "images/noite.png"
        body.style.backgroundColor = "#1f2631"
    } //noite 1f2631

}
