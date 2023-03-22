import { expect } from "chai";
import { ethers } from "hardhat";
import {MyNft} from "../typechain-types";

let nftContract: MyNft;
let user1, user2, user3, user4;
describe("samNFT", function(){
    before(async()=>{
        const contract = await ethers.getContractFactory("myNft");
        nftContract = await contract.deploy("samNFT","sNFT")
        await nftContract.deployed();
        [user1, user2, user3, user4] = await ethers.getSigners()
    })
    
    it ("Mint NFT to user2", async() => {
        expect (await nftContract.balanceOf(user2.address)).to.equal(0)
        await nftContract.mintNFT(user2.address, "http://erfrefrefre.com")
        expect (await nftContract.balanceOf(user2.address)).to.equal(1)
    })

    it ("Approve user3 of user2 NFT", async() => {
       expect (await nftContract.getApproved(0)).to.equal("0x0000000000000000000000000000000000000000")
       await nftContract.connect(user2).approve(user3.address, 0)
       expect (await nftContract.getApproved(0)).to.equal(user3.address)
    })

    it ("should transfer user2 NFT to user4 by user3", async()=>{
        expect(await nftContract.balanceOf(user4.address)).to.equal(0)
        await nftContract.connect(user3).transferFrom(user2.address, user4.address, 0)
        expect(await nftContract.balanceOf(user4.address)).to.equal(1)
    })
})

