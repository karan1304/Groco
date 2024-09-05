import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Card({image_url, cate_name, bgColor,fetchData}) {
  const navigate = useNavigate();
  const handleCategory = ()=>
  {
    fetchData(cate_name);
    navigate(`/category/${cate_name}`);
  }
  return (
    
    <div className="card custom-card " style={{width: "13rem" }}  onClick={handleCategory}>
        <img src={image_url} className="card-img-top custom-card-img" alt="..." style={{backgroundColor:`${bgColor}`}}/>
        <div className="card-body text-center" style={{backgroundColor:`${bgColor}`}}>
            <h5 className="card-title">{cate_name}</h5>
            <p className="card-text">(4 items)</p>
        </div>
    </div>
    
    
  )
}
