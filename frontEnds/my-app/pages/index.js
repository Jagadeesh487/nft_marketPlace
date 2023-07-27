import React from 'react';

// internal import
import Style from '../styles/index.module.css';
import { HeroSection, Service, BigNFTSlider, Subscribe, Title, Category} from "../components/components_index"

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection/>
      <Service/>
      <Title 
      heading="Browse by category"
      paragraph="Explore the NFTs in the most features categaries"/>
      <Category/>
      <Subscribe/>
      <BigNFTSlider/>
    </div>
  )
}

export default Home;