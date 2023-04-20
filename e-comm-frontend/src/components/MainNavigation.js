import React from "react";
import { useNavigate } from "react-router-dom";

import './MainNavigation.css'
import Navbar from "./Navbar";
import Header from "./Header";

function MainNavigation({opensidebar, openaccountmodal}){
    
   

    return (
        <>
           <Header openaccountmodal = {openaccountmodal}></Header>
           <Navbar opensidebar = {opensidebar}></Navbar>
        </>
    )
}

export default MainNavigation;