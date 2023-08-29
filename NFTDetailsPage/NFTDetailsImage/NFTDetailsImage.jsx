import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import { BsImage } from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import Style from './NFTDetailsImage.module.css'
import images from '../../img'

const NFTDetailsImage = () => {
  const [description, setDescription] = useState(true);
  const [details, setDetails] = useState(true)
  const [like, setLike] = useState(false)

  const openDescription = () => {
    if(!description){
      setDescription(true);
    }
    else{
      setDescription(false)
    }
  }

  const openDetails = () => {
    if(!details){
      setDetails(true);
    }
    else{
      setDetails(false)
    }
  }

  const likeNFT = () => {
    if(!details){
      setLike(true);
    }
    else{
      setLike(false)
    }
  }

  return (
    <div className = {Style.NFTDeatilsImg}>
      <div  className = {Style.NFTDeatilsImg_box}>
        <div className = {Style.NFTDeatilsImg_box_NFT}>
          <div className = {Style.NFTDeatilsImg_box_NFT_like}>
            <BsImage className={Style.NFTDeatilsImg_box_NFT_like_icon}/>
            <p onClick = {() => likeNFT()}>
              {like ? (
                <AiOutlineHeart classname={Style.NFTDeatilsImg_box_NFT_like_icon}/>
              ):(
                <AiFillHeart classname={Style.NFTDeatilsImg_box_NFT_like_icon}/>
              )}
              <span>23</span>
            </p>
          </div>
          <div className = {Style.NFTDeatilsImg_box_NFT_img}>
            <Image src = {images.nft_image_1} 
            className = {Style.NFTDeatilsImg_box_NFT_img_img}
            alt='NFT image'
            width = {400}
            height = {400}
            objectFit='Cover'/>
          </div>
        </div>


        <div className = {Style.NFTDeatilsImg_box_description}
        onClick={() => openDescription()}>
          <p>Description</p>
          {description ? <TiArrowSortedUp/> : <TiArrowSortedDown/>}
        </div>
        {description && (
          <div className={Style.NFTDeatilsImg_box_description_box}>
            <p>
              Tattoated KItty Gand("IKG") is a collection of 666 badass kitty gangsters,
              with symbol of tattos, living in the Pround Kitty Gang("PKG") metaversee.
              Each TKG is on 1/1 ID as gangster memn=ber & all the joint rights.
            </p>
          </div>
        )}


        <div className = {Style.NFTDeatilsImg_box_details}
        onClick = {() => openDetails()}>
          <p>Details</p>
          {details ? <TiArrowSortedUp/> : <TiArrowSortedDown/>}
        </div>

        {details && (
          <div classname={Style.NFTDeatilsImg_box_details_box}>
          <small>2000 x 2000 px.IMAGE(685KB)</small>
          <p>
            <small>Contract Address</small>
            <br />
            0xiue87qo4na8anl8eo398aofn9830qr8j
          </p>
          <p>
            <small>Token ID</small>
            367187379232
          </p>
        </div>
        )}  
      </div>      
    </div>
  )
}

export default NFTDetailsImage