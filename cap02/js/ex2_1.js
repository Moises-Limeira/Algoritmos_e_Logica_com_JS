const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  const nome = frm.inNome.value
  resp.innerText = `Olá ${nome}`
  e.preventDefault()
})

const a = -8.5
const b = 5.4
console.log(Math.abs(a))
console.log(Math.ceil(b))
console.log(Math.floor(b))
console.log(Math.pow(2,3))
console.log(Math.random())
console.log(Math.round(b))
console.log(Math.sqrt(16))