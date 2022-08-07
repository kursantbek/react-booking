import React from 'react'
import './searchitem.css'

export default function SearchItem() {
  return (
    <div className='searchItem'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square200/90272909.webp?k=dcd4701abf291dc6a6e795b2384ca2ac91a6c32900bd488a2e41d8cf24bc89ee&o=&s=1"
        className="siImg" />
        <div className="siDesc">
            <h1 className='siTitle'>Hotel Lulu</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
                Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
                Entire studio * 1 bathroom * 21 in 1 full bed
            </span>
            <span className="siCanceOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">
                You can cancel later,so lock in this great price today!
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <sapn className="siPrice">$123</sapn>
                <sapn className="siTaxOp">Includes taxes and fees</sapn>
                <button className="siCheckButton">See availability</button>
            </div>
        </div>
    </div>
  )
}
 