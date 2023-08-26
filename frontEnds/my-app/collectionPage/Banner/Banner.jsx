import React from 'react'
import Image from "next/image"
import Style from './Banner.module.css'

const Banner = ({bannerImage}) => {
  return (
    <div className = {Style.banner}>
        <div className = {Style.banner_img}>
            <Image
            src = {bannerImage}
            objectFit='cover'
            alt='background'
            width={1352}
            height={300} //this is for desktop devices
            /> 
        </div>

        <div className = {Style.banner_img_mobile}>
        <Image
            src = {bannerImage}
            objectFit='cover'
            alt='background'
            width={1600}
            height={900} //this is for mobile devices
            />
        </div>
    </div>
  )
}

export default Banner