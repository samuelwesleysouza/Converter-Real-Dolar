let resultado = document.querySelector('#resultado')
let real = document.querySelector('#real')
let dolar = document.querySelector('#dolar')
function convercaoreal() {
    if (real.value !== '') {
        let dolarverdadeiro = parseFloat(5.25)
        let convercao = (real.value / dolarverdadeiro).toFixed(2)
        resultado.innerHTML = 'A Converção de moedas ' + '= ' + "R$" + convercao + ' Dolares'
    } else {
        resultado.innerHTML =
            alert('Preencha os campos')
    }
}
function limpar(limpar) {
    document.getElementById('real').value = ""
    document.getElementById('resultado').innerHTML = ""
}


