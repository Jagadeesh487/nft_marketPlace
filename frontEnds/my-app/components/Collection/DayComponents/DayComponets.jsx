import React from 'react'
import Image from "next/image";
import {MdVerified} from 'react-icons/md';

import Style from './DayComponets.module.css';
import images from '../../../img';

const DayComponets = ({el, i}) => {
  return (
    <div className={Style.daysComponent}>
      <div className={Style.daysComponent_box}>
        <div className={Style.daysComponent_box_img}>
          <Image src={el.background}
          className={Style.daysComponent_box_img_img}
          alt="profile background"
          width={300}
          height={150}
          objectFit='covers'
          />
        </div>

        <div className={Style.daysComponent_box_profile}>
          <Image
          src={images.creatorbackground2}
          alt="profile"
          width={100}
          height={100}          
          objectFit='covers'
          className={Style.daysComponent_box_img_1}
          />
        
          <Image
          src={images.creatorbackground2}
          alt="profile"
          width={100}
          height={100}
          objectFit='covers'
          className={Style.daysComponent_box_img_2}
          />
        
          <Image
          src={images.creatorbackground2}
          alt="profile"
          width={100}
          height={100}
          objectFit='covers'
          className={Style.daysComponent_box_img_3}
          />
        </div>

        <div className={Style.daysComponent_box_title}>
          <h2>Amazing Collection</h2>
          <div className={Style.daysComponent_box_title_info}>
            <div className={Style.daysComponent_box_title_info_profile}>
              <Image
              src={el.user}
              alt="profile"
              width={30}
              height={30}
              objectFit="covers"
              className={Style.daysComponent_box_title_info_profile_img}
              />
              <p>
              Creator
              <span>
                Shoaib bhai 
                <small>
                <MdVerified/>
                </small> 
              </span>
              </p>
            </div>
            <div className={Style.daysComponent_box_title_info_price}>
            <small>1.255 Eth</small>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default DayComponets;