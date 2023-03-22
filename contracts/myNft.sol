pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract myNft is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    constructor (string memory _name, string memory _symbol) ERC721 (_name, _symbol){}

    function mintNFT(address _user, string memory _tokenUri ) public returns (uint256){
         uint256 newItemId = _tokenIds.current();
        _mint(_user, newItemId);
        _setTokenURI(newItemId, _tokenUri);

        _tokenIds.increment();
        return newItemId;
    }

}