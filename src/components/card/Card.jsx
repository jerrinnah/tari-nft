import React from 'react'
import './card.css'
import FoxIcon from '../../assets/fox-icon.png'



function Card() {
  return (
    <div className="tari__card-container">
    <div className='tari__card-item'>

      <div className="tari__icon-container">
        <img src={FoxIcon} alt="" />

        <p className="tari__card-title">
        Alpha Wallet
      </p>
       
      </div>

    </div>
    </div>
  )
}
export default Card
