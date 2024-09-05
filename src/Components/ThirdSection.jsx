import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons';

export default function ThirdSection({fetchData}) {
  return (
    <section className='third-section'>

            <div className="container custom-container">

                <div className='part1'>
                    
                    <img src='images/third-section-part1.png' alt="premium_Quality" className='section-part-image'/>

                </div>
                <div className='part2'>
                    <h1 className='heading3'>Best Quality Healthy And Fresh Grocery</h1>
                    <p className='section-tagline'>We prioritize quality in each of our grocery, below are the advantage of our products. Organic food is food produced.</p>
                    <p className='qualities '><FontAwesomeIcon icon={faCheck} className='custom-circle-icon'/><span className='quality1 '>Best Quality Healthy And Fresh Grocery</span></p>
                    <p className='qualities '><FontAwesomeIcon icon={faCheck} className='custom-circle-icon'/><span className='quality2'>100% Organic & Natural Products</span></p>
                    <p className='qualities '><FontAwesomeIcon icon={faCheck} className='custom-circle-icon'/><span className='quality3'>100% Returns & Refunds</span></p>
                    <p className='qualities '><FontAwesomeIcon icon={faCheck} className='custom-circle-icon'/><span className='quality4'>User-Friendly Mobile Apps</span></p>
                    <Link className='now-btn' to='/products' onClick={fetchData} style={{textDecoration:'none'}}>Order Now</Link>
                </div>

            </div>

        </section>
  )
}
