import React from 'react'
import "./ColorPalette.css"

const ColorPalette = ( props ) => {
    const colores = props.colores
    return (
        <div className='card'>
            <div className='colors'>
                {colores.map((color, index) => {
                    return (
                        <div className='color' style={{backgroundColor: color}} key={color + index}></div>
                    )
                })
            }
            </div>
            <div className='card-info'>
                <button className='likes'>{props.likes}</button>
                <span className='fecha'>{props.time}</span>
            </div>
        </div>
    )
}


export default ColorPalette