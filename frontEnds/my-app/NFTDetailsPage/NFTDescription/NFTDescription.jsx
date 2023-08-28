import React, {useState} from 'react'
import Image from 'next/image'
import { MdVerified, MdCloudUpload,
MdTimer, MdReportProblem, MdOutlineDeleteSweep } from 'react-icons/md'
import { BsThreeDots } from 'react-icons/bs'
import { FaWallet, FaPercentage} from 'react-icons/fa'
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
} from 'react-icons/ti';
import {BiTransferAlt, BiDollar} from 'react-icons/bi'

import Style from './NFTDescription.module.css'
import images from '../../img'  
import { Button } from '@/components/components_index'
import {NFTTabs} from '../NFTDetailsindex'

const NFTDescription = () => {
  const [social, setSocial] = useState(false)
  const [NFTMenu, setNFTMenu] = useState(false)
  const [history, setHistory] = useState(false)
  const [provanance, setProvanance] = useState(false)
  const [owner, setOwner] = useState(false)

  const historyArray = [
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
  ]

  const provananceArray = [
    images.user4,
    images.user1,
    images.user6,
    images.user2,
    images.user3,
  ]

  const ownerArray = [
    images.user6,
    images.user5,
    images.user4,
    images.user3,
    images.user2,
  ]

  const openSocial = () => {
    if(!social){
      setSocial(true)
      setNFTMenu(false)
    }
    else{
      setSocial(false)
    }
  }

  const openNFTMenu = () => {
    if(!social){
      setSocial(false)
      setNFTMenu(true)
    }
    else{
      setNFTMenu(false)
    }
  }

  const openTabs = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Bid History"){
      setHistory(true);
      setProvanance(false);
      setOwner(false);
    }
    else if (btnText == "Provanance"){
      setHistory(false);
      setProvanance(true);
      setOwner(false);
    }
  }

  const openOwner = () => {
    if(!owner){
      setOwner(true)
      setHistory(false)
      setProvanance(false)
    }
    else{
      setOwner(false)
      setHistory(true)
    }
  }

  return (
    <div className = {Style.NFTDescription}>
      <div className = {Style. NFTDescription_box}>
        {/* first component */}
        <div className = {Style.NFTDescription_box_share}>
          <p>Virtual World</p>
          <div className = {Style.NFTDescription_box_share_box}>
            <MdCloudUpload
            className={Style.NFTDescription_box_share_box_icon}
            onClick={() => openSocial()}
            />
            {social && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href="#">
                  <TiSocialFacebook/>Facebook
                </a>
                <a href="#">
                  <TiSocialLinkedin/>LinkedIN
                </a>
                <a href="#">
                  <TiSocialTwitter/>Twitter
                </a>
                <a href="#">
                  <TiSocialYoutube/>Youtube
                </a>
              </div>
            )}

            <BsThreeDots
            className={Style.NFTDescription_box_share_box_icon}
            onClick = {() => openNFTMenu()}
            />
            {NFTMenu && (
              <div className = {Style.NFTDescription_box_share_box_social}>
                <a href="#">
                  <BiDollar/> Change Price
                </a>
                <a href="#">
                  <BiTransferAlt/> Transfer
                </a>
                <a href="#">
                  <MdReportProblem/> Report abouse
                </a>
                <a href="#">
                  <MdOutlineDeleteSweep/> Delete Item
                </a>
              </div>
            )}

          </div> 
        </div>

        {/* second component */}
        <div className = {Style.NFTDescription_box_profile}>
          <h1>BearX #8734</h1>
          <div className = {Style.NFTDescription_box_profile_box}>
            <div className = {Style.NFTDescription_box_profile_box_left}>
              <Image 
              src = {images.user1}
              alt = 'profile'
              width = {40}
              height={40}
              className = {Style.NFTDescription_box_profile_box_left_img}
              />
              <div className={Style.NFTDescription_box_profile_box_left_info}>
                <small>Creator</small><br/>
                <span>Karli Costa <MdVerified/></span>
              </div>
            </div>
            
            <div className = {Style.NFTDescription_box_profile_box_right}>
              <Image
              src = {images.user1}
              alt = 'profile'
              width = {40}
              height={40}
              className = {Style.NFTDescription_box_profile_box_left_img}
              />
              <div className = {Style.NFTDescription_box_profile_box_right_info}>
                <small>Creator</small><br/>
                <span>Karil Costa <MdVerified/></span>
              </div>
            </div>
          </div>


        

        <div className={Style.NFTDescription_box_profile_bidding}>
          <p>
            <MdTimer/> <span>Auction Ending in: </span>
          </p>
          <div className = {Style.NFTDescription_box_profile_bidding_box_timer}>
            <div className={Style.NFTDescription_box_profile_bidding_box_timer_item}>
              <p>2</p>
              <span>Days</span>
            </div>
            <div className={Style.NFTDescription_box_profile_bidding_box_timer_item}>
              <p>22</p>
              <span>Hours</span>
            </div>
            <div className={Style.NFTDescription_box_profile_bidding_box_timer_item}>
              <p>45</p>
              <span>Minutes</span>
            </div>
            <div className={Style.NFTDescription_box_profile_bidding_box_timer_item}>
              <p>32</p>
              <span>Seconds</span>
            </div>
          </div>
          <div className = {Style.NFTDescription_box_profile_bidding_box_price}>
            <div className = {Style.NFTDescription_box_profile_bidding_box_price_bid}>
              <small>Current Bid</small>
              <p>1.000Eth
                <span>(= $3,872.34)</span>
              </p>
            </div>
            <span>[96 in Stock]</span>
          </div>
          <div className = {Style.NFTDescription_box_profile_bidding_box_button}>
            <Button
            icon = <FaWallet/>
            btnName = "Place a bid"
            handelClick={() => {}}
            classStyle={Style.button}
            />
            <Button
            icon = <FaPercentage/>
            btnName = "Make Offer"
            handelClick={() => {}}
            classStyle={Style.button}
            />
          </div>
          <div className = {Style.NFTDescription_box_profile_bidding_box_tabs}>
            <button onClick = {(e) => openTabs(e)}>Bid History</button>
            <button onClick = {(e) => openTabs(e)}>Provanance</button>
            <button onClick = {(e) => openOwner()}>Owner</button>
          </div>

          {history && (
            <div className = {Style.NFTDescription_box_profile_bidding_box_card}>
              <NFTTabs dataTab = {historyArray}/>
            </div>
          )}
          {provanance && (
            <div className = {Style.NFTDescription_box_profile_bidding_box_card}>
              <NFTTabs dataTab = {provananceArray}/>
            </div>
          )}
          {owner && (
            <div className = {Style.NFTDescription_box_profile_bidding_box_card}>
              <NFTTabs dataTab = {ownerArray} icon=<MdVerified/> />
            </div>
          )}
        </div>
      </div>  
      </div>   
    </div>
  )
}

export default NFTDescription