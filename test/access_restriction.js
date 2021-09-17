const { BN, expectRevert } = require("@openzeppelin/test-helpers");
const ether = require("@openzeppelin/test-helpers/src/ether");
const { web3 } = require("@openzeppelin/test-helpers/src/setup");

const accessRestriction = artifacts.require("AccessRestriction");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("AccessRestriction", function ( accounts ) {

  beforeEach(async function(){
    this.contract = await accessRestriction.deployed();
    this.owner = accounts[0];
    this.new_owner = accounts[1];
  });

  it("Reject forceOwnerChange, send ether less than 10 ether.", async function () {
     await expectRevert(this.contract.forceOwnerChange( this.owner, { value: ether('1')}), "Not enough Ether provided.");
  });
  
  it("Success forceOwnerChange, send ether less than 1 ether.", async function () {
    await this.contract.forceOwnerChange(this.new_owner, { value: ether('10')});
    let addr = await this.contract.owner();
    await expect(addr).to.be.equal(this.new_owner);
    let balance = await web3.eth.getBalance(addr);
    console.log(balance);
  });

});
