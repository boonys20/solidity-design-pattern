const RateLimit = artifacts.require("RateLimit");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("RateLimit", function ( accounts ) {
  
  beforeEach(async function(){
    this.contract = RateLimit.deployed();
    this.owner = accounts[0];
  });
  
  it("should assert true", async function () {
    
  });
});
