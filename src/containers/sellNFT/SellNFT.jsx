import React from 'react'
import './sellNFT.css'
import { Button } from '../../components'
import Slide from '../../assets/flow.png'

const SellNFT = () => {
  return (
    <div className="tari__sellnft section__padding ">
      <div className="tari__sellnft_img-container">
        <img src={Slide} alt="" />
      </div>
      <div className='tari__nft_text-container'>
        <h1>Create and sell your NFTs</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
          adipisci libero cum eveniet accusamus necessitatibus reiciendis rerum
          distinctio architecto debitis, unde id natus repudiandae laudantium
          tenetur fuga suscipit! Odit, alias.
        </p>
        <Button 
         >Sign Up Now</Button>
      </div>
    </div>
  )
}

export default SellNFT
