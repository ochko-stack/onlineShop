import React, {useContext} from 'react'
import { PRODUCTS } from '../../products'
import {ShopContext} from "../../context/shop_context"
import CartItem from './cart-item';
import './card.css'

import {useNavigate} from 'react-router-dom'

const Cart = () => {
  const{cartItems , getTotalAmount}= useContext(ShopContext);
  const totalaAmount = getTotalAmount();

  const nav  = useNavigate();

  return (
    <div className='cart'>
      <div>
        <h1>Your cart items</h1>
      </div>
      <div className='cartItems'>
          {
            PRODUCTS.map((product)=>{
                   if(cartItems[product.id]!==0){
                        return <CartItem data={product}/>
                   }

            })
          }
      </div>
      {totalaAmount>0?
            <div className='checkout'>
            <p>Subtotal: ${totalaAmount}</p>
            <button onClick={()=>nav('/')}> Continue Shopping</button>
            <button onClick={alert("this feature is coming")}> Checkout</button>
        </div> 
        :<h1>Your cart is empty</h1>
    }

    </div>
  )
}
export default Cart
