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
          Check out our hottest videos. View more and share morw new perspectives
           on just about any topic. Everyone's welcome.
        </p>
        <div className={Style.Video_box_frame}>
          <div className={Style.Video_box_frame_left}>
            <Image/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video