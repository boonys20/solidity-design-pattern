const { BN, expectRevert } = require("@openzeppelin/test-helpers");

const { expect } = require("chai")

const RateLimit = artifacts.require("RateLimit");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("RateLimit", function ( accounts ) {

  const depositAmt = new BN(1000);
  const withdrawAmt = new BN(10);
  
  beforeEach(async function(){
    this.contract = await RateLimit.deployed();
    this.owner = accounts[0];
    await this.contract.deposit({ from: this.owner, value: depositAmt });
  });
  
  it("successfully withdraw.", async function () {
    await this.contract.withdraw(withdrawAmt);
    let remaining_amt = await this.contract.balances(this.owner);
    let expected_amt = depositAmt - withdrawAmt;
    expect(remaining_amt).to.be.bignumber.equal(new BN(expected_amt));
  });

  it("reject withdraw, limit withdraw every 10 mins.", async function() {
    await expectRevert(this.contract.withdraw(withdrawAmt), "your request times is less than 10 mins.");
  });

});
