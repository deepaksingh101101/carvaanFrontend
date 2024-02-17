import React from 'react'
import offer1 from '../../assets/offer/offer1.png'
import offer2 from '../../assets/offer/offer2.png'
import offer3 from '../../assets/offer/offer3.png'
import offer4 from '../../assets/offer/offer4.png'
export default function Offer() {
  return (
    <div className="container">
        <div className="row">
            
            <img className='col-lg-6' src={offer1}  alt='offer1'/>
            <img className='col-lg-6' src={offer2}  alt='offer1'/>
         
            
            <img className='col-lg-6' src={offer3}  alt='offer1'/>
            <img className='col-lg-6' src={offer4}  alt='offer1'/>
            
        </div>
    </div>
  )
}
