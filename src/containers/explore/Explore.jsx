import React from 'react'
import Button from '../../components/button/Button'
import Card from '../../components/card/Card'
import './explore.css'

const Explore = () => {
  return (
    <div className="tari__explore_container">
      <div className="tari__explore_text-container">
        <h1>Explore Items</h1>
       <Button 
       type='button'
       className='btn'
       buttonStyle="btn--theme--solid"
       buttonSize="btn--large"
       >Wallet</Button>
      </div>
      <div className='tari__cards_container-items'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        

      </div>
    </div>
  )
}

export default Explore
