import React, { Component } from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './myStyles.css';
import Navbar from './Navbar';

export class Login extends Component {
  render() {
    return (
      <div className='login'>
        <Navbar/>
      <div className='l-login'>
      <div className='container'>
          <div className='l-left'>
            <div className='l-1'>Log in to your account</div>
            <div className='l-2'>Don't have an account? <Link style={{ 
            fontSize: '15px', color: 'blue', fontWeight: 'bold'}} to='/Signup'>Click here</Link>
          </div>

          <div className='l-right'>
            <form>
          <div className='input-box'>
          <input type='text'  required />
          <label>Username</label>
          <div className='stick'><FaEnvelope /></div>
          </div>

          <div className='input-box'>
          <input type='password' required />
          <label>Password</label>
          <div className='stick'><FaLock /></div>
          </div>

          <div className='box'>
            <label><input type='checkBox'></input>Remember me</label>
            <Link style={{color: 'white'}} to='/Password'>forgot password?</Link>
          </div>

          <div>
            <button className='l-button'>Log in</button>
          </div>

          </form>
          </div>
          </div>
          </div>
         
        </div>
      </div>
   
    )
  }
}

export default Login