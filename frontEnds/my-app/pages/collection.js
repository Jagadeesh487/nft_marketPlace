import React from 'react'
import Style from './collection.module.css'
import images from '../img'
import { Banner, CollectionProfile } from '../collectionPage/collectionindex'
import  {Slider, Brand} from '../components/components_index'
import Filter from '../components/Filter/Filter'

const collection = () => {
  return (
    <div className={Style.collection}>
        <Banner bannerImage = {images.creatorbackground1}/>
        <CollectionProfile />
        <Filter/>
    </div>    
  )
}

export default collection