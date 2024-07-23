import React, { useState } from 'react'

const ColorCardForm = ( props ) => {
    const formScheme = {
        colors: 4,
        time: 'timestamp'
    }
    const initialState = {
        time: '',
        color_1: '',
        color_2: '',
        color_3: '',
        color_4: ''
    }
    const [formValues, setFormValues] = useState(initialState)
    

    const handleChangeForValue = (e) => {
        const valueToChange = e.target.name
        const newValue = e.target.value        
        setFormValues({...formValues, [valueToChange]: newValue})
    }

    
    const ColorsInputs = []
    for (let index = 1; index <= formScheme.colors; index++) {
        ColorsInputs.push(
            <div key={index}>
                <label htmlFor={"color_" + index}>Color {index}</label>
                <input name={"color_" + index} id={"color_" + index} type='text' value={formValues['color_' + index]} onChange={handleChangeForValue}/>
            </div>
        )
    }


    console.log(formValues)

        return (
            <form onSubmit={(e) => props.handleSubmit(e, formValues)}>
                 <h2>Formulario para crear una colord card</h2>
                 {ColorsInputs}
                 <div>
                    <label htmlFor="time">Fecha</label>
                    <input type={formScheme.time} name='time' id='time' onChange={handleChangeForValue} value={formValues.time}/>
                </div>
                <button type='submit'>Enviar</button>
            </form>
        )
    }

    export default ColorCardForm