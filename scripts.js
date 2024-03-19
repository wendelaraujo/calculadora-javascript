const display = document.querySelector('#resultado')

function inserir(valor) {
    display.value += valor
}

function limpar() {
    display.value = ""

}

function calcular() {
    display.value = eval(display.value)
}