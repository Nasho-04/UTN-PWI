import productos from "../data/productsData"


const obtenerProductoPorId = (id) => {
    return productos.find(producto => producto.id == id)
}

export default obtenerProductoPorId

// hacer una funcion para eliminar productos por id



const obtenerProductos = () => {
    const productos_check = localStorage.getItem('productos')
    if (productos_check) {
        return productos
    } else {
        const productos_JSON = JSON.stringify(productos)
        localStorage.setItem('productos', productos_JSON)
        return productos_JSON
    }
}

const crearProducto = (producto) => {
    const productos = obtenerProductos()
    productos.push(producto)
    const productos_JSON = JSON.stringify(productos)
    localStorage.setItem('productos', productos_JSON)
    return productos
}

const eliminarProductoPorId = (id) => {
    const lista_productos = obtenerProductos()
    const nuevoArray = lista_productos.filter(producto => producto.id != id)
    const productos_JSON = JSON.stringify(nuevoArray)
    localStorage.setItem('productos', productos_JSON)
    return nuevoArray
}


export { obtenerProductos, crearProducto, eliminarProductoPorId}
