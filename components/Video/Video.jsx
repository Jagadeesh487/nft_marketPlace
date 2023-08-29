import React from 'react'
import Style from './Video.module.css'
import Image from "next/image";
import images from '../../img';
 

const Video = () => {
  return (
    <div className={Style.Video}>
      <div className={Style.Video_box}>
        <h1>
          <span>VIDEO PNG</span>
          The Videos
        </h1>
        <p>
          Check out our hottest videos. View more and share more new perspectives
          on just about any topic. Everyone's welcome.
        </p>
  
      </div>
      <div className={Style.Video_box_frame}>
          <div className={Style.Video_box_frame_left}>
            <Image 
            src = {images.NFTVideo}
            alt="Video Image"
            width = {1080}
            height = {720}
            objectFit = "Cover"
            className={Style.Video_box_frame_left_img}
            />
          </div>
          <div className={Style.Video_box_frame_right}>Hey</div>
        </div>
    </div>
  )
}

export default Video