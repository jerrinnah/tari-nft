import React from 'react';
import './hero.css';
import Button from '../../components/button/Button'
import HeroLogo from '../../assets/tari-mkt.png'

const  Hero = () => {
  return (
    <div className='tari__hero section__padding'>
      <div className='tari__text-container'> <h1>
        Completely impact NFT-Metavars
        Word resources
         
      </h1>
      <p>TariNft brings to th</p>
      <div className='tari__button-container'>
      <Button className="btn" onClick={() => {console.log("You Clicked Me")}}
      type="button"
      buttonStyle="btn--primary--solid"
      >Explore</Button>
      <Button  className="btn" type="button"
      buttonStyle="btn--white--outline"
      buttonSize="btn--large"
      >Upload</Button>
      </div>
      </div>
      
      
      <div className='tari__image-container'>
        <img src={HeroLogo} alt="Hero logo" />
      </div>

    </div>
  )
}

export default Hero