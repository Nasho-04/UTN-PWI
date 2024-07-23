import React from 'react'
import './Contacto.css'
import { Link } from 'react-router-dom'

const Contacto = ({contacto}) => {
    return (
    
    <div className='contacto'>
        <img className='img' src={contacto.img} alt="foto de perfil" />
        <Link className='link' to={`/chat/${contacto.id}`} mensajes={contacto.mensajes}>
        <h2>{contacto.nombre}</h2>
        </Link>
    </div>
  )
}

export default Contacto