import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'





function Navbar({opensidebar}){

    const navigate = useNavigate();
    
    const menuHandler = () => {
        navigate('/login')
    }

    return  (
        <div className='menubar'>
            <div onClick = {opensidebar}>
                <i className="ri-menu-line " style = {{"color":'white'}}></i>
            </div>
            <div id = 'menu' onClick = {menuHandler}>Menu</div>
            <div id = 'best-seller'>Best sellers</div>
            <div id = 'mobile'>Mobiles</div>
            <div id = 'deal'>Today's deals</div>
            <div id = 'electronics'>Electronics</div>
            <div id = 'prime'>Prime</div>
        </div>
    )
}

export default Navbar;