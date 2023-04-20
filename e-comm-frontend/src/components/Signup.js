import React, { useState } from "react";

import './Signup.css'

function Signup(){

    let [profilepic, setprofilepic] = useState('');

    const fileuploadHandler = (event) => {

        
        setprofilepic(event.target.files[0])

    }

    const handleformsubmit = (event) => {
        event.preventDefault();
        console.log("hint",event.target)
        
    }

    return (
        <>
            <div className="signup-container">
                
                <form onSubmit={handleformsubmit}>
                    <div className="form-elements image-upload">
                        <div id = 'profile-pic-icon'></div>
                        <label>profile pic</label>
                        <input type = 'file' name = 'myfile' onChange = {fileuploadHandler} ></input>
                    </div>
                    <div className="form-elements">
                        <label>firstname</label>
                        <input  type = 'text'></input>  
                    </div>
                    <div className="form-elements">
                        <label>lastname</label>
                        <input type = 'text'></input>
                    </div>
                    <div className="form-elements">
                        <label>email</label>
                        <input type = 'text'></input>
                    </div>
                    <div className="form-elements">
                        <label>password</label>
                        <input type = 'text'></input>
                    </div>
                    <input id = 'signup-btn' type = 'submit' value = 'Signup'></input>
                </form>
            </div>
            
        </>
    )
}

export default Signup;