
/* const solicitarUsuarios = async () => {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET"
    })
    console.log(respuesta)
    const resultado = await respuesta.json()
    console.log(resultado)
}

solicitarUsuarios() */
/* 
const contenedorHTML = document.getElementById("contenedor")

const solicitarPosts = async () => {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET"
    })
    const resultado = await respuesta.json()
    let lista = ``
    for (const post of resultado) {
        lista = lista + `
        <div>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <button>♥</button>
        </div>`
        contenedorHTML.innerHTML = lista
    }
}

console.log(solicitarPosts()) */

const formHTML = document.getElementById("form")
const submitBtnHTML = document.getElementById("submit-btn")
const tituloHTML = document.getElementById("titulo")
const bodyHTML = document.getElementById("body")

const handleSubmit = async (event) => {
    event.preventDefault()
    await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: tituloHTML.innerText,
            body: bodyHTML.innerText,
            id: 1,
        }),
    })
    console.log("Enviado")
}

formHTML.addEventListener("submit", handleSubmit)
