//This file is to write the logic
import React, {useState, useEffect, useContext} from 'react'
import Web3Modal from "web3modal";
import { ethers} from 'ethers'
import {useRouter} from 'next/router';
import {NFTMarkertplaceAddress, NFTMarketplaceABI} from './constants'
import axios from 'axios'
import {create as ipfsHttpClient} from 'ipfs-http-client'

// const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0")

const projectId = "2UeNuKxwLaSqN9bc73LukRrVMtS"
const projectSecretKey = "48eab2306b59321df23fb0f4d9a7db3c"
const auth = `Basic ${Buffer.from(`${projectId}:${projectSecretKey}`).toString(
    'base64'
)}`;

const subdomain = "https://jagadeeeshnftmarketplace.infura-ipfs.io"

const client = ipfsHttpClient({
    host: "infura-ipfs.io",
    port: 5001,
    protocol: "https",
    headers: {
        authorization: auth,
    }
})


// fetching smart contract
const fetchContract = (signerOrProvider) => new ethers.Contract(
    NFTMarkertplaceAddress,
    NFTMarketplaceABI,
    signerOrProvider
)

//connectin eith samrt contract
const connectingWithSmartContract = async() => {
    try{
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);        
        const signer =  provider.getSigner();
        const contract = fetchContract(signer);
        return contract;         
    }
    catch (error){
        console.log("Sonething went worong while connecting with Smart Contract")
    }
}

export const NFTMarketplaceContext = React.createContext();
export const NFTMarketplaceProvider = ({children}) => {
    const titleData = "Discover, collect, and sell NFTs";

    // const checkContract = async () => {
    //     const contract = await connectingWithSmartContract();
    //     console.log(contract);
    // }



    //actual function starts hear
    const [currentAccount, setCurrentAccount] = useState("");
    const router = useRouter();

    //function for checking whether wallet is connected or not
    const checkIfWalletConnected = async() => {
        try{
            if (!window.ethereum) return console.log("Install MetaMask");
            const accounts = await window.ethereum.request({
                method: "eth_accounts"
            });
            if (accounts.length){
                setCurrentAccount(accounts[0]);
            }
            else{
                console.log("No Account Found");
            }
            console.log(currentAccount)
        }
        catch(error){
            console.log("Something went worong while connecting to wallet")
        }
    };

    useEffect(() => {
        checkIfWalletConnected();
    }, []);

    //fucntion to click and connet to wallet
    const connectWallet = async() => {
        try{
            if (!window.ethereum) return console.log("Install MetaMask");
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });

            setCurrentAccount(accounts[0]);
            // window.location.reload();
            
        }
        catch(error){
            console.log("Error while connection to wallet throught button");
        }
    }

    //function to upload images to IPFS
    const uploadToIPFS = async(file) => {
        try{
            const added = await client.add({content: file});
            const url = `${subdomain}/ipfs/${added.path}`;
            return url;
        }
        catch (error){
            console.log("Error Uploading to IPFS", (error))
        }
    }

    //create nft function
    const createNFT = async(
        name,
        price,
        image,
        description,
        router) => {           
            if(!name || !description || !price || !image)
            return console.log("Data is Missing");
            const data = JSON.stringify({name, description, image})
            try{
                const added = await client.add(data);
            const url = `https://infura-ipfs.io/ipfs/${added.path}`;
            await createSale(url, price)
            }
            catch(error){
                console.log(error);
            }
    }

    //createSale function
    const createSale = async(url, formInputPrice, isReselling, id) => {
        try{
            const price = ethers.utils.parseUnits(formInputPrice, "ether");

            const contract = await connectingWithSmartContract();
            const listingPrice = await contract.getListingPrice();
            const transaction = !isReselling ? 
            await contract.createToken(url, price,{
                value: listingPrice.toString(),
            })
            :
            await contract.reSellToken(url, price,{
                value: listingPrice.toString(),
            });
            await transaction.wait();
            // router.push('/searchPage')
            console.log(transaction);
        }
        catch(error){
            console.log("error while creating sale", (error));
        }
    }

    //fetch nfts function--to fetch the nfts
    const fetchNFTs  = async() => {
        try{
            const provider = new ethers.providers.JsonRpcProvider();
            const contract = fetchContract(provider);
            const data = await contract.fetchmarketItem();
            // console.log(data);

            const items = await Promise.all(
                data.map(async({tokenId, seller, owner, price: unformattedPrice})=>{
                    const tokenURI = await contract.tokenURI(tokenId);
                    const {
                        data: { image, name, description},
                    } = await axios.get(tokenURI);
                    const price = ethers.utils.formatUnits(
                        unformattedPrice.toString(),
                        "ether"
                    );
                    return{
                        price,
                        tokenId: tokenId.toNumber(),
                        seller,
                        owner,
                        image,
                        name,
                        description,
                        tokenURI,
                    }
                })
            )
            return items;
        }
        catch(error){
            console.log("Eror while fetching NFT's");
        }
    }

    // useEffect(() => {
    //     fetchNFTs();    
    // }, [])

    //fetch my nft or listed nft
    const fetchMyNFTORListeeNFTs = async(type) => {
        try{
            const contract = await connectingWithSmartContract();
            const data = type == "fetchItemsListed" ? 
            await contract.fetchItemsListed()
            :
            await contract.fetchMyNFT();

            const items = await Promise.all(
                data.map(async({tokenId, seller, owner, price: unformattedPrice})=>{
                    const tokenURI = await contract.tokenURI(tokenId);
                    const{
                        data: {image, name, description},
                    } = await axios.get(tokenURI);
                    const price = ethers.utils.formatUnits(
                        unformattedPrice.toString(),
                        "ether"
                    )
                    return{
                        price,
                        tokenId: tokenId.toNumber(),
                        seller,
                        owner,
                        image,
                        name,
                        description,
                        tokenURI,
                    }
                })
            )
            return items;
        }
        catch(error){
            console.log("Error while Fectching listed NFT's");
        }
    }

    

    //funtion to buy nft
    const buyNFT = async (nft) => {
        try{
            const contract = await connectingWithSmartContract();
            const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
            const transaction = await contract.createMarketSale(nft.tokenId,{
                value: price,
            })
            await transaction.wait();
        }
        catch(error){
            console.log("Erroe occured while buying nft");
        }
    }
    
    return (
        <NFTMarketplaceContext.Provider value = {{
            checkIfWalletConnected,
            connectWallet,
            uploadToIPFS,
            createNFT,
            fetchNFTs,
            fetchMyNFTORListeeNFTs,
            buyNFT,
            currentAccount,
            // checkContract,
            titleData}}>
            {children}
        </NFTMarketplaceContext.Provider>
    )
}