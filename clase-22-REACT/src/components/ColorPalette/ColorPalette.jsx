import React from 'react'

const ColorPalette = (props) => {
    return (
        <div className='card-container'>
            <div className='colors'>
                {props.colors.map((color) => {
                    return (
                        <div className='color' style={{backgroundColor: {color}}}></div>
                    )
                })
                }
            </div>
            <div className='card-info'>
                <button className='likes'>{props.likes}</button>
                <span className='fecha'>{props.fecha}</span>
            </div>
        </div>
    )
}


export default ColorPalette