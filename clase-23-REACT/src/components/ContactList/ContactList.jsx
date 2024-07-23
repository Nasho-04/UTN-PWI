import React from 'react'
import './ContactList.css'
import DATA from '../../dataContactos'
import Contacto from '../Contacto/Contacto.jsx'

const ContactList = () => {
  return (
    <div className='contact-list-container'>
      <h1>Lista de Contactos</h1>
      <hr />
      <ul>
        {DATA.map((contacto) => {
          return (
            <li >
              <Contacto contacto={contacto} key={contacto.id}></Contacto>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ContactList