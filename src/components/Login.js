import React from 'react'
import './login.css'
function Login() {
  return (
    <>
    <div className="wrapper">
        <form>
        <h1>login Form</h1>
        <div className="input-box">
            <input type="text" placeholder='username' required/>
        </div>
        <div className="input-box">
            <input type="password" placeholder='password' required/>
        </div>
        <div className='remember-forget'>
            <label><input type="checkbox"/>Remember Me</label>
            <a href="#">Forget Password?</a>
        </div>
        <button type='submit'>Login</button>
        <div className='register-link'>
            <p>Don't have an Account?
            <a href="#">Register</a></p>
        </div>
        </form>
    </div>   
     </>
  )
}
export default Login
