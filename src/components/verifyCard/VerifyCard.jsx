import React from 'react'
import './verifyCard.css'
import Avi from '../../assets/avi.jpg'
import EthIcon from '../../assets/eth-icon.png'
import Verify from '../../assets/verify.png'

const VerifyCard = (props) => {
  return (
    <div className="tari__verify">
      <div>
        <img src="" alt="" />
      </div>
      <div className="tari__text_container">
        <div className="tari__avi-container">
          <img className="tari__verify-icon-png" src={Verify} alt="" />
          <img className="tari__verify-icon-image" src={Avi} alt="" />
        </div>
        <div className="tari__username_container">
          <h2>CryptoFunks</h2>
          <div className="tari__coin_container">
            <img className="tari__coin_container-icon" src={EthIcon} alt="" />
            <h4>19.23445</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyCard
