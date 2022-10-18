//Loja de tênis que trabalha com 5 tenis e 5 tamanhos
const proximo = document.getElementById("prox")
const apagar = document.getElementById("apagar")
const verificar = document.getElementById("verificar")
const zerar = document.getElementById("zerar")
const zerart = document.getElementById("zerart")
var tamanho = document.getElementById("num")
var nome = document.getElementById("nome")
var esto = document.getElementById("esto")
const saida = document.querySelector("h3")


let estoque = [[], [], [], []]
//Botão para adicionar mais sapatos aos estoque(sub arrays).
proximo.addEventListener("click", (e) => {
    let valor = Number(tamanho.value)
    if (valor >= "34" && valor <= "36") {
        estoque[0].push(nome.value)
        saida.innerText = `O estoque de sapatos de numero 34 a 36 é esse: ${estoque[0]}`
    }
    if (valor >= "37" && valor <= "39") {
        estoque[1].push(nome.value)
        saida.innerText = `O estoque de sapatos de numero 37 a 39 é esse: ${estoque[1]}`
    }
    if (valor >= "40" && valor <= "42") {
        estoque[2].push(nome.value)
        saida.innerText = `O estoque de sapatos de numero 40 a 42 é esse: ${estoque[2]}`
    }
    if (valor >= "43" && valor <= "45") {
        estoque[3].push(nome.value)
        saida.innerText = `O estoque de sapatos de numero 43 a 45 é esse: ${estoque[3]}`
    }
})
//Botão para apagar um sapato especifico do estoque(sub array).
apagar.addEventListener("click", (e) => {
    let valor = Number(tamanho.value)
    let retirar = nome.value
    if (valor >= "34" && valor <= "36") {
        estoque[0] = estoque[0].filter(item => item != retirar)
        saida.innerText = `O estoque de sapatos de numero 34 a 36 é esse: ${estoque[0]}`
    }
    if (valor >= "37" && valor <= "39") {
        estoque[1] = estoque[1].filter(item => item != retirar)
        saida.innerText = `O estoque de sapatos de numero 37 a 39 é esse: ${estoque[1]}`
    }
    if (valor >= "40" && valor <= "42") {
        estoque[2] = estoque[2].filter(item => item != retirar)
        saida.innerText = `O estoque de sapatos de numero 40 a 42 é esse: ${estoque[2]}`
    }
    if (valor >= "43" && valor <= "45") {
        estoque[3] = estoque[3].filter(item => item != retirar)
        saida.innerText = `O estoque de sapatos de numero 43 a 45 é esse: ${estoque[3]}`
    }
})
//Botão para zerar um estoque especifico(sub array).
zerar.addEventListener("click", (e) => {
    let valor = Number(tamanho.value)
    if (valor >= "34" && valor <= "36") {
        estoque[0] = []
        saida.innerText = `Você zerou o estoque de sapatos dos numeros 34 a 36`
    }
    if (valor >= "37" && valor <= "39") {
        estoque[1] = []
        saida.innerText = `Você zerou o estoque de sapatos dos numeros 37 a 39`
    }
    if (valor >= "40" && valor <= "42") {
        estoque[2] = []
        saida.innerText = `Você zerou o estoque de sapatos dos numeros 40 a 42`
    }
    if (valor >= "43" && valor <= "45") {
        estoque[3] = []
        saida.innerText = `Você zerou o estoque de sapatos dos numeros 43 a 45`
    }
})
//Botão que você verifica quantos sapatos tem em um estoque especifico(sub array).
verificar.addEventListener("click", (e) => {
    let valor = Number(tamanho.value)
    if (valor >= "34" && valor <= "36") {
        saida.innerText = `O estoque de sapatos de numero 34 a 36 é esse: ${estoque[0]}`
    }
    if (valor >= "37" && valor <= "39") {
        saida.innerText = `O estoque de sapatos de numero 37 a 39 é esse: ${estoque[1]}`
    }
    if (valor >= "40" && valor <= "42") {
        saida.innerText = `O estoque de sapatos de numero 40 a 42 é esse: ${estoque[2]}`
    }
    if (valor >= "43" && valor <= "45") {
        saida.innerText = `O estoque de sapatos de numero 43 a 45 é esse: ${estoque[3]}`
    }
})
//Botão para zerar todos os estoques(sub arrays).
zerart.addEventListener("click", (e) => {
    let valor1 = estoque[3].length
    console.log(valor1)
    while (valor1 != 0) {
        console.log("teste")
        console.log(estoque[3])
        estoque[0].pop()
        estoque[1].pop()
        estoque[2].pop()
        estoque[3].pop()
        valor1 = estoque[3].length
            saida.innerText = `Você zerou todos os estoques`
    }
})
