var BalanceLimit = artifacts.require("BalanceLimit");
var CheckEffectsInteraction = artifacts.require("CheckEffectsInteraction");

module.exports = function(deployer) {
  deployer.deploy(BalanceLimit);
  deployer.deploy(CheckEffectsInteraction);
};
