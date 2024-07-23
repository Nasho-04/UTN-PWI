import React, { useState } from 'react'
import "./Footer.css"

const Footer = ( handleSubmit ) => {
  const [mensajeValue, setMensaje] = useState('')
  
  return (
    <div className='footer'>
      <form 
      className='input-container'
      onSubmit={(e) => handleSubmit(e, [...mensajeValue])}
      >
        <i className="bi bi-emoji-smile icon emoji"></i>
        <input 
        className='msg-input' 
        type="text" 
        placeholder='Mensaje' 
        name='mensaje' 
        id='mensaje'
        value={ mensajeValue }
        onChange={(e) => setMensaje(e.target.value)}
        />
        <i className="bi bi-paperclip icon clip"></i>
        <i className="bi bi-camera icon camara"></i>
        <button 
        className='submit-btn' 
        type='submit'
        >
          <i className="bi bi-send-fill"></i>
        </button>
      </form>
    </div>
  )
}

export default Footer