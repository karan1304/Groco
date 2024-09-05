import React from 'react';
import Card2 from './Card2';

export default function Categorie({category_name,products}) {
  return (
    <section className='categorie' style={{backgroundColor:'rgb(243, 246, 248,0.7)'}}>
            <div className='container p-4'>
                <div className='heading-container'>
                    <h1 className=''>{category_name}</h1>
                </div>
                <div className='card-container'>

                    {products.map((product)=><Card2 key={product.id} product={product}/>)}

                </div>
            </div>
        </section>
  )
}
