import React from 'react'
import Art from '../../assets/art1.jpg'
import './placard.css'

function Placard(props) {
  return (
    <div className="tari__placard-container">
      <div className="tari__placard-image">
        <img src={props.img} alt="" />
      </div>
      <div className='tari__placard-info'>
      <div className="tari__placard_details">
        <p>{props.title}</p>
        <p>Icon</p>
      </div>
      <div className='tari__placard-avi-section'>
        <div className="tari__placard_details-avi">
          <img src={Art} alt="" />
         <div className='tari__avi-text'>
         <h5>Vigor Dance</h5> 
         <p>@fancy</p></div>
        </div>
        <div>
          <p>Current Bid</p>
          <p>0.78ETH</p>
        </div>
      </div>
      </div>
    </div>
  )
}
export default Placard
