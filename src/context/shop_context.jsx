import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);




const getDefaultCart = ()=>{
     let card ={}
     for(let i=0; i<PRODUCTS.length + 1; i++){
          card[i] = 0;
     }
     return card;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart()); 

    const getTotalAmount = ()=>{
          let totalaAmount = 0;
          for(const item in cartItems){
               if(cartItems[item]>0){
                    let itemInfo = PRODUCTS.find((product)=>product.id === Number(item));
                    totalaAmount += cartItems[item] * itemInfo.price
               }
          }
          return totalaAmount;
     };

    // add cart 
    const addToCart = (itemId)=>{
         setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
    }

    // remove cart
    const removeFromCart = (itemId)=>{
      setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
   }

   const updateCartItemCount = (newAmount, itemId)=>{
        setCartItems((prev)=>({
             ...prev, [itemId]:newAmount
        }));
   }

   const contextValue = {cartItems,
      addToCart,
      removeFromCart,
       updateCartItemCount,
     getTotalAmount
     }
    
  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
};

export default ShopContextProvider

