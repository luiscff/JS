function confirmar() {
    const divsexo = document.getElementsByName("sexo")
    const divano = document.getElementById("ano")
    const divres = document.getElementById("res")
    var anoatual = new Date().getFullYear()
    var ano = divano.value

    if (ano == 0 || ano > anoatual) {
        window.alert("Verifique os dados e tente novamente")
        return
    }
    var sexo
    if (divsexo[0].checked) { sexo = "um homem" }
    else if (divsexo[1].checked) { sexo = "uma mulher" }
    else {
        window.alert("Verifique os dados e tente novamente")
        return
    }

    var idade = anoatual - Number(ano)
    divres.innerText = `Foi detetado ${sexo} com ${idade} anos`

    const divimage = document.createElement('img')
    divimage.id = "foto"

    if (idade <= 12 && sexo === "um homem") { divimage.src = "images/malekid.png" }
    else if (idade <= 12 && sexo === "uma mulher") { divimage.src = "images/femalekid.png" }
    else if (idade <= 20 && sexo === "um homem") { divimage.src = "images/maleteen.png" }
    else if (idade <= 20 && sexo === "uma mulher") { divimage.src = "images/femaleteen.png" }
    else if (idade <= 60 && sexo === "um homem") { divimage.src = "images/maleadult.png" }
    else if (idade <= 60 && sexo === "uma mulher") { divimage.src = "images/femaleadult.png" }
    else if (idade > 60 && sexo === "um homem") { divimage.src = "images/maleold.png" }
    else if (idade > 60 && sexo === "uma mulher") { divimage.src = "images/femaleold.png" }

    divres.appendChild(divimage)
    divimage.style.paddingTop = "20px"
    divimage.style.paddingBottom = "10px"


}