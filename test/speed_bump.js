const {
  BN,           // Big Number support
  constants,    // Common constants, like the zero address and largest integers
  expectEvent,  // Assertions for emitted events
  expectRevert, // Assertions for transactions that should fail
} = require('@openzeppelin/test-helpers');

const SpeedBump = artifacts.require("SpeedBump");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("SpeedBump", function ( accounts ) {

  const depositAmt = new BN(10000);

  beforeEach(async function () {
    this.contract = await SpeedBump.deployed();
    this.owner = accounts[0];

    // Deposit 10000 tokens 
    await this.contract.deposit({from: this.owner, value: depositAmt});

  });

  it("should have message \" Your asset will be locked at 7 days. \"", async function () {
    const withdrawAmt = new BN(1000);
    let logs = await this.contract.requestWithdrawal(withdrawAmt);
    expectEvent(logs, "Requested", {
      status: true,
      amount: withdrawAmt
    })
  });

  it("should revert cause you request is less than 7 days.", async function(){
    expectRevert(this.contract.withdraw({ from: this.owner }), "Your asset will be locked at 7 days.");
  });

});
