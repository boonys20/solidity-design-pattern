// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract RateLimit {
  
  uint256 enabledAt = block.timestamp;

  mapping (address => uint256) public balances;
  event Deposit(address sender, uint amount);

  modifier enabledEvery(uint256 t) {
    require(block.timestamp >= enabledAt, "your request times is less than 10 mins.");
    enabledAt = block.timestamp + t;
    _;
  }

  function deposit() public payable {
    emit Deposit(msg.sender, msg.value);
    balances[msg.sender] += msg.value;
  }

  function withdraw(uint256 _amount) public enabledEvery(10 minutes) {
    require(balances[msg.sender] >= _amount, "Your remaining balance is not enough.");
    balances[msg.sender] -= _amount;
    payable(msg.sender).transfer(_amount);
  }

}
