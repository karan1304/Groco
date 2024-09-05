import React, { useEffect, useState } from 'react';
import Card2 from './Card2';
import { Link } from 'react-router-dom';
import Loading from './Loading';

export default function FourthSection({fetchData , products}) {
  const [clsactive , setClsActive] = useState('vegetable');
      
    useEffect(
      ()=>
      {
        fetchData('vegetable');
      },
      []
    )
      const handleOnClick = (temp)=>
      {
        fetchData(temp)
        setClsActive(temp);
        
      }
  return (
    <section className='fourth-section'>
            <div className='container p-4 text-center'>
                <h1 className='section-heading'>Enjoy Our Healthy And FreshGrocery Items</h1>
                <div className='cat-btn-group'>
                    <button className={`categ vegetable ${clsactive==='vegetable'?'active':''}`} onClick={()=>handleOnClick('vegetable')}>Vegetable</button>
                    <button className={`categ fruit ${clsactive==='fruit'?'active':''}`} onClick={()=>handleOnClick('fruit')}>Fruit</button>
                    <button className={`categ dairy ${clsactive==='dairy'?'active':''}`} onClick={()=>handleOnClick('dairy')}>Dairy</button>
                </div>
                {products.length===0 ? <Loading/>:<div className='card-container'>
                <Card2 product={products[0]}/>
                <Card2 product={products[1]}/>
                <Card2 product={products[2]}/>
                </div>}
                <Link to='/products' style={{textDecoration:'none'}} className='view-all' onClick={fetchData}>View All Products</Link>
            </div>
        </section>
  )
}
