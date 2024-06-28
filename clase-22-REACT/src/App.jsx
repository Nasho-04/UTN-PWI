import React from 'react'
import ColorPaletteList from './components/ColorPaletteList/ColorPaletteList'


function App() {
  const cards = [
    {
      colors: ['#000000', '#FF4191', '#E90074', '#FFF078'],
      likes: 50,
      fecha: '13 hours'
    },
    {
      colors: ['#EEEDEB', '#E6B9A6', '#939185', '#2F3645'],
      likes: 216,
      fecha: 'yesterday'
    }
  ]
  return (
    <ColorPaletteList card={cards}/>
  )
}
export default App
