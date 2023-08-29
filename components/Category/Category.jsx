import React from 'react';
import Image from 'next/image';
import {BsCircleFill} from 'react-icons/bs';

import Style from './Category.module.css'
import images from '../../img'
const Category = () => {
    const FollowingArray = [
        images.creatorbackground1,
        images.creatorbackground10,
        images.creatorbackground9,
        images.creatorbackground7,
        images.creatorbackground6,
        images.creatorbackground11,

    ]
  return (
    <div className={Style.box_catagory}>
        <div className={Style.catagory}>
        {FollowingArray.map((el,i)=>(
            <div className = {Style.category_box} key={1+1}>
                <Image
                src={el}
                className={Style.category_box_img}
                alt="background image"
                width = {350}
                height = {150}
                objectFit='cover'
                />

                <div className={Style.category_box_title}>
                    <span>
                        <BsCircleFill/>
                    </span>
                    <div className={Style.category_box_title_info}>
                        <h4>Enterainment</h4>
                        <small>1995 NFT's</small>
                    </div>
                </div>
            </div>
        ))}
        </div>
    </div>
    
  )
}

export default Category