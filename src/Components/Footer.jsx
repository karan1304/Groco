import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf} from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className='footer text-white' id="footer">
        <div className="container pt-5 pb-1" >
           
                <div className="row">
                <div className="col-6 col-md-2 mb-3">
                    <h5 >About US</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About Us</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">WhyUs</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Security</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Testimonials</a></li>
                    </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                    <h5>Help</h5>
                    <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Account</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Support Center</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Privacy Policy</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Terms & Conditions</a></li>
                    
                    </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                    <h5>Contact Us</h5>
                    <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">+1(406)555-0120</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">developer@gmail.com</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">123 Main Street, Delhi</a></li>
                    </ul>
                </div>

                <div className="col-md-5 offset-md-1 mb-3">
                    <h1><FontAwesomeIcon icon={faLeaf} className='custom-logo-icon'/>Groco</h1>
                    <p>We provide fresh, top-notch meat, vegetables, and more. Enjoy quick delivery and savor the finest ingredients for a delicious dining experience.</p>
                </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top ">
                <p className='m-auto ' style={{fontSize:'0.75rem', letterSpacing:'0.15rem'}}>© 2024 Developed By Karan Sharma</p>
                </div>
          
            </div>
        </footer>
  )
}
