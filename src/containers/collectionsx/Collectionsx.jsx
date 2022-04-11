import React from 'react'
import Placard from '../../components/placard/Placard'
import Art7 from '../../assets/Art7.jpg'
import Art6 from '../../assets/Art6.jpg'
import  Art8 from '../../assets/Art8.jpg'
import  Art9 from '../../assets/Art9.jpg'
import  Art10 from '../../assets/Art10.jpg'
import "./collectionsx.css"

const Collectionsx = () => {
  return (

    <div>
      <div className='tari__categories_nft ' >
        <div className='tari__categories-title'>
          <h1>NFTs Collections X</h1>
        </div>
        <div>
          
        </div>

      </div>
     <div className="tari__categories-container section__padding ">
      <Placard img={Art6} title="The Halo" />
      <Placard img={Art7} title="The War" />
      <Placard img={Art8} title="The Hippo" />
      <Placard img={Art9} title="The RockStar" />
    
      
      </div>
    </div>
  )
}

export default Collectionsx
