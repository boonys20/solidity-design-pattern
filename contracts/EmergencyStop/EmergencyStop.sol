// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract EmergencyStop {
  
  event Deposit(address sender, uint amount);

  mapping (address => uint256) public balances;
  bool contractStopped = false;
  address owner;

  modifier _onlyOwner {
    require(msg.sender == owner); 
    _;
  }

  modifier haltInEmergency {
    if (contractStopped) _;
  }

  modifier enableInEmergency {
    if (contractStopped) _;
  }

  function toggleContractStopped() public {
    contractStopped = !contractStopped;
  }

  function deposit() public payable haltInEmergency {
    emit Deposit(msg.sender, msg.value);
    balances[msg.sender] += msg.value;
  }

  function withdraw(uint256 _amount) public payable enableInEmergency {
    require(balances[msg.sender] >= _amount, "Your remaining balance is not enough.");
    balances[msg.sender] -= _amount;
    payable(msg.sender).transfer(_amount);
  }

}
