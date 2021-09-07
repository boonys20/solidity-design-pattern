const {
  BN,           // Big Number support
  constants,    // Common constants, like the zero address and largest integers
  expectEvent,  // Assertions for emitted events
  expectRevert, // Assertions for transactions that should fail
} = require('@openzeppelin/test-helpers');

const { expect } = require('chai');

const emergencyStop = artifacts.require("EmergencyStop");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("EmergencyStop", function ( accounts ) {

  const depositAmount = new BN(1000);

  beforeEach(async function () {
    this.contract = await emergencyStop.deployed();
    this.owner = accounts[0];
  });

  it("should not deposit. cause emergency flag is enabled.", async function () {
    await this.contract.deposit({ from: this.owner, value: depositAmount });
    let amount = await this.contract.balances(this.owner);
    expect(new BN(amount)).to.be.bignumber.equal(new BN(0));
  });

  it("should not withdraw. cause emergency flag is enabled.", async function () {
    await this.contract.withdraw(depositAmount);
    let amount = await this.contract.balances(this.owner);
    expect(new BN(amount)).to.be.bignumber.equal(new BN(0));
  });

  it("Should perfrom deposit and have amount is 1000, emergency flag is disabled.", async function() {
    await this.contract.toggleContractStopped();
    await this.contract.deposit({ from: this.owner, value: depositAmount });
    let amount = await this.contract.balances(this.owner);
    expect(new BN(amount)).to.be.bignumber.equal(depositAmount);
  });

});
