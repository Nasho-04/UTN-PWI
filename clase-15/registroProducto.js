// VALIDACIONES //

const validarTitulo = (titulo) => {
    return titulo && titulo.length > 4
}

const validarPrecio = (numero) => {
    return numero && !isNaN(numero) && numero > 1
}

const validarDescripcion = (descripcion) => {
    return descripcion && descripcion.length > 10
}

const validarCategoria = (categoria) => {
    const categorias = ["tecnologia", "hogar", "otros"]
    if (categorias.includes(categoria)) {
        return categoria
    }
}

const validarMarca = (marca) => {
    return marca && marca.length >= 3
}

// DATOS //

const DATOS = {
    TITULO: {
        mensaje: "Ingrese el titulo del produto:",
        error: "Ingrese un titulo válido, mayor a 4 caracteres:",
        validacion: validarTitulo
    },
    PRECIO: {
        mensaje: "Ingrese el precio de su producto:",
        error: "Ingrese un precio válido, debe ser mayor a 1",
        validacion: validarPrecio
    },
    DESCRIPCION: {
        mensaje: "Ingrese la descripción del producto:",
        error: "Ingrese una descripción válida, mayor a 10 caracteres:",
        validacion: validarDescripcion
    },
    CATEGORIA: {
        mensaje: "Ingrese la categoría de su producto",
        error: `Ingrese una categoría dentro de las siguientes: "tecnologia", "hogar", "otros" `,
        validacion: validarCategoria
    },
    MARCA: {
        mensaje: "Ingrese la marca de su producto:",
        error: "Ingrese una marca válida, recuerde que debe tener al menos 3 caracteres",
        validacion: validarMarca
    }
}

// SOLICITUD //

const solicitarDato = (objeto) => {
    let dato = prompt(objeto.mensaje)
    while (!objeto.validacion(dato)) {
        dato = prompt(objeto.error)
    }
    return dato
}

// REGISTRAR //

const registrarProducto = () => {
    const producto = {
        titulo: null,
        precio: null,
        descripcion: null,
        categoria: null,
        marca: null
    }

    producto.titulo = solicitarDato(
        DATOS.TITULO
    )

    producto.precio = solicitarDato(
        DATOS.PRECIO
    )

    producto.descripcion = solicitarDato(
        DATOS.DESCRIPCION
    )

    producto.categoria = solicitarDato(
        DATOS.CATEGORIA
    )

    producto.marca = solicitarDato(
        DATOS.MARCA
    )

    let plantilla = `
    Título: ${producto.titulo}
    Precio: ${producto.precio}
    Descripción: ${producto.descripcion}
    Categoría: ${producto.categoria}
    Marca: ${producto.marca} 
    `

    let confirmar = prompt(`Confirmar ${plantilla}`)
    if (confirmar == null || confirmar.toLowerCase() == "no" || confirmar.toLowerCase() == "cancelar") {
        registrarProducto()
    } else if (confirmar.toLowerCase() == "si") {
        console.log(producto)
    } else {
        confirmar = prompt(`Confirmar ${plantilla} Ingrese alguna de las siguientes opciones: "no", "cancelar", "si"`)
    }
 }        

registrarProducto()
