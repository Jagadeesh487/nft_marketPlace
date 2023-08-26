import React,{useState, useEffect} from 'react'
import Style from '../styles/author.module.css'
import {Banner} from '../collectionPage/collectionindex'
import {Brand, Title} from "../components/components_index"
import images from '../img'
import {AuthorProfileCard, AuthoeTaps, TabCard, AuthorTaps} from '../authorPage/authorpageindex' 

const author = () => {
    const popularArray = [
        images.user1,
        images.user2,
        images.user3,
        images.user4,
        images.user5,
        images.user6,
        images.user7,
        images.user8,
    ]
    const [collectiables, setCollectiables] = useState(true);
    const [created, setCreated] = useState(false);
    const [like, setLike] = useState(false);
    const [follower, setFollower] = useState(false);
    const [following, setFollowing] = useState(false)
    return (
        <div className={Style.banner}>
            <Banner bannerImage = {images.creatorbackground10}/>
            <AuthorProfileCard/>
            <AuthorTaps/>
        </div>
    )
}

export default author