var BalanceLimit = artifacts.require("BalanceLimit");
var CheckEffectsInteraction = artifacts.require("CheckEffectsInteraction");
var EmergencyStop = artifacts.require("EmergencyStop");
var Mutex = artifacts.require("Mutex");
var RateLimit = artifacts.require("RateLimit");
var SpeedBump = artifacts.require("SpeedBump");
var AccessRestriction = artifacts.require("Accessrestriction");

module.exports = function(deployer) {
  deployer.deploy(BalanceLimit);
  deployer.deploy(CheckEffectsInteraction);
  deployer.deploy(EmergencyStop);
  deployer.deploy(Mutex);
  deployer.deploy(RateLimit);
  deployer.deploy(SpeedBump);
  deployer.deploy(AccessRestriction);
};
