import React from 'react'

import './SIgnInHoverModal.css'
import {  useNavigate } from 'react-router-dom'

const SignInHoverModal = ({accountModal, openaccountmodal }) => {
  
  let navigate = useNavigate();

  const navigateToSignup = () => {
    console.log("navigating to signup")
    navigate("/signup")
    
  }

  const navigateToSignin = () =>{
    navigate("/login")
  }

  const leaveSigninHover = () => {
    openaccountmodal();
  }
  

  return (
    <div className= {!accountModal ?'hover-modal-container':'hover-modal-container hover-modal-open'} onMouseEnter={openaccountmodal} onMouseLeave={leaveSigninHover} >
        <div className = 'signin-option' >
            <div id = 'hover-modal-login-btn' onClick={navigateToSignin}>sign in</div>
            <p>New customer?<span onClick = {navigateToSignup}>start here</span></p>
        </div>
    </div>
  )
}

export default SignInHoverModal