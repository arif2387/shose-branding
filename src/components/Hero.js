import React from 'react'

const Herosection = () => {
  return (
    <div className='hero container  ' >
      <div className='hero-content' >
       <h1>YOUR FEET DESERVE THE BEST</h1>
       <p>
       Nike shoes are renowned for their innovative design, exceptional comfort, and superior performance. Engineered with cutting-edge technology, Nike footwear provides unparalleled support for athletes and casual wearers alike
       </p>
       <div className='hero-btn' >
        <button>Shop Now</button>
        <button className='secondery-btn'  >Category</button>
       </div>
       <div  className='shopping'>
        <p>Also Available on</p>
        {/* <div className='brand-icones' >
          <img src="/images/brand " alt="logo"/>
          <img src="/images/brand " alt="logo"/>
        </div> */}

       </div>
      </div>
      <div className='hero-image' >
        <img src ="/images/images.jpeg"/>


      </div>
      
    </div>
  )
}

export default Herosection;
