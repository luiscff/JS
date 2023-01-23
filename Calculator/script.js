const output = document.getElementById("output")

function calculate() {

}

function display(x) {
    output.innerHTML += x
}

function allDelete() {
    output.innerHTML = ""
}

function deleteOne() { //not working
    console.log (output.innerText)
    output.value = output.innerText.toString().slice(0,output.innerText.length -1)
}