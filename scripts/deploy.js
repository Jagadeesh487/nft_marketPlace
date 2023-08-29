const hre = require("hardhat");

async function main() {
  const NFTMarketPlace = await hre.ethers.getContractFactory("NFTMarketPlace");
  const nftMarketPlace = await NFTMarketPlace.deploy();

  await nftMarketPlace.deployed();

  console.log(
    `deployed contract Address ${nftMarketPlace.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
