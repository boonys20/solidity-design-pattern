// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract CheckEffectsInteraction {

    mapping(address => uint256) public balances;

    function deposit() public payable {
      balances[msg.sender] = msg.value;
    }

    function withdraw(uint256 amount) public {
      // 1 . Checks
      require(balances[msg.sender] >= amount, "Your remaining balance is not enough.");
      // 2 . Effects
      balances[msg.sender] -= amount;
      // 3 . Interaction
      payable(msg.sender).transfer(amount);
    }
  
}
