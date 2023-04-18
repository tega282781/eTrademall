import React, { Component } from 'react'
import './myStyles.css';
import Navbar from './Navbar';


export class Signup extends Component {
  render() {
    return (
      <div className='signup'>
       <Navbar/>
      <div className='s-1'>
      <div className='container'>
        <div className='word'>
        <h4>Hi, Create an account with us today</h4>
        </div>

        <div className='detail'>

        <div>
          <input required type='text' placeholder='FirstName' />
        </div>
      
        <div>
          <input required type='text' placeholder='MiddleName' ></input>
        </div>

        <div>
          <input required type='text' placeholder='LastName' ></input>
        </div>

        <div>
          <input required type='email' placeholder='Email' ></input>
        </div>

        <div>
          <input required type='phone' placeholder='Phone'></input>
        </div>

        <div>
          <input required type='password' placeholder='Password' ></input>
        </div>

       

      <div>
        <label>Date of birth</label>
        <input style={{width: '100px'}} type='date'></input>
      </div>
      
      <div className='submit'>
        <button className='submitt'>Submit</button>
      </div>
      </div>

      </div>
      </div>
      </div>
    )
  }
}

export default Signup