import React,{useState, useEffect, useContext} from 'react';
import Image from 'next/image';

//internal import
import Style from './HeroSection.module.css';
import {Button} from '../components_index';
import images from '../../img';

// sm inport
import {NFTMarketplaceContext} from '../../context/NFTMarketplaceContext';


const HeroSection = () => {
  const {titleData} = useContext(NFTMarketplaceContext);
  return (
    <div className={Style.herosection}>
      <div className={Style.herosection_box}>
        <div className={Style.herosection_box_left}>
          <h1>{titleData}🖼️</h1>
          <p>Discover the most outstanding NFT's inall topics of life.
             Create your NFT's and sell them...
          </p>
          <Button btnName= 'Start your search'/>
        </div>
        <div className={Style.heroSection_box_right}>
          <Image src={images.hero} alt="Hero Section" width={600} height={600}/>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;