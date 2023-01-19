function contar() {
    const inicio = document.getElementById("inicio")
    const fim = document.getElementById("fim")
    const passo = document.getElementById("passo")
    const res = document.getElementById("res")
    res.innerText = ""

    if (passo.value.length == 0 || inicio.value.length == 0 || fim.value.length == 0) {
        window.alert("Certifique-se que todos os campos estão preenchidos")
        res.innerText = ""
        return
    }
    if (Number(passo.value) == 0) {
        window.alert("O valor de Passo não pode ser 0")
        res.innerText = ""
        return
    }

    if (Number(inicio.value) <= Number(fim.value)) {
        for (var i = Number(inicio.value); i <= Number(fim.value); i += Number(passo.value)) { //contagem crescente
            res.innerHTML += i
            res.innerHTML += `\u{1F449}` //forma de incluir emojis (unicode)
        }
        res.innerHTML += String.fromCodePoint(0x1F3C1) //forma alternativa}
    } else {
        for (var i = Number(inicio.value); i > Number(fim.value); i -= Number(passo.value)) { //contagem decrescente
            res.innerHTML += i
            res.innerHTML += `\u{1F449}`
        }
        res.innerHTML += String.fromCodePoint(0x1F3C1)
    }
}