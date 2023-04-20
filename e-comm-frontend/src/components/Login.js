import React from 'react'
import { useNavigate } from 'react-router-dom';

import './Login.css'

function Login(){
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate("/signup")
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("submit handler")
        
    }

    return (
        <>
                <div className='login'>
                    <div className='signin-screen'>
                        <h2>Sign in</h2>
                        <form onSubmit= {submitHandler}>
                            <div id = 'username'>
                                <label><h5>Email or mobile phone number</h5></label>
                                <input id = 'username-input' type = 'text'></input>
                            </div>
                            <div id = 'password'>
                                <label>password</label>
                                <input id = 'password-input' type = 'text'></input>
                            </div>
                            
                            <input id = 'login-btn' type='submit' value = 'login'></input>
                        </form>
                        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

                    </div>
                    
                    <button id = 'signup-btn-on-login' onClick = {clickHandler}>SignUp</button>

                </div>
                
                
           
        </>
    )
}

export default Login;