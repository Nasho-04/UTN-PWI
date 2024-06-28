import React from 'react'
import { nombre } from './funciones'
import { Button } from './components/Boton'
import Carta from './components/Carta'
import { RowArticle } from './components/RowArticle'


console.log(nombre)
function App() {
  let nombreUsuario = "julieta"
  return (
    <div>
      <h1>Hola {nombreUsuario}</h1>
      <Button/>
      <Carta/>
      <RowArticle titulo="Lift-off_ The MDN Curriculum launch" fecha="4 months ago" direccion_author="developer.mozilla.org" />
      <RowArticle titulo="Baselines evolution on MDN" fecha="7 months ago" direccion_author="developer.mozilla.org" />
      <RowArticle titulo="Introducing the MDN Playground: Bring your code to life!" fecha="a year ago" direccion_author="developer.mozilla.org" />
    </div>
  )
}


export default App