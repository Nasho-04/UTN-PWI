/* const alertar = () => {
    alert("Hola mundo")
}

const btn2HTML = document.getElementById("btn-2")

btn2HTML.onclick = alertar

const btn3HTML = document.querySelector(".btn-3")

// MEJOR MANERA //
btn3HTML.addEventListener("click", alertar) */
/* 
const numeroHTML = document.getElementById("numero-container")
const sumarHTML = document.getElementById("sumar")
const restarHTML = document.getElementById("restar")

let contador = 1
numeroHTML.innerText = contador

const sumar = () => {
    contador++
    numeroHTML.innerText = contador
}

const restar = () => {
    if (contador > 1) {
        contador--
        numeroHTML.innerText = contador
    }
}

sumarHTML.addEventListener("click", sumar)
restarHTML.addEventListener("click", restar) */

/* 
const formLoginHTML = document.getElementById("form-login")

console.dir(formLoginHTML.password.value)
console.dir(formLoginHTML.username.value)

const handleLogin = (evento) => {
    evento.preventDefault()
    console.log("formulario enviado")
}

formLoginHTML.addEventListener("submit", handleLogin)
 */



const comprarHTML = document.getElementById("comprar")
const numeroHTML = document.getElementById("numero-container")
const restarHTML = document.getElementById("btn-restar")
const sumarHTML = document.getElementById("btn-sumar")

let contador = 1

const handleEstadoActualizado = () => {
    comprarHTML.setAttribute("hidden", "")
    numeroHTML.innerText = contador
    numeroHTML.removeAttribute("hidden", "")
    restarHTML.removeAttribute("hidden", "")
    sumarHTML.removeAttribute("hidden", "")
}

comprarHTML.addEventListener("click", handleEstadoActualizado)

const handleSumar = () => {
    contador++
    numeroHTML.innerText = contador
}

sumarHTML.addEventListener("click", handleSumar)

const handleRestar = () => {
    if (contador === 1) {
        comprarHTML.removeAttribute("hidden", "")
        numeroHTML.setAttribute("hidden", "")
        restarHTML.setAttribute("hidden", "")
        sumarHTML.setAttribute("hidden", "")
    } else {
        contador--
        numeroHTML.innerText = contador
    }
}

restarHTML.addEventListener("click", handleRestar)
