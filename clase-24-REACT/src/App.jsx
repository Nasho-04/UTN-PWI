import React from 'react'
import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import Cart from './Pages/Cart/Cart'
import Home from './Pages/Home/Home'
import Detail from './Pages/Detail/Detail'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home></Home>}/>       
      <Route path='/detail/:producto_id' element={<Detail></Detail>}/>
      <Route path='/cart' element={<Cart></Cart>}></Route>
    </Routes>
    </>
  )
}

export default App
