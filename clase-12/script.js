/* 
let string = prompt("Ingrese un string:")

while (!string || !isNaN(string)) {
    alert("No ingresaste un dato válido")
    string = prompt("Ingrese un dato válido")
}
 */

/* 
let nombre = prompt("Dime tu nombre:")
for (let index = 0; index < 3; index++) {
    alert("Tu nombre es: " + nombre)
}
 */

/* 
let cantidadDeRepeticiones = prompt("Cuántas números sumamos?: ")
let suma = 0

while (!cantidadDeRepeticiones || isNaN(cantidadDeRepeticiones)) {
    alert("Dato no válido")
    cantidadDeRepeticiones = prompt("Ingrese un dato numérico: ")
}

for (let iteracion = 0; iteracion < cantidadDeRepeticiones; iteracion = iteracion + 1) {
    let numero = prompt("Ingrese un número: ")
    while (!numero || isNaN(numero)) {
        alert("Dato no válido")
        numero = prompt("Ingrese un dato numérico")
    }
    suma = suma + Number(numero)
}

alert("El resultado es: " + suma)
 */

/* 
function sumar(numero1, numero2) {
    let suma = numero1 + numero2
    console.log(suma)
}
 */

/* 
function calcularIva(precio) {
    let iva = precio * 0.21
    return iva
}
 */