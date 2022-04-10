import React, { useState } from 'react'
import { RiMenuLine, RiCloseLine, RiMenu3Line } from 'react-icons/ri'
import logo from '../../assets/logos/tari logo white.png'

import './navbar.css'

const Menu = () => (
  <>
    <p>
      <a href="#Home">Home</a>
    </p>
    <p>
      <a href="#categories">Marketplace</a>
    </p>
    <p>
      <a href="#collections">Resources</a>
    </p>
    <p>
      <a href="#Moudules">Moudules</a>
    </p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="tari__navbar">
      <div className="tari__navbar-links">
        <div className="tari__navbar-links_logo">
          <img
            className="tari__navbar-links_logo_image"
            src={logo}
            alt="logo"
          />
        </div>
        <div className="tari__navbar-links_container">
          <Menu />
        </div>
        <div className="tari__navbar-buttons">
          <button className="tari__wallet-button">Connect Wallet</button>
          <p>
            <a className="tari__wallet-sign-in" href="#Login">
              Login
            </a>
          </p>
        </div>
        <div className="tari__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={20}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={20}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="tari__navbar-menu_container scale-up-center">
              <div className="tari__navbar-menu_container-links">
                <Menu />
                <p>
                  <a className="" href="#Login">
                    Login here
                  </a>
                </p>
                <button className="tari__menu_container-btn">
                  Connect Wallet
                </button>
                

              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
