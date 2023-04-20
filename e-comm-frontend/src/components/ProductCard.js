import React from 'react'
import {v4} from 'uuid'


import {  useDispatch } from 'react-redux'
import './ProductCard.css'

const ProductCard = ({ title, imageUrl, price}) => {
  
  
  const dispatch = useDispatch();
  
  const addtoCart = () => {
      let id = v4();
      console.log("dispatching ADD_TO_CART")
      dispatch({type: 'ADD_TO_CART', val: {id,title, imageUrl, price}})
  }
  
  return (
    
        <div className='product-card'>
            <h3>{title}</h3>
            <img src = {imageUrl}></img>
            <div>
              <h4>{price}</h4>
              <button onClick = {addtoCart}>Add to cart</button>
            </div>
        </div>
    
  )
}

export default ProductCard