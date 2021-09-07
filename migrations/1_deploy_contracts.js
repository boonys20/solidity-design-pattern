var BalanceLimit = artifacts.require("BalanceLimit");
var CheckEffectsInteraction = artifacts.require("CheckEffectsInteraction");
var EmergencyStop = artifacts.require("EmergencyStop");
var Mutex = artifacts.require("Mutex");

module.exports = function(deployer) {
  deployer.deploy(BalanceLimit);
  deployer.deploy(CheckEffectsInteraction);
  deployer.deploy(EmergencyStop);
  deployer.deploy(Mutex);
};
