/* function sumar3(a, b, c) {
    let suma = a + b + c
    return suma
}

function mayor(a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}

function generarEmail(nombreDeUsuario) {
    return nombreDeUsuario + "@gmail.com"
} */

// FUNCIONES FLECHA //
/* 
const calcularSumatoria = (a, b, c) => {
    return a + b + c
}

const validarYSolicitar = () => {
    let stringSolicitado = prompt("Ingrese un dato:")
    while (!stringSolicitado || !isNaN(stringSolicitado)) {
        alert("ERROR: Dato ingresado debe ser un string")
        stringSolicitado = prompt("Ingrese otro dato nuevamente")
    }
    return stringSolicitado
}

const mayor = (a, b) => {
    if (a > b) {
        return a
    } else {
        return b
    }
}

const generarEmail = (nombreDeUsuario) => nombreDeUsuario + "@gmail.com"

const sumar = (a, b) => {
    a = Number(a)
    b = Number(b)
    return a + b + undefined
}
 */

// OBJETOS //

let usuario = {
    "edad": 19,
    "nombre": "Pepe",
    "apellido": "Suarez"
}

let producto = {
    "precio": 4000,
    "nombre": "milanesas",
    "marca": "Carnicería Pedro",
    "id": 6936,
    "descripcion": "1kg de milanesa de pollo"
}

const user = {
    name: "pepe",
    lastname: "suarez",
    "user preferences": {
        theme: "dark",
        lang: "spanish"
    },
    "user info": {
        "created_at": "18/9/2005",
        "address": "av. siempre viva 1282",
        tel: "+22 1323-2122"
    }
}
/* 
console.log("El usuario " + user["name"] + " " + user["lastname"] + " tiene las preferencias de usuario en:\nModo: " + user["user preferences"]["theme"] + "\nLenguaje: " + user["user preferences"]["lang"])

console.log("El usuario " + user["name"] + " " + user["lastname"] + " creó su cuenta en la fecha " + user["user info"]["created_at"] + ", vive en " + user["user info"]["address"] + " y su teléfono es " + user["user info"]["tel"]) */
/* 
console.log(`El usuario ${user["name"]} ${user["lastname"]} tiene las preferencias de usuario en:\nModo: ${user["user preferences"]["theme"]}\nLenguaje: ${user["user preferences"]["lang"]}.`)

console.log(`El usuario ${user.name} ${user.lastname} creó su cuenta en la fecha ${user["user info"]["created_at"]}, vive en ${user["user info"]["address"]} y su teléfono es ${user["user info"]["tel"]}.`)
 */
/* 
console.log(`El usuario ${user.name} ${user.lastname} creó su cuenta en la fecha ${user["user info"]["created_at"]}, vive en ${user["user info"].address} y su teléfono es ${user["user info"].tel}`)
 */
