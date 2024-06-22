// EJERCICIO 1 //

/* 
edad = prompt("Introduce tu edad:");

if (edad <= 0) {
   console.log("Edad no valida.")
} else if (edad < 13) {
   console.log("Eres un niño.")
} else if (edad >= 13 && edad <= 17) {
   console.log("Eres un adolescente.")
} else if (edad > 17 && edad <= 64) {
   console.log("Eres un adulto.")
} else if (edad >= 65) {
   console.log("Eres una persona mayor.")
}
 */

// EJERCICIO 2 //

/* 
calificacion = prompt("Introduzca su calificación:")

if (calificacion < 0 || calificacion > 100) {
   console.log("Califiación no válida.")
} else if (calificacion <= 100 && calificacion >= 90) {
   console.log("A")
} else if (calificacion <= 89 && calificacion >= 80) {
   console.log("B")
} else if (calificacion <= 79 && calificacion >= 70) {
   console.log("C")
} else if (calificacion <= 69 && calificacion >= 60) {
   console.log("D")
} else if (calificacion <= 59 && calificacion >= 0) {
   console.log("F")
};
 */

// EJERCICIO 3 //

/* 
lado1 = prompt("Introduzca la longitud del primer lado:");
lado2 = prompt("INtroduzca la longitud del segundo lado:");
lado3 = prompt("Introduca la longitud del tercer lado:")

if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0 ) {
   console.log("Longitudes no válidas.")
} else if (lado1 == lado2 && lado2 == lado3) {
   console.log("Es un triángulo equilátero.")
} else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
   console.log("Es un triángulo escaleno")
} else if ((lado1 == lado2 || lado1 == lado3 || lado2 == lado3) && (lado1 != lado2 || lado1 != lado3 || lado2 != lado3)) {
   console.log("Es un triángulo isósceles.")
}
 */

// EJERCICIO 4 //

/* 
numero = prompt("Introduzca el número del día:");

if (numero > 7 || numero < 1) {
   console.log("Número no válido.")
} else if(numero == 1) {
   console.log("Lunes")
} else if(numero == 2) {
   console.log("Martes")
} else if(numero == 3) {
   console.log("Miéroles")
} else if(numero == 4) {
   console.log("Jueves")
} else if(numero == 5) {
   console.log("Viernes")
} else if(numero == 6) {
   console.log("Sábado")
} else if(numero == 7) {
   console.log("Domingo")
}
 */

// EJERCICIO 5 //

/* 
temperatura = prompt("Introduzca la temperatura del agua en grados Celsius:")

if (temperatura <= 0) {
   console.log("Estado sólido.")
} else if (temperatura > 0 && temperatura <= 99) {
   console.log("Estado líquido.")
} else if (temperatura >= 100) {
   console.log("Estado gaseoso.")
} else {
   console.log("Temperatura no válida.")
}
 */