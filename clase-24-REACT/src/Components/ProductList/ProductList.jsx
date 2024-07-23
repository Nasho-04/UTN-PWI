import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const ProductList = ({productos}) => {
  return (
    <div>
        {productos.map((producto => {
            return (
                <ProductCard producto={producto} key={producto.id}></ProductCard>
            )
        }))}
    </div>
  )
}

export default ProductList