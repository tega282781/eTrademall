import React from 'react';
import "./myStyles.css";
import { FaPhone, FaShoppingBag } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaInfo } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { FaCopyright } from 'react-icons/fa';
import { FaShoppingBasket } from 'react-icons/fa';

function footer() {
  return (
    <div className='footer'>
    <div className='every'>
        
        <div>
           <h4><FaShoppingBasket /> Xclusive Stores</h4>
        </div>

        <div>
           <h5> Contact Us </h5>
            <div className='listing'>
                <a href='#'><li><FaLocationArrow /> 54 Adesuwa Road, Benin City.</li></a>
                <a href='#'><li><FaPhone /> 09099943554</li></a>
                <a href='#'><li><FaEnvelope /> XclusiveStores@gmail.com</li></a>
            </div>
        </div>


        <div>
            <h5>Account</h5>
            <div className='listing'>
            <a href='#'><li><FaUser /> Sign In</li></a>
            </div>
        </div>


        <div>
            <h5>Company</h5>
            <div className='listing'>
            <a href='#'><li><FaInfo /> About Us</li></a>
            </div>
        </div>


        <div>
            <h5>Resources</h5>
            <div className='listing'>
            <a href='#'><li><FaLock /> Privacy</li></a>
            <a href='#'><li>Terms and condition</li></a>
            </div>
        </div>

    </div>



    <div className='under'>
        <div><FaCopyright />Copyright 2023 by Xclusive Stores</div>
        <div>All right reserved</div>
    </div>
    </div>
  )
}

export default footer