import React,{useState, useEffect} from 'react'
import Style from '../styles/author.module.css'
import {Banner} from '../collectionPage/collectionindex'
import {Brand, Title} from "../components/components_index"
import FollowerTabCard from '../components/FollowerTab/FollowerTabCard/FollowerTabCard'
import images from '../img'
import {AuthorProfileCard,AuthorNFTCardBox, AuthorTaps} from '../authorPage/authorpageindex' 

const author = () => {
    const followerArray = [
        {
            background: images.creatorbackground1,
            user: images.user1,
        },
        {
            background: images.creatorbackground2,
            user: images.user2,
        },
        {
            background: images.creatorbackground3,
            user: images.user3,
        },
        {
            background: images.creatorbackground4,
            user: images.user4,
        },
        {
            background: images.creatorbackground5,
            user: images.user5,
        }
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
            <AuthorTaps 
            setCollectiables={setCollectiables} 
            setCreated={setCreated} 
            setLike={setLike}
            setFollower={setFollower} 
            setFollowing={setFollowing}/>
            <AuthorNFTCardBox
            collectiables={collectiables} 
            created={created} 
            like={like}
            follower={follower} 
            following={following}
            />
            <Title heading="Popular Creators" paragraph="Click on music icon and enjoy NFT music or audio"/>
            <div className={Style.author_box}>
                {followerArray.map((el, i) => (
                    <FollowerTabCard i={i} el={el}/>
                ))}
            </div>
            <Brand />
        </div>
    )
}

export default author