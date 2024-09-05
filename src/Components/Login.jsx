import React from 'react'
import { redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Login({setLog}) {

    const handleLogin = ()=>
    {
        setLog(true); 
    }
  return (
  

        <section className='Login' style={{backgroundColor:'aliceblue'}}>
            <div className='container custom-container p-2'>
                <div className='part1'>
                    <img src="images/login.gif" className='section-part-image'/>
                </div>
                <div className='part2 p-4'>
                <form style={{ margin:'0px auto'}}>
                        <h1 className="h3 mb-3 fw-bold text-center ">Log In</h1>

                        <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="form-check text-start my-3">
                        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Remember me
                        </label>
                        </div>
                        <Link to='/' className="btn btn-outline-success w-100 py-2" type="submit" onClick={handleLogin}>Log in</Link>
                    </form>
                </div>
            </div>
        </section>


  )
}
