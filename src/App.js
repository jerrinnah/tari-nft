import React from "react";
import "./App.css";

import {
  Header,
  Hero,
  Explore,
  Categories,
  // Collections,
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
      <div className="gradient__bg">
        <Navbar/>
      </div>
      <Hero />
      <Explore />
      <Categories />
      <Collectionsx />
      <Tags />
      <TopSeller />
      <NftAd />
      <Footer />
    </div>
  );
}

export default App;
