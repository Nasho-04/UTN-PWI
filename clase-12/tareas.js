// EJERCICIO 1 //

function decirNombre(nombre) {
    alert("Hola " + nombre)
}

// EJERCICIO 2 //

function saludar(nombre) {
    let saludo = "Hola " + nombre
    return saludo
}

alert(saludar("Nacho"))

// EJERCICIO 3 //

function sumar(a, b) {
    let suma = a + b
    return suma
}

// EJERCICIO 4 //

function restar(a, b) {
    let resta = a - b
    return resta
}

// EJERCICIO 5 //

function calcular(operación, a, b) {
    if (operación == "-") {
        return restar(a, b)
    } else if (operación == "+") {
        return sumar(a, b)
    } else {
        return null
    }
}


// EJERCICIO 6 //

function contarHasta(número) {
    for (let index = 1; index <= número; index++) {
        console.log(index)
    }
}
