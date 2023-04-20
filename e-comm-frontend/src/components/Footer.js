import React from 'react'

import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-btn'>
           <button >Back to top</button>
        </div>
        <div className='footer-links'>
            <div>
                <h3>contact us</h3>
                <br></br>
                <p>link1</p>
                <p>link2</p>
                <p>link3</p>
            </div>
            <div>
                <h3>Get to know us</h3>
                <br></br>
                <p>link1</p>
                <p>link2</p>
                <p>link3</p>
            </div>
            <div>
                <h3>connect with us</h3>
                <br></br>
                <p>link1</p>
                <p>link2</p>
                <p>link3</p>
            </div>
            <div>
                <h3>Let us help you</h3>
                <br></br>
                <p>link1</p>
                <p>link2</p>
                <p>link3</p>
            </div>
        </div>
    </div>
    
  )
}

export default Footer