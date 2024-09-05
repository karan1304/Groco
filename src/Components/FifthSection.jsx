import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck , faLocationDot , faHeadset , faDollarSign} from '@fortawesome/free-solid-svg-icons';

export default function FifthSection() {
  return (
    <section className='fifth-section'>

            <div className="container custom-container">

                <div className='part1 p-3'>
                    <h1 className='heading3'>Why We’re Best Quality Grocery Shopper</h1>
                    <p className='section-tagline'>We offer a wide variety of products to choose from you can find everything you need to feed your family.</p>
                    <p className='qualities '><FontAwesomeIcon icon={faTruck} className='custom-circle-icon'/><span className='quality1 '>Extra Fastest Delivery</span></p>
                    <p className='qualities '><FontAwesomeIcon icon={faLocationDot} className='custom-circle-icon'/><span className='quality2'>Track and Manage Orders</span></p>
                    <p className='qualities '><FontAwesomeIcon icon={faHeadset} className='custom-circle-icon'/><span className='quality3'>Customer Support</span></p>
                    <p className='qualities '><FontAwesomeIcon icon={faDollarSign} className='custom-circle-icon'/><span className='quality4'>Competitive Price</span></p>
                </div>
                <div className='part2'>
                    <img src='images/fifth-section-part2.png' alt="premium_Quality" className='section-part-image'/>
                </div>


            </div>

        </section>
  )
}
