/* const validarEmail = (email, password) => {
    while (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email) === false) {
        email = prompt("Ingrese un email válido:")
    }
    while (password.length < 6 || password.toLowerCase() === password || !password) {
        password = prompt("Su contraseña debe contener más de 6 caracteres y mínimo una mayúscula")
    }
}

const login = () => {
    let email = prompt("Ingrese su email:")
    let password = prompt("Ingres su contraseña")
    validarEmail(email, password)
    let usuario = {
        "email": `${email}`,
        "password": `${password}`
    }
    return usuario
}

console.log(login())
 */
// debería haber hecho dos validaciones distintas

// VALIDACIONES //

const tieneMayuscula = (palabra) => palabra.toLowerCase() !== palabra

const validacionEmail = (email) =>{
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}

const validacionPassword = (password) =>{
    return password && password.length >= 6 && tieneMayuscula(password)
}

const validarOperacion = (operacion) => {
    const operacionesDisponibles = ["+", "-"]
    return operacionesDisponibles.includes(operacion)
}
    
const validarNumero = (numero) => {
    return numero && !isNaN(numero)
}

const esSumaOResta = (operacion, numero1, numero2) => {
    let resultado
    if (operacion === "+") {
        resultado = Number(numero1) + Number(numero2)
    } else if (operacion === "-") {
        resultado = Number(numero1) - Number(numero2)
    }
    alert(`El resultado de ${numero1} ${operacion} ${numero2} es ${resultado}`)
    return resultado
}

// SOLICITUDES //

const solicitarDato = (objeto) => {
    let dato = prompt(objeto.mensaje)
    while (!objeto.validacion(dato)) {
        dato = prompt(objeto.error)
    }
    return dato
}

// DATOS //

const DATOS = {
    EMAIL: {
        mensaje: "ingrese un email",
        error: "Ingrese un email válido:",
        validacion: validacionEmail
    },
    PASSWORD: {
        mensaje: "Ingrese una contraseña:",
        error: "Ingrese una contraseña con más de 6 caracteres y mínimo una mayúscula:",
        validacion: validacionPassword
    },
    OPERACION: {
        mensaje: "Ingrese una operación:",
        error: "Operación no disponible, seleccione otra operación",
        validacion: validarOperacion
    },
    NUMERO1: {
        mensaje: "Ingrese el primer número:",
        error: "Error, número no válido, ingrese otro:",
        validacion: validarNumero
    },
    NUMERO2: {
        mensaje: "Ingrese el segundo número:",
        error: "Error, número no válido, ingrese otro:",
        validacion: validarNumero
    }
    
}

// LOG-IN //

const login = () => {
    const usuario = {
        email: null,
        password: null
    }

    usuario.email = solicitarDato(
        DATOS.EMAIL
    )
    
    usuario.password = solicitarDato(
        DATOS.PASSWORD
    )

    alert(`Usuario ${usuario.email} registrado`)
    return usuario
}
/* 
localStorage.setItem("user", JSON.stringify(login()))
 
console.log(login())
*/

// OPERACIONES //


const calculadora = () => {
    let operacion = solicitarDato(
        DATOS.OPERACION
    )
    let numero1 = solicitarDato(
        DATOS.NUMERO1

    )
    let numero2 = solicitarDato(
        DATOS.NUMERO2
    )
    resultado = esSumaOResta(operacion, numero1, numero2)
    return resultado
}

// HISTORIAL //

if (localStorage.getItem("historial") === null) {
    localStorage.setItem("historial", JSON.stringify([]))
}

const obtenerHistorial = () => JSON.parse(localStorage.getItem("historial"))

const guardarEnHistorial = (objeto) => {
    const historial = obtenerHistorial()
    historial.push(objeto)
    localStorage.setItem("historial", JSON.stringify(historial))
}


const renderizarHistorial = () => {
    let calculos = obtenerHistorial()
    let lista = ``
    for (const obj of calculos) {
        lista = lista + `
        accion: ${obj.accion}
        operacion: ${obj.operacion}
        numeros: ${obj.numero1}, ${obj.numero2}
        resultado: ${obj.resultado}
        fecha: ${obj.fecha}
        `
    }
    alert(lista)
}

renderizarHistorial()