//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

//Internal import for nft openzeppelin
import "@openzeppelin/contracts/utils/Counters.sol"; //this will help us to keep track the count of nfts created etc
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol"; 
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol"; //to check the value in console


contract NFTMarketplace is ERC721URIStorage{
    using Counters for Counters.Counter;    

    //variables
    Counters.Counter private _tokenIds; 
    Counters.Counter private _itemsSold;

    uint256 listingPrice = 0.0015 ether;

    address payable owner;

    mapping(uint256 => MarketItem) private idMarketItem;

    struct MarketItem{
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    event idMarketItemCreated(
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    modifier onlyOwner{
        require(
            msg.sender == owner,
            "only owner of the marketplace can change the listing price"
            );
            _;
    }
    constructor() ERC721("NFT Metaverse TOken", "MYNFT"){
        owner == payable(msg.sender);
    }

    function updateListingPrice(uint256 _listingPrice)
    public
    payable
    onlyOwner
    {
        listingPrice = _listingPrice;
    }

    function getListingPrice() public view returns (uint256){
        return listingPrice;
    }

    //Let create "Create nft token function"
    function createToken(string memory tokenURI, uint256 price) public payable  returns(uint256){
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        createMarketItem(newTokenId, price);
        return newTokenId;
    }

    //creating market items
    function createMarketItem(uint256 tokenId, uint256 price) private{
        require(price > 0, "Price must be atleast 1");
        require(msg.value == listingPrice, "price must be equal to listing price");
        idMarketItem[tokenId] = MarketItem(
            tokenId,
            payable(msg.sender),
            payable(address(this)),
            price,
            false
        );
        _transfer(msg.sender, address(this), tokenId);
        emit idMarketItemCreated(
            tokenId,
            msg.sender,
            address(this),
            price,
            false
        );
    }

    //function for resale the token
    function reSellToken(uint256 tokenId, uint256 price) public payable{
        require(idMarketItem[tokenId].owner == msg.sender, "Only item owner can perform this operation");
        require(msg.value == listingPrice, "price must be equal to listing price");
        idMarketItem[tokenId].sold = false;
        idMarketItem[tokenId].price = price;
        idMarketItem[tokenId].seller = payable(msg.sender);
        idMarketItem[tokenId].owner = payable(address(this));

        _itemsSold.decrement();

        _transfer(msg.sender, address(this), tokenId);
    }

    //functin to create the market sale
    function createMarketSale(uint256 tokenId) public payable{
        uint256 price = idMarketItem[tokenId].price;
        require(msg.value == price, "please sublmit the asking price in order to complete the purchase");
        idMarketItem[tokenId].owner = payable(msg.sender);
        idMarketItem[tokenId].sold = true;
        idMarketItem[tokenId].owner = payable(address(0));

        _itemsSold.increment();
        _transfer(address(this), msg.sender, tokenId);
        payable(owner).transfer(listingPrice);
        payable(idMarketItem[tokenId].seller).transfer(msg.value);
    }

    //getting unsold nft data
    function fetchmarketItem() public view returns(MarketItem[] memory){
        uint256 itemCount = _tokenIds.current();
        uint256 unSoldItemsCount = _tokenIds.current() - _itemsSold.current();
        uint256 currentIndex = 0;
        MarketItem[] memory items = new MarketItem[](unSoldItemsCount);
        for (uint256 i = 0; i< itemCount; i++){
            if(idMarketItem[i+1].owner == address(this)){
                uint256 currentId = i+1;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    //purchase items
    function fetchMyNFT() public view returns(MarketItem[] memory){
        uint256 totalCount = _tokenIds.current();
        uint256 itemsCount = 0;
        uint256 currentIndex = 0;

        for(uint256 i=0; i<totalCount; i++){
            if(idMarketItem[i+1].owner == msg.sender){
                itemsCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemsCount);
        for(uint256 i=0; i<totalCount; i++){

            if(idMarketItem[i+1].owner == msg.sender){
                uint256 currentId = i+1;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }            
        }
        return items;
    }

    //siingle user items
    function fetchItemsListed() public view returns(MarketItem[] memory){
        uint256 totalCount = _tokenIds.current();
        uint256 itemsCount = 0;
        uint256 currentIndex = 0;

        for(uint256 i=0; i< totalCount; i++){
            if(idMarketItem[i+1].seller == msg.sender){
                itemsCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemsCount);
        for(uint256 i=0; i< totalCount; i++){
            if(idMarketItem[i+1].seller == msg.sender){
                uint256 currentId = i+1;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

}