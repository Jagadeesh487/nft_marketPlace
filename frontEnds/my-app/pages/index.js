import React from 'react';

// internal import
import Style from '../styles/index.module.css';
import { 
  HeroSection,
  Service,
  BigNFTSlider,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  DayComponets,
  Collection
} from "../components/components_index"

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection/>
      <Service/>
      <BigNFTSlider/>
      <Collection/>
      <Title 
      heading="Featured NFT's"
      paragraph="Discover the most outstanding NFTs in all topics of life"/>
      <Filter/>
      <NFTCard/>
      <Title 
      heading="Browse by category"
      paragraph="Explore the NFTs in the most features categaries"/>
      <Category/>
      <Subscribe/>
    </div>
  )
}

export default Home;