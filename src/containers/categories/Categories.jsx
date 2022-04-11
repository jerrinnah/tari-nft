import React from 'react'
// import { Button } from '../../components'
import Placard from '../../components/placard/Placard'
import Art2 from '../../components/art2b.jpg'
import Art1 from '../../assets/art1.jpg'
import  Art3 from '../../assets/Art3.jpg'
import  Art4 from '../../assets/Art4.jpg'
import  Art5 from '../../assets/Art5.jpg'
import "./categories.css"

const Categories = () => {
  return (

    <div>
      <div className='tari__categories_nft ' >
        <div className='tari__categories-title'>
          <h1>NFTs Categories</h1>
        </div>
        <div>
          
        
        </div>

      </div>
     <div className="tari__categories-container section__padding ">
      <Placard img={Art1} title="The Halo" />
      <Placard img={Art2} title="The War" />
      <Placard img={Art3} title="The Hippo" />
      <Placard img={Art4} title="The RockStar" />
      
      
      </div>
    </div>
  )
}

export default Categories
