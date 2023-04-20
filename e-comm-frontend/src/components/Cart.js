import React from "react";

import { useSelector } from "react-redux";
import { useEffect } from "react";
import './Cart.css'
import MainNavigation from "./MainNavigation";
import CartItems from "./CartItems";


function Cart(){

    const cartItems = useSelector(state => state.cartItems)

    useEffect(() =>{
        if(cartItems.length == 0){
            //api call to backend to fetch data
            //now update in redux calling dispatch
            
        }
    } ,[])
    

    return (
        <>
            <MainNavigation></MainNavigation>
            <div className="cart-container">
                    <div className="cart-items">
                        {cartItems.map(m => <CartItems id = {m.id} title = {m.title} imageUrl = {m.imageUrl} price = {m.price} ></CartItems>)}
                    </div>
                    <div className="cart-billing"></div>
            </div>

        
        </>
        
    )
}

export default Cart;