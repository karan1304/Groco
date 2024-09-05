import React from 'react'

export default function SignUp() {
  return (
    <section className='SignUp' style={{backgroundColor:'aliceblue'}}>
    <div className='container custom-container p-2'>
        <div className='part1'>
            <img src="images/login.gif" className='section-part-image'/>
        </div>
        <div className='part2 p-4'>
        <form style={{ margin:'0px auto'}}>
                <h1 class="h3 mb-3 fw-bold text-center ">Log In</h1>

                <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
                </div>

                <div class="form-check text-start my-3">
                <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                    Remember me
                </label>
                </div>
                <button class="btn btn-outline-success w-100 py-2" type="submit">Log in</button>
            </form>
        </div>
    </div>
    </section>
  )
}
