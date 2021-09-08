// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract RateLimit {
  
  uint256 enabledAt = block.timestamp;

  mapping (address => uint256) balances;
  event Deposit(address sender, uint amount);

  modifier enabledEvery(uint256 t) {
    if (block.timestamp >= enabledAt) {
        enabledAt = block.timestamp + t;
        _;
    }
  }

  function deposit() public payable {
    emit Deposit(msg.sender, msg.value);
    balances[msg.sender] += msg.value;
  }

  function withdraw(uint256 _amount) public enabledEvery(10 seconds) {
    require(balances[msg.sender] >= _amount, "Your remaining balance is not enough.");
    balances[msg.sender] -= _amount;
    payable(msg.sender).transfer(_amount);
  }

}
