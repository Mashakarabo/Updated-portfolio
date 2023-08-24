import React, { useState } from 'react'
import './SignIn.css'


export default function SignIn() {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

    const [username, setUsername] = useState();
    const [password, setpassword] = useState();



  return (
    <div className='login'>
        <form>
            <h2>Login with your Administrator Credentails</h2><br/><br/>
        <label>Username</label>
        <input 
        type='text'
        name={username}
        placeholder='enter username' required
        style={{backgroundColor:"white", width:"100%",borderRadius: "0",color:"black"}} 
        /><br/><br/>

        <label>Password</label>
        <input 
        type='password'
        name={password}
        placeholder='enter password' required
        style={{backgroundColor:"white",width:"100%",borderRadius: "0",color:"black"}} 
        /><br/><br/>


        <button onClick={() => openInNewTab('http://localhost:3000/SignIn?')}>Login</button>

        </form>
       
    </div>
  )
}
