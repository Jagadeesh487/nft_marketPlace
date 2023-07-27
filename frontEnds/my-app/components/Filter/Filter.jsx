import React, {useState} from 'react'
import {FaFilter, FaAngleDown, FaAngleUp, FaWallet,
FaMusic, FaVideo, FaImages, FaUserAlt} from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';
import { MdVerified } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';

import Style from './Filter.module.css'

const Filter = () => {
    const [filter, setfilter] = useState(true);
    const [image, setimage] = useState(true);
    const [video, setvideo] = useState(true);
    const [music, setmusic] = useState(true);

    //function section
    const openFilter = () => {
        if(!filter){
            setfilter(true);
        }else{
            setfilter(false);
        }
    }

    const openImage = () => {
        if(!image){
            setimage(true);
        }else{
            setimage(false);
        }
    }

    const openVideo = () => {
        if(!video){
            setvideo(true);
        }else{
            setvideo(false);
        }
    }

    const openmusic = () => {
        if(!music){
            setmusic(true);
        }else{
            setmusic(false);
        }
    }

    return (
    <div className={Style.filer}>
        <div className={Style.filter_box}>
            <div className={Style.filter_box_left}>
                <button onClick={()=>{}}>NFT's</button>
                <button onClick={()=>{}}>Arts</button>
                <button onClick={()=>{}}>Music</button>
                <button onClick={()=>{}}>Sports</button>
                <button onClick={()=>{}}>Photography</button>
            </div>

            <div className={Style.filter_box_right}>
                <div className={Style.filter_box_right_box}
                onClick={() => openFilter()}>
                    <FaFilter/>
                    <span>Filter</span> {filter ? <FaAngleDown/> : <FaAngleUp/>}
                </div>
            </div>
        </div>

        {
            filter && (
                <div className={Style.filter_box_items}>
                    <div className={Style.filter_box_items_box}>
                        <div className={Style.filter_box_items_box_item}>
                            <FaWallet/>
                            <span>10 ETH</span>
                            <AiFillCloseCircle/>
                        </div>
                    </div>
                    <div className={Style.filter_box_items_box}>
                        <div className={Style.filter_box_items_box_items_trans}
                        onClick={()=>openImage()}>
                            <FaImages/>
                            <small>Images</small>
                            {image ? <AiFillCloseCircle/> : <TiTick/>}
                    </div>
                    </div>

                    <div className={Style.filter_box_items_box}>
                        <div className={Style.filter_box_items_box_items_trans}
                        onClick={()=>openVideo()}>
                            <FaVideo/>
                            <small>Videos</small>
                            {video ? <AiFillCloseCircle/> : <TiTick/>}
                        </div>
                    </div>

                    <div className = {Style.filter_box_items_box}>
                        <div className = {Style.filter_box_items_box_items_trans}
                        onClick={() => openmusic()}>
                            <FaMusic/> 
                            <small>Musics</small>
                            {music ? <AiFillCloseCircle/> : <TiTick/>}                            
                        </div>
                    </div>

                    <div className={Style.filter_box_items_box}>
                        <div className={Style.filter_box_items_box_item}>
                            <FaUserAlt/>
                            <span>Verified</span>
                            <MdVerified/>
                        </div>
                    </div>

                </div>
            )
        }
    </div>
  )
}

export default Filter