const {
  BN,           // Big Number support
  constants,    // Common constants, like the zero address and largest integers
  expectEvent,  // Assertions for emitted events
  expectRevert, // Assertions for transactions that should fail
} = require('@openzeppelin/test-helpers');
const { web3 } = require('@openzeppelin/test-helpers/src/setup');

const { expect } = require('chai');

const BalanceLimit = artifacts.require("BalanceLimit");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("BalanceLimit", function (/* accounts */) {

  beforeEach(async function () {
    this.contract = await BalanceLimit.deployed();
  });

  it("should revert, Deposit amout is exceed limited.", async function () {
     const limited = new BN(10);
     const deposit = new BN(100);
     await this.contract.LimitBalance(limited);
     expectRevert(this.contract.deposit({from: web3.eth.defaultAccount, value : deposit}), "Your's deposit amount is exeed limited.");
  });

  it("should return value of deposit amout is 100.", async function () {
    const limited = new BN(1000);
    const deposit = new BN(100);
    await this.contract.LimitBalance(limited);
    let amount = await this.contract.deposit({from: web3.eth.defaultAccount, value : deposit});
    expectEvent(this.contract.balances({from: web3.eth.defaultAccount})).to.be.eq(amount);
 });

});
