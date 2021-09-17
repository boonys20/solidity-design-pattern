// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SpeedBump {
  
  struct Withdrawal {
    uint256 amount;
    uint256 requestedAt;
  }

  mapping (address => uint256) private balances;
  mapping (address => Withdrawal) private withdrawals;

  uint256 constant WAIT_PERRIOD = 7 days;

  event Requested(bool status, uint256 amount, uint256 requestedAt);
  event withdrawal(address addr, uint amount);

  function deposit() public payable {
    balances[msg.sender] += msg.value;
  }

  function requestWithdrawal(uint256 _amount) public {
    if (balances[msg.sender] > 0) {
        withdrawals[msg.sender] = Withdrawal({
          amount: _amount,
          requestedAt: block.timestamp
        });
      emit Requested(true, withdrawals[msg.sender].amount, withdrawals[msg.sender].requestedAt);
    }
  }

  function withdraw() public payable {
    uint256 times_period = withdrawals[msg.sender].requestedAt + WAIT_PERRIOD;
    require(block.timestamp > times_period, "Your asset will be locked at 7 days.");
    if(withdrawals[msg.sender].amount > 0 ) {
      uint amount = withdrawals[msg.sender].amount;
      withdrawals[msg.sender].amount = 0;
      payable(msg.sender).transfer(amount);
    }
  }

}
