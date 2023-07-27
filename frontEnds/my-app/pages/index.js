import React from 'react';

// internal import
import Style from '../styles/index.module.css';
import { HeroSection, Service, BigNFTSlider, Subscribe} from "../components/components_index"

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection/>
      <Service/>
      <Subscribe/>
      <BigNFTSlider/>
    </div>
  )
}

export default Home;