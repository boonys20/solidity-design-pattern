const {
  BN,           // Big Number support
  constants,    // Common constants, like the zero address and largest integers
  expectEvent,  // Assertions for emitted events
  expectRevert, // Assertions for transactions that should fail
} = require('@openzeppelin/test-helpers');

const { expect } = require('chai');

const CheckEffectsInteraction = artifacts.require("CheckEffectsInteraction");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("CheckEffectsInteraction", function (accounts) {
 
  const depositAmt = new BN(1000);

  beforeEach(async function (){
    this.contract = await CheckEffectsInteraction.deployed();
    this.owner = accounts[0];
    
    // Deposit to owner account 5000 Tokens.
    await this.contract.deposit({ from: this.owner, value : depositAmt });

  });

  it("Should have 5000 tokens in owner address", async function () {
    let amount = await this.contract.balances(this.owner);
    expect(new BN(amount)).to.be.bignumber.equal(depositAmt);
  });

  it("Should failed, your remaining balance is not enough.", async function (){
    let amount = new BN(50000);
    expectRevert(this.contract.withdraw(amount),"Your remaining balance is not enough.");
  });

});
