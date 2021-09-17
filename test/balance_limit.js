const {
  BN,           // Big Number support
  constants,    // Common constants, like the zero address and largest integers
  expectEvent,  // Assertions for emitted events
  expectRevert, // Assertions for transactions that should fail
} = require('@openzeppelin/test-helpers');

const { expect } = require('chai');

const BalanceLimit = artifacts.require("BalanceLimit");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("BalanceLimit", function ( accounts ) {

  const limited = new BN(10);

  beforeEach(async function ( ) {
    this.contract = await BalanceLimit.deployed();
    this.depositAcc = accounts[0];
    await this.contract.LimitBalance(limited);
  });

  it("should reverted, Deposit amout is exceed limited.", async function () {
     const deposit = new BN(100);
     await expectRevert(this.contract.deposit({from: this.depositAcc, value : deposit}), "Your's deposit amount is exeed limited.");
  });

  it("should returns value of deposit amout is 100.", async function () {
    const deposit = new BN(10);
    await this.contract.deposit({value : deposit});
    let amount = await this.contract.balances(this.depositAcc);
    await expect(new BN(deposit)).to.be.bignumber.equal(new BN(amount));
  });

});
