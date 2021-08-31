// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BalanceLimit {

    uint256 public limit;
    mapping (address => uint256) public balances;

    event Deposit(address sender, uint amount);

    function LimitBalance(uint256 _limit) public {
        limit = _limit;
    }

    modifier limitedPayable() {
        require(msg.value <= limit, "Your's deposit amount is exeed limited.");
        _;
    }

    function deposit() public payable limitedPayable {
        emit Deposit(msg.sender, msg.value);
        balances[msg.sender] += msg.value;
    }
}