import React from 'react'
import {Link} from 'react-router-dom'


export default function FirstSection({fetchData}) {
    
  return (
    <section className='first-section'>
            <div className='container custom-container'>
                <div className='part1'>
                    <p className='heading'>Make Healthy life with <span className='heading-focus'>Fresh Grocery</span> Product <img src="images/ful_kopi_icon.png" className='ful-ghobi '/></p>
                    <p className='description'>Get the best quality and most delicious grocery food in the world, you can get them our website. Fresh grocery every day to your family.</p>
                    <Link to='/products' className='now-btn' onClick={fetchData} style={{textDecoration:'none'}}>Shop Now</Link>
                </div>
                <div className='part2'>
                    <img src="images/hero_customer.png" className='section-part-image'/>
                </div>
            </div>
        </section>
  )
}
