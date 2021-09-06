// SDPX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../SecureEtherTransfer/SecureEtherReceiver.sol";

contract SecureEtherSender {

    SecureEtherReceiver private receiverAdr = new SecureEtherReceiver();

    function sendEther(uint256 _amount) public payable {
        if (!payable(receiverAdr).send(_amount)) {
            // handle failed send
        }
    }

    function callValueEther(uint256 _amount) public payable {
        
        //require(address(receiverAdr).call{value: _amount, gas: 35000}(""), abi.encodeWithSignature(signatureString, arg););
    }

}