import React from 'react'

export const RowArticle = (props) => {
    return (
        <div>
            <h2>{props.titulo}</h2>
            <span>{props.direccion_author}</span>
            <span>{props.fecha}</span>
        </div>
    )
}