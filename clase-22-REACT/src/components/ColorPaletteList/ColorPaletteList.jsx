
import React from 'react'
import ColorPalette from '../ColorPalette/ColorPalette'
import "./ColorPaletteList.css"

const ColorPaletteList = ( props ) => {
  return (
    <div className='card-container'>
      {props.card.map((carta) => {
        return (
          <ColorPalette colores={carta.colors} likes={carta.likes} time={carta.time} key={props.id}/>
        )
      })
      }
    </div>
  )
}

export default ColorPaletteList