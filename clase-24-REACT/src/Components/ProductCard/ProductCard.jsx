import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({producto}) => {
    const {nombre,
        descripcion,
        precio,
        id,
        stock,
        codigo,
        categoria} = producto

  return (
    <div>
        <h2>{nombre}</h2>
        <span>Precio: ${precio}</span>
        <br />
        <span><b>Unidades Disponibles: {stock}</b></span>
        <br />
        <Link to={'detail/' + id}>Ver detalle</Link>
        <hr />
    </div>
  )
}

export default ProductCard