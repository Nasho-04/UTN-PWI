/*const titulo = document.getElementById("titulo")
console.dir(titulo.innerText)
 
let nombre = prompt("ingresa tu nombre:")
titulo.innerText = "hola " + nombre */

/* 
const cajaProducto = document.getElementById("caja-producto")
console.dir(cajaProducto)

cajaProducto.innerHTML = "<h2>Soy un subtítulo</h2> " */
/* 
const usuario = {
    nombre: "Nacho",
    apellido: "Nieva",
    direcion: "Av. 9 de Julio 2486",
    edad: 19
}

const mostrarUsuario = document.getElementById("info-usuario")
mostrarUsuario.innerHTML = `<h2>Nombre completo: ${usuario.nombre} ${usuario.apellido}</h2>\n<span>Edad: ${usuario.edad}</span>\n<span>Dirección: ${usuario.direcion}</span>` 
*/
/* 
const productos = [
    {
        nombre: "tv samsung",
        precio: 500,
        id: 1,
        descripcion: "kbiygyutyiubou",
        thumbnail: "https: scncunvuneo"
    }
]
const productosHTML = document.getElementById("productos")

let plantillaProductos = ``
for (const producto of productos) {
    plantillaProductos = plantillaProductos + `
    <div>
        <h2>${producto.nombre}</h2>
        <img src="${producto.thumbnail}"/>
        <span>Precio: ${producto.precio}</span>
        <p>${producto.descripcion}</p>
    </div>
    <hr>`
}

productosHTML.innerHTML = plantillaProductos */

const carrito = [
    {
        nombre: "Mesa de madera",
        id: 87,
        precio: 50000,
        cantidad: 3,
        img: "https://www.google.com/imgres?q=mesa%20de%20madera&imgurl=https%3A%2F%2Fwww.dellacasaonline.com%2Fwp-content%2Fuploads%2F2020%2F10%2F173A7526.jpg&imgrefurl=https%3A%2F%2Fwww.dellacasaonline.com%2Fproducto%2Fcomedor%2Fmesas-de-comedor%2Fmesa-de-comedor-piamonte%2F&docid=61SihlZCNrIoIM&tbnid=IjfhhrSREFlmeM&vet=12ahUKEwjtoITq1NOGAxUiqZUCHWpACmEQM3oECBkQAA..i&w=1316&h=1500&hcb=2&ved=2ahUKEwjtoITq1NOGAxUiqZUCHWpACmEQM3oECBkQAA",
    },
    {
        nombre: "Sillas de madera",
        id: 58,
        precio: 7000,
        cantidad: 2,
        img: "https://www.google.com/imgres?q=silla%20de%20madera&imgurl=https%3A%2F%2Fmueblesgold.com.ar%2Fwp-content%2Fuploads%2F2022%2F09%2FIMG_1900-scaled-1.jpg&imgrefurl=https%3A%2F%2Fmueblesgold.com.ar%2Fproducto%2Fsilla-gold-madera-maciza%2F&docid=v8Zhe7HrLCJCdM&tbnid=GICwSeRXBs1LUM&vet=12ahUKEwiAvoyq1dOGAxXkq5UCHQORCPEQM3oECGIQAA..i&w=1600&h=2400&hcb=2&ved=2ahUKEwiAvoyq1dOGAxXkq5UCHQORCPEQM3oECGIQAA",
    },
    {
        nombre: "Mantel de seda",
        id: 56,
        precio: 10000,
        cantidad: 6,
        img: "https://www.google.com/imgres?q=mantel%20de%20seda&imgurl=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_655690-MLA72401730509_102023-O.webp&imgrefurl=https%3A%2F%2Flistado.mercadolibre.com.ar%2Fmanteles-seda&docid=Oim5QqgdPiAUVM&tbnid=WLbHcPshiqTvQM&vet=12ahUKEwiUvbi41dOGAxWmrJUCHe77Cu4QM3oECGUQAA..i&w=500&h=379&hcb=2&ved=2ahUKEwiUvbi41dOGAxWmrJUCHe77Cu4QM3oECGUQAA",
    },
    {
        nombre: "Lámpara",
        id: 43,
        precio: 2000,
        cantidad: 1,
        img: "https://www.google.com/imgres?q=lampara&imgurl=https%3A%2F%2Fwww.boutiquedeluz.com%2Fwp-content%2Fuploads%2F2021%2F08%2Flampara-de-pie-Java-con-pie-de-madera-en-color-negro-y-pantalla-de-lienzo-scaled.jpg&imgrefurl=https%3A%2F%2Fwww.boutiquedeluz.com%2Fproducto%2Flampara-de-pie-java-con-tripode-negro-y-pantalla-de-lienzo%2F&docid=-jfBCFKbPLVUEM&tbnid=v56dSXiBSPITpM&vet=12ahUKEwj2_dXD1dOGAxXrrpUCHanaBN4QM3oECGsQAA..i&w=1452&h=2560&hcb=2&ved=2ahUKEwj2_dXD1dOGAxXrrpUCHanaBN4QM3oECGsQAA",
    },
]
/* 
const productosHTML = document.getElementById("productos")
let plantillaCarrito = ``

for (const productos of carrito) {
    plantillaCarrito = plantillaCarrito + `
    <div>
        <h3>${productos.nombre}</h3>
        <img src="${productos.img}" width="100px"/>
        <span>Precio unitario: ${productos.precio} x ${productos.cantidad} unidades </span>
        <br>
        <span> Total: ${productos.precio * productos.cantidad}</span>
        <hr>`
}

productosHTML.innerHTML = plantillaCarrito

const mostrarTotal = document.getElementById("precio-total")
let precioTotal = 0
for (const productos of carrito) {
    precioTotal = precioTotal + productos.precio * productos.cantidad
}

mostrarTotal.innerHTML = `Total: $${precioTotal}` */

const renderizarCarrito = (array) => {    
const productosHTML = document.getElementById("productos")
let plantillaCarrito = ``
let precioTotal = 0

for (const item of array) {
    precioTotal = precioTotal + (item.precio * item.cantidad)
    plantillaCarrito = plantillaCarrito + `
    <div>
        <h3>${item.nombre}</h3>
        <img src="${item.img}" width="100px"/>
        <span>Precio unitario: ${item.precio} x ${item.cantidad} unidades </span>
        <br>
        <span> Total: ${item.precio * item.cantidad}</span>
        <hr>`
}
productosHTML.innerHTML = plantillaCarrito

const mostrarTotal = document.getElementById("precio-total")
mostrarTotal.innerText = `Total: $${precioTotal}`
}

renderizarCarrito(carrito)
/* 
const eliminarItemPorId = (ID) => {
    for (const items of carrito) {
        if (items.id = ID) {
            if (items.cantidad == 1) {
                carrito.pop(items)
            } else {
                items.cantidad = items.cantidad - 1
            }
        }
    }
    renderizarCarrito(carrito)
}
*/

const buscarItemPorID = (id) => carrito.find((item) => {
        return item.id === id
    }
)

const agregarItemAlCarrito = (item) => {
    const itemBuscado = buscarItemPorID(item.id)
    if (itemBuscado){
        itemBuscado.cantidad = itemBuscado.cantidad + 1
    } else {
        item.cantidad = 1;
        carrito.push(item)
    }
    renderizarCarrito(carrito)
};

const nuevoItem = {
    nombre: "Platos de cerámica x12",
    id: 87,
    precio: 5000,
    thumbnail: ""
}

agregarItemAlCarrito(nuevoItem)