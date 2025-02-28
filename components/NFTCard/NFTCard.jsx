import React, {useState} from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsImage } from 'react-icons/bs';
import Image from 'next/image';

import Style from './NFTCard.module.css';
import images from '../../img';

const NFTCard = () => {
    const featureArray = [
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
    ];
    const [like, setLike] = useState(true);
    const likeNft = () => {
        if(!like){
            setLike(true);
        }else{
            setLike(false);
        }
    };

  return (
    <div className={Style.NFTCard}>
        {featureArray.map((el, i) => (
            <div className = {Style.NFTCard_box} key = {i + 1}>
                <div className={Style.NFTCard_box_img}>
                    <Image
                    src={el}
                    alt='NFT images'
                    width={300}
                    height={300}
                    className= {Style.NFTCard_box_img_img}
                    />
                </div>
                <div className = {Style.NFTCard_box_update}>
                    <div className = {Style.NFTCard_box_update_left}>
                        <div className = {Style.NFTCard_box_update_left_like}
                        onClick={() => likeNft()}
                        >
                            {like ? (<AiOutlineHeart/>) : (<AiFillHeart
                            className={Style.NFTCard_box_update_left_like_icon}/>)}
                            {""}22
                        </div>
                    </div>

                    <div className={Style.NFTCard_box_update_right}>
                        <div className={Style.NFTCard_box_update_right_info}>
                            <small>Remaining time</small>
                            <p>2h : 15m : 20s</p>
                        </div>
                    </div>
                </div>

                <div className={Style.NFTCard_box_update_details}>
                    <div className={Style.NFTCard_box_update_details_price}>
                        <div className={Style.NFTCard_box_update_details_price_box}>
                            <h4>Clone #1234</h4>
                            <div className={Style.NFTCard_box_update_details_price_box_box}>
                                <div className={Style.NFTCard_box_update_details_price_box_bid}>
                                    <small>Current bid</small>
                                    <p>0.001ETH</p>
                                </div>
                                <div className={Style.NFTCard_box_update_details_price_box_stock}>
                                    <small>61 in stock</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={Style.NFTCard_box_update_details_category}>
                        <BsImage/>
                    </div>

                </div>
            </div>
        ))}
    </div>
  )
}

export default NFTCard