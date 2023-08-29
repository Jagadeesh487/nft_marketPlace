//This file is to write the logic
import React, {useState, useEffect, useContext} from 'react'
import web3Modal from "web3modal";
import { ethers} from 'ethers'
import Router from 'next/router';
import {NFTMarketplaceAddres, NFTMarketplaceABI} from './constants'

export const NFTMarketplaceContext = React.createContext();
export const NFTMarketplaceProvider = ({children}) => {
    const titleData = "Discover, collect and sell NFT's and deploy"
    return (
        <NFTMarketplaceContext.Provider value = {{titleData}}>
            {children}
        </NFTMarketplaceContext.Provider>
    )
}