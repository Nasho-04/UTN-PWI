import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import obtenerProductoPorId from '../../helpers/productos'
import { eliminarProductoPorId } from '../../helpers/productos'
import { useGlobalContext } from '../../context/GlobalContext'

const Detail = () => {
   const parametros = useParams()
   const producto = obtenerProductoPorId(parametros.producto_id)
   const handleEliminar = useGlobalContext()
   
   
  return (
    
    <div>
      <Link to={'/'}>Volver a inicio</Link>
        <br />
        <h1>{producto.nombre}</h1>
        <button onClick={() => handleEliminar.handleEliminar(producto.id)}>Eliminar producto</button>
    </div>
  )
}

export default Detail