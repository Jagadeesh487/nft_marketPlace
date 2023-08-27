import React from 'react'
import Style from '../styles/searchPage.module.css'
import {Slider, Brand} from '../components/components_index'
import { SearchBar } from '../searchPage/searchPageindex'
import {Filter} from '../components/components_index'
import {NFTCardTwo, Banner} from '../collectionPage/collectionindex'
import images from '../img'

const searchPage = () => {
    const collectionArray = [
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
        images.nft_image_2,
    ]
  return (
    <div className = {Style.searchPage}>
        <Banner bannerImage={images.creatorbackground3}/>
        <SearchBar/>
        <Filter/>        
        <NFTCardTwo NFTData={collectionArray}/>
        <Slider/>
        <Brand/>
    </div>
  )
}

export default searchPage