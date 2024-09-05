import React from 'react'

export default function Card2({product}) {
  return (
    <div className="card custom-card2" style={{width: "14rem" }}>
        <img src={product.image} className="card-img-top card2-custom-image"  style={{width:'11rem'}}/>
        <div className="card-body text-center">
            <h5 className="card-title text-center fs-4">{product.name}</h5>
            <p className="card-text wp-details text-center"><span className='wght mx-4 basic'>{`${product.quantity} kg`}</span><span className='price basic'>{`$ ${product.price} USD`}</span></p>
            <button className='cart-btn'>Add To Cart</button>
        </div>
    </div>
  )
}
