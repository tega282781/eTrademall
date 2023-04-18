import React, { useState } from 'react';
import './myStyles.css';
import { FaBars, FaRegTimesCircle} from 'react-icons/fa';
import login from "../images/loginemoji.png";


import {
  Link
} from "react-router-dom";




function Navbar() {
 
  const [open, setOpen] = useState(false)
  return (
   
    <>
    <div className='navbar'>

     <div className='n-left'>
     <Link style={{textDecoration:'none'}} to="/"><div>Xclusive Stores</div></Link>
     </div>

     <div className='n-right'>

      <div className='menu1'>
      <Link style={{textDecoration:'none'}} to="/Contact"><span>Contact</span></Link>
      

      </div>
      
      <div className='login1'>
      <Link style={{textDecoration:'none'}} to="/Login"><img className='emoji' src={login} alt='' /></Link>
      </div>

  
     

      <div className='hamburger'>
        <div id='dropdown' onClick={(e) => setOpen(!open)}><FaBars/></div>

        {open && (
        <ul id='list'>
           <span className='close' onClick={(e) => setOpen(!open)}><FaRegTimesCircle /></span>
        
           <Link style={{textDecoration:'none'}} to="/Login">
            <li><img className='emoji' src={login} alt='' /></li></Link>

            <Link style={{textDecoration:'none'}} to="/Signup">
              <li>Create Account</li></Link>
        <Link style={{textDecoration:'none'}} to="/Contact"><li>Contact us</li></Link>
        </ul>
        )}

      </div>
     </div>
     
    </div>
   
    </>


  )
}

export default Navbar