// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NjoyNFT is ERC721, ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;
    IERC20 public tokenAddress;
    uint256 public price = 0.5 * 10 ** 18;

    constructor(address _tokenAddress, address initialOwner) ERC721("MyToken", "MTK") Ownable(initialOwner) {
        tokenAddress = IERC20(_tokenAddress);
    }

    function safeMint(address to, string memory uri) public onlyOwner {
        tokenAddress.transferFrom(msg.sender, owner(), price);
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri); 
    }

    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
