/*import React, { useState } from 'react';
import './Car.css'
function Car() {
    const [initial, final] = useState('Email address or phone number ');
 const [initial1, final1] = useState('Password');
  return (
      <form className='container'>
          <div className='email' onClick={ () => final(' ') }>{ initial }</div>
      <input type={'text'} className='input1' ></input>
              <div className='password' onClick={ () => final1(' ') }>{ initial1 }</div>
        <input type={'password'} className='input2' ></input>
  <button className='button'>Log in</button>
      <a href='#' className='forgotten' ><b>Forgotten password ?</b></a>
    <hr className='line'></hr>
    <button className='button2'>Create New Account</button>
    </form>
  )
}*/
import './Car.css'
function Car() {
  return (
    <form className='container'>
      <input type="text" className="input1" placeholder="Enter email address" />
      <input type="password" className="input2" placeholder="Password" />
      <button className='button'>Log in</button>
      <a href='#' className='forgotten' ><b>Forgotten password ?</b></a>
        <hr className='line'></hr>
    <button className='button2'>Create New Account</button>
        
  </form>
 
  )
}
export default Car;