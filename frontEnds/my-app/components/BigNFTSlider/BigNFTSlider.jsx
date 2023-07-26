import React, {useState, useEffect, useCallback} from 'react'
import Image from 'next/image';
import {AiFillFire, AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import {MdVerified, MdTimer} from 'react-icons/md';
import {TbArrowBigLeftLine, TbArrowBigLeftLines, TbArrowBigRightLine, TbArrowBigRightLines} from 'react-icons/tb';


// internal import
import Style from './BigNFTSlider.module.css';
import images from '../../img';
import Button from '../Button/Button';


const BigNFTSlider = () => {
    const [IdNumber, setIdNumber] = useState(1);
    const sliderData = [
        {
            title: "Hello NFT",
            id: 1,
            name: "Daulat Hussain",
            collection: "GYm",
            price: "00000064664 ETH",
            like: 243,
            image: images.user1,
            nftImage: images.nft_image_1,
            time:{
                days: 27,
                hours: 10,
                minutes: 11,
                seconds: 35,
            },
        },
        {
            title: "Buddy NFT",
            id: 2,
            name: "Shoaib Hussain",
            collection: "Home",
            price: "00000064664 ETH",
            like: 43,
            image: images.user2,
            nftImage: images.nft_image_2,
            time:{
                days: 127,
                hours: 21,
                minutes: 46,
                seconds: 54,
            },
        },
        {
            title: "Gym NFT",
            id: 3,
            name: "Raayan Hussain",
            collection: "GYm",
            price: "00000064664 ETH",
            like: 34,
            image: images.user3,
            nftImage: images.nft_image_3,
            time:{
                days: 45,
                hours: 23,
                minutes: 32,
                seconds: 60,
            },
        },
        {
            title: "Hello NFT",
            id: 4,
            name: "Daulat Hussain",
            collection: "GYm",
            price: "00000064664 ETH",
            like: 673,
            image: images.user4,
            nftImage: images.nft_image_1,
            time:{
                days: 13,
                hours: 1,
                minutes: 17,
                seconds: 15,
            },
        }
    ];

    // increment function
    const inc = useCallback(()=>{
        if(IdNumber+1<sliderData.length){
            setIdNumber(IdNumber+1);
        }
    },[IdNumber, sliderData.length]);

    // decrement function
    const dec = useCallback(()=>{
        if(IdNumber > 0){
            setIdNumber(IdNumber - 1)
        }
    },[IdNumber]);

    // useEffect(()=>{
    //     inc();
    // },[])

    return (
    <div className={Style.bigNFTSlider}>
        <div className={Style.bigNFTSlider_box}>
            <div className={Style.bigNFTSlider_box_left}>
                <h2>{sliderData[IdNumber].title}</h2>
                <div className={Style.bigNFTSlider_box_left_creator}>
                    <div className={Style.bigNFTSlider_box_left_creator_profile}>
                        <Image
                        className= {Style.bigNFTSlider_box_left_creator_profile_img} 
                        src={sliderData[IdNumber].image} 
                        alt="profile image"
                        width={50}
                        height={50}/>
                        <div className={Style.bigNFTSlider_box_left_creator_profile_info}>
                            <p>Creator</p>
                            <h4>
                                {sliderData[IdNumber].name}{" "}
                                <span>
                                    <MdVerified/>
                                </span>
                            </h4>
                        </div>
                    </div>

                    <div className={Style.bigNFTSlider_box_left_creator_collection}>
                        <AiFillFire
                        className={Style.bigNFTSlider_box_left_creator_collection_icon}
                        />
                        <div className={Style.bigNFTSLider_box_left_creator_collection_info}>
                            <p>collection</p>
                            <h4>{sliderData[IdNumber].collection}</h4>
                        </div>
                    </div>
                </div>
                <div className={Style.bigNFTSlider_box_left_bidding}>
                    <div className={Style.bigNFTSlider_box_left_bidding_box}>
                        <small>Current Bid</small>
                        <p>
                            {sliderData[IdNumber].price}
                            <span>
                                $221,21
                            </span>
                        </p>
                    </div>

                    <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
                        <MdTimer className={Style.bigNFTSlider_box_left_bidding_box_icon}/>
                        <span>Auction ending in</span>
                    </p>
                    <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                            <p>{sliderData[IdNumber].time.days}</p>
                            <span>Days</span>
                        </div>

                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                            <p>{sliderData[IdNumber].time.hours}</p>
                            <span>Hours</span>
                        </div>

                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                            <p>{sliderData[IdNumber].time.minutes}</p>
                            <span>mins</span>
                        </div>

                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                            <p>{sliderData[IdNumber].time.seconds}</p>
                            <span>secs</span>
                        </div>
                    </div>

                    <div className={Style.bigNFTSlider_box_left_button}>
                        <Button btnName="Place" handelClick={() => {}}/>
                        <Button btnName="View" handelClick={() => {}}/>
                    </div>
                </div>
                <div className={Style.bigNFTSlider_box_left_sliderBtn}>
                    <TbArrowBigLeftLine
                    className={Style.bigNFTSlider_box_left_sliderBtn_icon}
                    onClick={() => dec()}/>      
                    <TbArrowBigRightLine
                    className={Style.bigNFTSlider_box_left_sliderBtn_icon}
                    onClick={() => inc()}/>              
                </div>
            </div>

            <div className={Style.bigNFTSlider_box_right}>
                <div className={Style.bigNFTSlider_box_right_box}>
                    <Image className={Style.bigNFTSlider_box_right_img} src={sliderData[IdNumber].nftImage} alt="NFT IMAGE"/>
                    <div className={Style.bigNFTSlider_box_right_box_like}>
                        <AiFillHeart/>
                        <span>{sliderData[IdNumber].like}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BigNFTSlider