import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='tari__footer_container section__padding '>
      <div className='tari__site_details'>
        <img src="" alt="" />
        <p className='tari__info_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, aspernatur excepturi dignissimos doloribus provident maiores ut. Ratione corrupti est quaerat? In ducimus iure magni quos sit ullam a optio maiores!</p>

      </div>

      <div className=''>
        <h1>Resources</h1>
        <ul>
          <li>Explore</li>
          <li>Featured Collections</li>
          <li>How it works</li>
          <li>Top Sellers</li>
          <li>Featured Arts</li>
        </ul>
      </div>
      <div>
      <h1>Marketplace</h1>
        <ul>
          <li>All NFTs</li>
          <li>Art</li>
          <li>Collectibles</li>
          <li>TBD</li>
          <li>Coming Soon</li>
        </ul>
      </div>
      <div>
      <h1>Modules</h1>
        <ul>
          <li>Users</li>
          <li>Creators</li>
          <li>Admin</li>
          <li>Landing Pages</li>
          <li>Subscribe</li>
        </ul>
      </div>
      <div>
        <h1>Get the latest updates</h1>
        <input type="text" />
      </div>
    </div>
  )
}

export default Footer