import React from 'react'

export default function SixthSection() {
  return (
    <section className='sixth-section'>

    <div className="container custom-container">

        <div className='part1'>
            <img src='images/mobile.png' alt="premium_Quality" className='section-part-image'/>
        </div>
        <div className='part2 p-3'>
            <h1 className='heading3'>Download Our Grocery Mobile App And Save Time, Money</h1>
            <p className='section-tagline'>Our grocery mobile app makes it easy to shop for groceries on the go.You can browse our selection of products, create a shopping list, and order groceries for pickup or delivery.</p>
            <div className='download-btn-grp'>
                <button className='apple download'><img src="images/apple.png" className='m-dwn'/></button>
                <button className='playstore download'><img src="images/playstore.png" className='m-dwn'/></button>
            </div>
        </div>
        


    </div>

</section>
  )
}
