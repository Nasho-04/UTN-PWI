const nombres3 = [`maria`, "pedro", "leonel", "ezequiel", "elias", "lucas", "julieta", "abril", "lautaro"]
/* 
let posicionDeLeonel = nombres3.indexOf("leonel")
nombres3.splice(posicionDeLeonel, 1)

let posicionDeLucas = nombres3.indexOf("lucas")
nombres3.splice(posicionDeLucas - 1, 1)

let posicionDeAbril = nombres3.indexOf("abril")
nombres3.splice(posicionDeAbril, 0, "sofia") */
/* console.log(nombres3)
 */
/* 
let sumarCaracteres = 0
for (let index = 0; index < nombres3.length; index++) {
    sumarCaracteres = sumarCaracteres + nombres3[index].length
}

console.log(`la sumatoria de caracteres es ${sumarCaracteres}`) */


const productos = [
    {title: "tv samsung 32",
        price: 3000,
        marca: "samsung"
    },
    {
        title: "tv samsung 50",
        price: 4600,
        marca: "samsung"
    },
    {
        title: "tv lg 42",
        price: 3500,
        marca: "lg"
    },
    {
        title: "tv noblex 50",
        price: 4500,
        marca: "noblex"
    },
    {
        title: "tv noblex 65",
        price: 6000,
        marca: "noblex"
    }
]
/* 
const samsung = []

for (const tvs of productos) {
    if (tvs["marca"] === "samsung") {
        samsung.push(tvs)
    }
}

console.log(samsung) */

function buscarProducto(string) {
    let respuesta = []
    for (const products of productos) {
        if (products.title.includes(string)) {
            respuesta.push(products)
        }
    }
    return respuesta
}

console.log(buscarProducto("noblex"))