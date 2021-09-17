//SDPX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Ownable {
    
    address public owner;

    // Sets the sender address as the `owner`.
    constructor () {
        owner = msg.sender;
    }

    // Throws an exception if called by any account other than the `owner`.
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
}