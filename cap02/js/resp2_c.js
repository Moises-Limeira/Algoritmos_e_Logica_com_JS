const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

frm.addEventListener("submit", (e) => {
  const produto = frm.inProduto.value
  const preco = Number(frm.inPreco.value)

  const valor = preco * 2 + preco * 0.5

  resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${valor.toFixed(2)}`
  resp2.innerText = `O 3° produto custa apenas R$: ${(preco * 0.5).toFixed(2)}`
  
  e.preventDefault()
})