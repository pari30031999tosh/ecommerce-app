import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import './Header.css'

function Header({openaccountmodal}){

  
    const navigate = useNavigate();

    

    const clickHandler = () => {
       
        navigate("/Home")
    }

    const addressHandler = () => {
        navigate("/address")
    }

    const loginHandler = () => {
        openaccountmodal()
        navigate("/login")
    }

    const orderHistoryHandler = () => {
        navigate("/orders")
    }

    const cartHandler = () => {
        
        navigate("/cart")
    }


    const searchHandler = (event) => {
        
        alert("searching product")
    }
    return (
    <>
        <header className="navbar header">
                <div  id = 'logo'  onClick = {clickHandler}>
                    Amazon.in
                </div>
                <div id = 'address'  onClick = {addressHandler}>
                    <div>Hello</div>
                    <div>Select your address</div>
                </div>
                <div className="header-middle">
                    <select id = 'select'>
                        <option>All</option>
                        <option>All</option>
                        <option>All</option>
                        <option>All</option>
                        <option>All</option>

                    </select>
                    <form style = {{"marginLeft": "1px", "marginTop": "5px", "height": "40px", "width":"90%"}} onSubmit = {searchHandler} >
                        <input style = {{"width": "60%", "height": "35px"}} type = "text" placeholder="Search amazon"></input>
                        <input style = {{"marginLeft": "1px", "marginTop": "5px", "height": "40px"}} type = 'submit' value = "SEARCH" ></input>
                    </form>
                </div>
                <div className = 'header-right' >
                    <div id = 'signin-btn'  onClick = {loginHandler} onMouseEnter={openaccountmodal} onMouseLeave={openaccountmodal}>SignIn</div>
                    <div id = 'return-btn'  onClick = {orderHistoryHandler}>
                        <div style = {{"width": "100%"}}>Return&</div>
                        <div>Orders</div>
                    </div>
                    <div id = 'cart'  onClick = {cartHandler}>Cart</div>
                </div>
           </header>
    </>
  )
}

export default Header;