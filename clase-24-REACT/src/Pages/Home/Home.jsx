import React from 'react'
import ProductList from '../../Components/ProductList/ProductList'
import  productos from "../../data/productsData"
import { obtenerProductos, crearProducto } from '../../helpers/productos'
import { useGlobalContext } from '../../context/GlobalContext'

const Home = () => {
  const globalContextValues = useGlobalContext()
  const lista_productos = globalContextValues.productos

  console.log(lista_productos)
  return (
    <div>
        <h1>Elige nuestros productos</h1>
        <ProductList productos={lista_productos}></ProductList>
    </div>
  )
}

export default Home