const Mutex = artifacts.require("Mutex");
const { expect } = require("chai");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Mutex", function ( accounts ) {

  beforeEach( async function () {
    this.contract = await Mutex.deployed();
    this.owner = accounts[0];
  });

  it("Should call to external contract", async function() {
    let result = await this.contract.f();
    expect(result).to.be.equal("My Name's Foo");
  });

});
