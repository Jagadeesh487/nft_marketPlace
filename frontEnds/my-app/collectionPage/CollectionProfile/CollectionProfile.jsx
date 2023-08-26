import React from 'react'
import Image from "next/image";
import Style from './CollectionProfile.module.css'
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
} from 'react-icons/ti';
import images from '../../img'

const CollectionProfile = () => {
  const cardArray = [1,2,3,4]
  return (
    <div className = {Style.collectionProfile}>
      <div className={Style.collectionProfile_box}>
        <div className={Style.collectionProfile_box_left}>
           <Image 
           src = {images.nft_image_2}
           alt = "nft image"
           width = {300}
           height = {300}
           className = {Style.collectionProfile_box_left_img}
           />
          <div className = {Style.collectionProfile_box_left_social}>
            <a href="#">
            <TiSocialFacebook/>
            </a>
            <a href="#">
            <TiSocialInstagram/>
            </a>
            <a href="#">
            <TiSocialLinkedin/>
            </a>
            <a href="#">
            <TiSocialTwitter/>
            </a>            
          </div>
        </div>
        
        <div className={Style.collectionProfile_box_middle}>
          <h1>Awesome NFT's Collection</h1>
          <p>Karafuru is home to 5.55 generative arts where colous regin supreme. Leave the 
              grab reality and enter the worls of Karafuru by Museum of Toys.
          </p>
          <div className={Style.collectionProfile_box_middle_box}>
            {cardArray.map((el, i)=>(
              <div className={Style.collectionProfile_box_middle_box_item} key={i+1}>
                <small>Floor Price</small>
                <p>${i+1}95,4683</p>
                <span>+{i+2}.11%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionProfile