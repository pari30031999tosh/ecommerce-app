import react from 'react'

import './Backdrop.css'
//hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
function Backdrop({sidebar, closesidebar, accountModal, openaccountmodal}){

    return (
        <div className= {sidebar || accountModal? 'backdrop backdrop--open':'backdrop' } onClick = {closesidebar}>

        </div>
    )
}

export default Backdrop;