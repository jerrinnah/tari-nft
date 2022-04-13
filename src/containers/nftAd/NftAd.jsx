import React from 'react'
import './nftAd.css'
import Tag from '../../components/tags/Tag'
import FoxIcon from '../../assets/fox-icon.png'

const NftAd = () => {
  return (
    <div className="tari__ad-container section__padding">
      <div>
        <h2 className="tari__ad_title">
          Easy Steps to Create and Sell your NFT
        </h2>
      </div>
      <div className="tari__tag_container">
        <Tag
          className="tag"
          src={FoxIcon}
          tagTitle="Alpha Wallet"
          info="Dramatially strategize turnkey vis-a vis optimal manufactured products vis-a-vis timely strategy."
        />

        <Tag
         className="tag"
          src={FoxIcon}
          tagTitle="Collection"
          info="Dramatially strategize turnkey vis-a vis optimal manufactured products vis-a-vis timely strategy."
        />

        <Tag
         className="tag"
          src={FoxIcon}
          tagTitle="Art NFT"
          info="Dramatially strategize turnkey vis-a vis optimal manufactured products vis-a-vis timely strategy."
        />

        <Tag
         className="tag"
          src={FoxIcon}
          tagTitle="List Items"
          info="Dramatially strategize turnkey vis-a vis optimal manufactured products vis-a-vis timely strategy."
        />
      </div>
    </div>
  )
}

export default NftAd
