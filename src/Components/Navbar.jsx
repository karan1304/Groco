import React, { useState } from 'react';

import  {Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faLeaf , faCartShopping, faXmark , faArrowRight} from '@fortawesome/free-solid-svg-icons';


export default function Navbar({log,setLog}) {
    const [toggle ,setToggle] = useState(false)

    const handleToggle = ()=>
    {
        console.log(toggle)
            setToggle(true);
    }
    const closeToggle = ()=>
    {
        console.log(toggle);
        setToggle(false);
    }
  return (
    <>
        <div className='navigation'>
            <button onClick={handleToggle} className="toggleBtn"><FontAwesomeIcon icon={faBars} className='custom-toggle-ico'/></button>
            
            <div className='sub-container'>

                <div className='logo-container'>

                    <h1 className='logo' ><FontAwesomeIcon icon={faLeaf} className='custom-logo-icon'/>GrocGo</h1>   

                             
       

                </div>
                <div className='navigation-container'>

                    <nav className='nvbar'>

                        <ul className='nvlist'>
                            <li className='items'><Link to="/" className='navlink'>Home</Link></li>
                            <li  className='items'><Link to="/about" className='navlink'>About</Link></li>
                            <li  className='items'><Link to="/categories" className='navlink'>Categories</Link></li>
                            <li  className='items'><a href="#footer" className='navlink'>Contact</a></li>
                        </ul>
                    </nav>
                   
                </div>
                
                <div className='user-details-container'>
                   
                    <Link to="/cart" className='cart'><FontAwesomeIcon icon={faCartShopping} /></Link>

                    {log===false?<Link to="/login" className='login' style={{textDecoration:'none'}} >Log In</Link>:<Link to="/" className='login' style={{textDecoration:'none'}} onClick={()=>setLog(false)}>Log out</Link>}
                    
                    
                </div>
            </div>
        </div>
        <div className={`mobile-navigation ${toggle===true?'mobile-navigation-visible':''}`}>

            <nav className='m-nvbar'>

                <ul className="m-nvlist">
                    <li className='m-item'><Link to="/" className='m-link' onClick={closeToggle}>Home</Link><FontAwesomeIcon icon={faArrowRight} className='arrow'/></li>
                    <li className='m-item'><Link to="/about" className='m-link' onClick={closeToggle}>About</Link><FontAwesomeIcon icon={faArrowRight} className='arrow'/></li>
                    <li className='m-item'><Link to="/categories" className='m-link' onClick={closeToggle}>Categories</Link><FontAwesomeIcon icon={faArrowRight} className='arrow'/></li>
                    
                    <li className='m-item'><a href="#footer" className='m-link' onClick={closeToggle}>Contact</a><FontAwesomeIcon icon={faArrowRight} className='arrow'/></li>
                    

                </ul>
            </nav>
            <div className='closeBtn-container'>
                 {/* <button onClick={closeToggle} className='closeBtn'><i className="fa-solid fa-xmark custom-close-btn"></i></button> */}
                 <button onClick={closeToggle} className='closeBtn'><FontAwesomeIcon icon={faXmark} className='custom-close-btn'/></button>

            </div>

        </div>
</>
  )
}
