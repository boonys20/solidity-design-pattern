var BalanceLimit = artifacts.require("BalanceLimit");

module.exports = function(deployer) {
  deployer.deploy(BalanceLimit);
};
