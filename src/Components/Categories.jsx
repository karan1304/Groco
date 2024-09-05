import React from 'react'
import Card from './Card'

export default function Categories({fetchData}) {
  return (
    <section className='popular-categories' style={{backgroundColor:'rgb(243, 246, 248,0.7)'}}>
            <div className='container p-4'>
                <div className='heading-container'>
                    <h3 className=''>All Categories</h3>
                </div>
                <div className='card-container'>

                    
                    <Card image_url='images/vagetable.png' cate_name="vegetable" bgColor='rgb(245, 245, 245)' fetchData={fetchData}/>
                    <Card image_url='images/fruits.png' cate_name="fruit" bgColor='rgb(234, 245, 227)' fetchData={fetchData}/>
                    <Card image_url='images/dairy.png' cate_name="dairy" bgColor='rgb(234, 244, 244)' fetchData={fetchData}/>
                    <Card image_url='images/bakery.png' cate_name="bakery" bgColor='rgb(250, 249, 215)' fetchData={fetchData}/>

                </div>
            </div>
        </section>
  )
}
