import React, { useState } from 'react'

const Counter = ( props ) => {
    const [contador, setContador] = useState(0)

    const handleAumentar = () => {
        setContador(contador + 1)
    }

    const hanldeDecrementar = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    return (
        <>
            <button onClick={ hanldeDecrementar }>-</button>
            <span>{contador != props.limit ? contador : `${contador} - No se puede incrementar más de ${props.limit}`}</span>
            <button onClick={ handleAumentar } hidden={contador === props.limit && true}>+</button>
        </>
    )
}

export default Counter