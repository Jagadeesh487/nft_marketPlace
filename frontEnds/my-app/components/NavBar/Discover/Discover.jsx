import React from 'react'
import Link from 'next/link';

//internal inport
import Style from './Discover.module.css';

const Discover = () => {
  //now we have take demo data for that we take array in that we have name of the page and router.
  //Discover navigation menu

  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "search",
    },
    {
      name: "Author-Profile",
      link: "author-profile",
    },
    {
      name: "NFT Details",
      link: "NFT-details",
    },
    {
      name: "Account Setting",
      link: "account-setting",
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
    {
      name: "Blog",
      link: "blog",
    }
  ];
  return (
    <div>
      {/* //for looping entire discover menu */}
      {discover.map((el, i)=>(
        <div key={i+1} className={Style.discover}>
          <Link href={{ pathname: `${el.link}`}}>
            {el.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;