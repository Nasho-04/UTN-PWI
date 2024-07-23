import React, { useState } from 'react'
import ColorPaletteList from './components/ColorPaletteList/ColorPaletteList'
import Counter from './components/Counter/Counter'
import ColorCardForm from './components/ColorCardForm/ColorCardForm'


function App() {
  const cards = [
    {
      colors: ['#000000', '#FF4191', '#E90074', '#FFF078'],
      likes: 50,
      time: '13 hours',
      id: 1
    },
    {
      colors: ['#EEEDEB', '#E6B9A6', '#939185', '#2F3645'],
      likes: 216,
      time: 'yesterday',
      id: 2
    },
    {
      colors: ["#156482", "#A35FE8", "#EDAFE6", "#168DEA"],
      likes: 69,
      time: '2 hours',
      id: 3
    }
  ]

  const [colorCardLista, setColorCardLista] = useState(cards)

  const handleSubmit = (e, formValues ) => {
    e.preventDefault()
    console.log("enviado", formValues)
    const colors = []
    for (let index = 1; index <= 4 ; index++) {
      colors.push(formValues["color_" + index])
    }
    setColorCardLista([...colorCardLista, {colors: colors, likes: 0, id: 5, time: formValues.time}])
  }

  return (
    <>
      <ColorPaletteList card={colorCardLista} />
      <Counter limit={17}></Counter>
      <ColorCardForm handleSubmit={handleSubmit}></ColorCardForm>
    </>
  )
}
export default App
