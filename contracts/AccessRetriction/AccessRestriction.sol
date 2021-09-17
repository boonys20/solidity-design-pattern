// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./Ownable.sol";

contract AccessRestriction is Ownable {

   uint public creationTime = block.timestamp;

   modifier onlyBy(address _account) {
      require(msg.sender == _account, "Sender not authorized.");
      _;
   }

   function changeOwner(address _newOwner) public onlyBy(owner) {
      owner = _newOwner;
   }

   modifier onlyAfter(uint _time) {
      require(block.timestamp >= _time, "Function called too early.");
      _;
   }

   function disown() public onlyBy(owner) onlyAfter(creationTime + 6 weeks) {
      delete owner;
   }

   modifier costs(uint _amount) {
      require(msg.value >= _amount, "Not enough Ether provided.");
      _;

      if (msg.value > _amount) {
         //address(this).balance += _amount;
         payable(msg.sender).transfer(msg.value - _amount);
      }
   }

   function forceOwnerChange(address _newOwner) public payable costs(10 ether) {
      owner = _newOwner;
      uint160 i = uint160(address(_newOwner));
      if (i & 0 == 1) return;
   }
  
}
