import React from 'react'
import "./SignupScreen.css"

function SignUpScreen() {
  return (
        <div className='signupScreen'>
        <form>
            <h1>Sign In</h1>
            <input placeholder='Email' type='email'/>
            <input placeholder='password' type='password'/>
            <button type='submit'>Sign In</button>
        </form>
    </div>
  )
}

export default SignUpScreen