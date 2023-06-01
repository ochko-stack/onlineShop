import React from 'react'
import{PRODUCTS} from "../../products.js"
import Product from './product.jsx'
import "./shop.css"
const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
           <h1>Choko's shop here</h1>
      </div>
      <div className='products'>{PRODUCTS.map((product)=>
      <Product data={product}/>)}</div>
    </div>
  )
}
export default Shop
