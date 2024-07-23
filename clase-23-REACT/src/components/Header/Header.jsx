import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = ( props ) => {
  console.log(props.perfil)
  return (
    <div className='header'>
      <div className='info-contacto'>
        <Link to="/">
          <i className="bi bi-arrow-left"></i>
        </Link>
        <img src={"../" + props.perfil} className='profile-img'  alt="foto de perfil" />
        <h2 className='nombre-contacto'>{props.nombre}</h2>
      </div>
      <div className='funcionalidades'>
        <i className="bi bi-camera-video"></i>
        <i className="bi bi-telephone"></i>
        <i className="bi bi-three-dots-vertical"></i>
      </div>
    </div>
  )
}

export default Header