import React from 'react'
import './Chat.css'
import Mensaje from '../Mensaje/Mensaje'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import DATA from '../../dataContactos'

const Chat = (props) => {
  const [chat, setChat] = useState(props.data)

  const handleSubmit = (e, mensajeValue) => {
    e.preventDefault();
    const newChat = {
      author: 'yo',
      content: {
        text: mensajeValue},
      fecha: 'ahora',
      estado: 'entregado',
      id: Math.random()
    }
    setChat([...chat, newChat])
    console.log(mensajeValue)
  }

  const { id } = useParams();
  const contacto = DATA.find((contacto) => contacto.id === Number(id))
  const perfil = contacto.img
  return (

    <div className='chat'>
      <Header nombre={contacto.nombre} perfil={perfil}></Header>
      <div className='contenedor-mensajes'>
        {contacto.mensajes.map((mensaje) => {
          return (
            <Mensaje
              author={mensaje.author}
              content={mensaje.content}
              fecha={mensaje.fecha}
              estado={mensaje.estado}
              id={mensaje.id}
            >
            </Mensaje>
          )
        })}
      </div>
      <Footer handleSubmit={handleSubmit}></Footer>
    </div>
  )
}

export default Chat