
import React from 'react'
import ColorPalette from '../ColorPalette/ColorPalette'

const ColorPaletteList = (props) => {
  return (
    <div className='card-container'>
      {props.card.map((card) => {
        return (
          <ColorPalette colors={card.color} likes={card.likes} fecha={card.fecha}/>
        )
      })
      }
    </div>
  )
}

export default ColorPaletteList