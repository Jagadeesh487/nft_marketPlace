import React from 'react'
import Style from '../styles/uploadNFT.module.css'

import { UplaodNFT } from '@/uploadNFT/uploadNFTIndex'

const uploadNFT = () => {
  return (
    <div className = {Style.uploadNFT}>
      <div className={Style.uploadNFT_box}>
        <div className = {Style.uploadNFT_box_heading}>
          <h1>Create New NFT</h1>
          <p>You can set preferred display name, create your profile URl and manage other personal settings.</p>
        </div>

        <div className = {Style.uploadNFT_box_title}>
          <h2>Image, Video or 3D Model</h2>     
          <p>File types supported: JPG, PNG, GIF, SVG, MP$, WEBM, MP#, WAV, OGG, GLB, GLTF. MAX SIZE: 100MB</p>    
        </div>

        <div className = {Style.uploadNFT_box_form}>
          <UplaodNFT/>
        </div>
      </div>
    </div>
  )
}

export default uploadNFT