import React from "react";
import "./App.css";

import {
  Hero,
  Explore,
  Categories,
  Collectionsx,
  Tags,
  TopSeller,
  NftAd,
  Footer,
} from "./containers";

import { Navbar,HeroSection, Feature, Cta, FooterSection, Button} from './components'


function App() {
  return (
    <div className="App">
      {/* <h1 style={{color: 'white'}}>hola</h1> */}
      <div className="gradient__bg">
        <Navbar/>
      </div>
      <Hero />
      <Explore />
      <Categories />
      <Collectionsx />
      {/* <Tags /> */}
      <TopSeller />
      <NftAd />
      <Footer />
    </div>
  );
}

export default App;
