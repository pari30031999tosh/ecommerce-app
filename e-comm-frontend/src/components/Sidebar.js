import React from 'react'

import './Sidebar.css'

function Sidebar({sidebar}){
    
    return  (
        <div className= {sidebar? 'sidebar sidebar--open':'sidebar' }>
            <li id = 'sidebar-top'>Hello User</li>
            <li><i className="ri-home-line"></i>Home</li>
            <li>About us</li>
            <li>contacts</li>
            <li>careers</li>
            <li>gallery</li>
        </div>
    )
}

export default Sidebar;