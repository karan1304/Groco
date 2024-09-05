import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart({fetchData}) {
  return (
    <section className='cart-section'>
        <div className='container custom-container ' style={{height:'100vh'}}>
            <div className='cart-message text-center p-4'>
                <h6 className='mb-4'style={{color:'rgba(0,0,0,0.5)'}}>There are no items in this cart</h6>
                <Link to="/products" onClick={fetchData} className='view-all' style={{textDecoration:'none', cursor:'pointer'}}>Continue Shopping</Link>
            </div>
        </div>
    </section>
  )
}
