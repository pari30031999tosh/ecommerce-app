import React from 'react'
import { useDispatch } from 'react-redux'

import './CartItems.css'

const CartItems = ({id,title, imageUrl, price}) => {
  
  const dispatch = useDispatch();
  const removeCartItem = () => {
      console.log("dispatching remove cart")
      dispatch({type: 'REMOVE_CART_ITEM', val: id})
  }


  return (
    <div className='cart-item'>
        <img src = {imageUrl}></img>
        <p>{title}</p>
        <p>{price}</p>
        <button onClick={removeCartItem}>remove item</button>
    </div>
  )
}

export default CartItems