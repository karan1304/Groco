import React ,{useState}from 'react'
import './NewLogin.css'
const NewLogin = () => {
    const [username, setUserName] = useState("");
    const submitForm = (e)=>
        {
            // e.preventDeault();
            if(username)
                alert(username);
        }
  return (
    <form onSubmit={submitForm} className='loginForm'>
        <input type="text" placeholder="Enter your username" className='username' onChange={(e)=>setUserName(e.target.value)}/>
        <button className='btn submitBtn'>Submit</button>
    </form>
  )
}

export default NewLogin
