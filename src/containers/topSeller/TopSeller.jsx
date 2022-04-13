import React from 'react';
import './topSeller.css';
import VerifyCard from '../../components/verifyCard/VerifyCard';

const TopSeller = () => {
  return (
    <>
    <div className='tari__topSeller section__padding'>
        <div className='tari__verify_container'>
        <VerifyCard/>
        <VerifyCard/>
        <VerifyCard/>
        <VerifyCard/>
        <VerifyCard/>
        <VerifyCard/>
        <VerifyCard/>
        <VerifyCard/>
        </div>

    </div>
  
    </>
  )
}

export default TopSeller

