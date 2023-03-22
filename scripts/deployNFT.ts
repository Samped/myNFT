import { ethers } from "hardhat";

async function main() {
    const contract = await ethers.getContractFactory("myNft")
    const deployedContract = await contract.deploy("samNFT","sNFT")
    deployedContract.deployed()

    console.log (`NFT contract address is ${deployedContract.address}`)

}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
 });