import React from 'react'
// import Card from './Card'

import FirstSection from './FirstSection';
import PopularCategories from './PopularCategories';
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';
import FifthSection from './FifthSection';
import SixthSection from './SixthSection';


export default function Main({fetchData, products}) {
    const slides = ["Slide 1", "Slide 2", "Slide 3"];
  return (
    <main className="main">
        <FirstSection fetchData={fetchData}/>

        <PopularCategories fetchData={fetchData}/>

        <ThirdSection fetchData={fetchData}/>

        <FourthSection fetchData={fetchData} products={products}/>

        <FifthSection/>

       <SixthSection/>
      
       
    </main>
  )
}
