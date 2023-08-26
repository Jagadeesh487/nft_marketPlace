import React,{useState} from 'react'
import Image from 'next/image';
import {MdVerfied, MdCloudUpload, MdOutLineReportProblem} from 'react-icons/md'
import {FiCopy} from 'react-icons/fi';
import { TiSocialFacebook, TiSocialLinkedin, TiSocialYoutube, TiSocialTwitter } from 'react-icons/ti';
import { BsThreeDots } from 'react-icons/bs';
import Style from './AuthorProfileCard.module.css'
import images from '../../img'
import {Button} from '../../components/components_index'
import { MdVerified } from 'react-icons/md';

const AuthorProfileCard = () => {
    const [share, setShare] = useState(false);
    const [report, setReport] = useState(false);
  return (
    <div className={Style.AuthorProfileCard}>
        <div className={Style.AuthorProfileCard_box}>
            <div className={Style.AuthorProfileCard_box_img}>
                <Image
                src = {images.nft_image_1}
                className={Style.AuthorProfileCard_box_img_imag}
                alt="NFT IMAGES"
                width={220}
                height={220}
                />
            </div>
            <div className={Style.AuthorProfileCard_box_info}>
                <h2>Dony Herrera{""}{" "}
                <span>
                    <MdVerified/>
                </span>{" "}
                </h2>

                <div className = {Style.AuthorProfileCard_box_info_address}>
                    <input type="text" value="0x236586582359..E3J667HJ99" id="myInput"/>
                </div>
                <FiCopy onClick = {() => copyAddress()} className={Style.AuthorProfileCard_box_info_address_icon}/>
            </div>
            <p>
                Punk #4782 / An OG CryptoPunk collector, hoarder of NFT's.
                Contributing to @ether_cards. an NFT Monetization Platform.
            </p>
        </div>
    </div>
  )
}

export default AuthorProfileCard