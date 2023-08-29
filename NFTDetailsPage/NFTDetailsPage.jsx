import React from 'react'
import {NFTDescription, NFTDetailsImage, NFTTabs} from '../NFTDetailsPage/NFTDetailsindex'
import Style from './NFTDetailsPage.module.css'

const NFTDetailsPage = () => {
  return (
    <div className = {Style.NFTDetailsPage}>
        <div className = {Style.NFTDetailsPage_box}>
            <NFTDetailsImage/>
            <NFTDescription/>
        </div>
    </div>
  )
}

export default NFTDetailsPage