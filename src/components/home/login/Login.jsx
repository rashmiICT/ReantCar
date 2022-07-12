import React from 'react';
import "./login.css";


export default function Login() {
  return (
    

    <div className='login'>
        <form className='loginForm'>
            <span className="loginTitle">Sign In</span>
            <label>Email</label>
            <input type="text" className='loginInput' placeholder="Enter Your Email" />
            <label>Password</label>
            <input type="password" className='loginInput' placeholder="Enter Your Password" />
            <button className='loginButton'>Sign In</button>
        </form>
    </div>
  )
}
