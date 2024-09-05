import React, { useEffect, useState } from 'react'
import Card2 from './Card2'

export default function AllProducts({products}) {

  return (
    <section className='All-products' style={{backgroundColor:'rgb(243, 246, 248,0.7)'}}>
            <div className='container p-4'>
                <div className='heading-container'>
                    <h3 className=''>All Products</h3>
                </div>
                <div className='card-container'>

                    {products.map((product)=><Card2 key={product.id} product={product}/>)}

                </div>
            </div>
        </section>
  )
}
