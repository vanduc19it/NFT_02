const hre = require("hardhat");

async function main() {
  const VanDuc = await hre.ethers.getContractFactory("VanDuc");
  const vanDuc = await VanDuc.deploy("VANDUC", "VDC");

  await vanDuc.deployed();
  
  console.log("Successfully deployed smart contract to: ", vanDuc.address);

  await vanDuc.mint("https://ipfs.io/ipfs/QmV6yKmXbRfToZaf7efdDMqJPkWXW6KEmEsitK5uH9RGTt");

  console.log("NFT successfully minted");

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
