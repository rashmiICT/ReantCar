import React from 'react';
import "./register.css";

export default function Register() {
  return (
    <div className='register'>
        <form className='registerForm'>
            <span className="registerTitle">Sing Up</span>
            <label>Username</label>
            <input type="text" className='registerInput' placeholder="Enter your Username" />
            <label>Email</label>
            <input type="text" className='registerInput' placeholder="Enter your Email" />
            <label>Password</label>
            <input type="password" className='registerInput' placeholder="Enter your Password" />
            <button className='registerButton'>Sign Up</button>
        </form>
    </div>
  )
}
