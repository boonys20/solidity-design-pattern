# Pattern samples in Solidity.

## <a name="list-of-patterns">List of Patterns</a>

* Authorization Patterns
	* [Access Restrictoin](#AccessRestriction)

* Security Category
	* [Balance Limit](#BalanceLimit)
	* [Check effects interaction](#CheckEffectsInterAction)
	* [EmergengyStop](#EmergencyStop)
	* [Mutex](#Mutex)
	* [RateLimit](#RateLimit)
	* [SpeedBump](#SpeedBump)
	* [AccessRestricton](#AccessRestriction)

## <a name="Access Retriction">Access Restriction</a> [$#8593;](#list-of-patterns)

&emsp;**Problem** Any party can call any contract function.

&emsp;**Solution** Ensure specific tasks are executed only if some predefined requirements are met.

## <a name="BalanceLimit">Balance Limit</a> [&#8593;](#list-of-patterns)

&emsp;**Problem:** In the case of security bug discover by hackers, all contract funds can be lost. 

&emsp;**Solution** Set a contract balance limit at risk that allows the threshold of amount to manage and validate operations that cannot exceed a predetermined limit.

## <a name="CheckEffectsInterAction">Check Effects Inter Action</a> [&#8593;](#list-of-patterns)

&emsp;**Problem** In the case contracts can call other contracts to execute their functions (external calls).
This feature is the baseline for reentrancy1 attack exploitation.

&emsp;**Solution** To avoid reentrancy attacks, every time external calls are needed. Firstly, the caller contract makes validations (checks), secondly makes all necessary internal state changes (effects) and finally makes the external call (interaction).

&emsp;**Related patterns** Mutex, Secure ether transfer, Pull payment.

## <a name="EmergencyStop">Emergency Stop</a> [&#8593;](#list-of-patterns)

&emsp;**Problem** In the case contracts can appear bugs and failures in developed, this pattren allows stopping the function of a contract in emergency situations, like bugs or security issue discovery in critical tasks or functionalities.

&emsp;**Solution** Define contract stoppage functionality. 

## <a name="Mutex">Mutex</a> [&#8593;](#list-of-patterns)
&emsp;**Problem** In the case Reentrancy vulnerability. External calls make a contract not work correctly.

&emsp;**Solution** Set a locking boolean variable.

## <a name="RateLimit">RateLimit</a> [&#8593;](#list-of-patterns)
&emsp;**Problem** Time control and management is the purpose of this pattern, by regulating the frequency of how many times a specific task can be executed during a period.

&emsp;**Solution** Regulate how many times a task can be executed in a time interval.

## <a name="SpeedBump">SpeedBump</a> [&#8593;](#list-of-patterns)
&emsp;**Problem** A smart contract can break when there is a simultaneous execution of many heavy tasks. 

&emsp;**Solution** Sometimes need to consider sensitive tasks are executed more slowly, according to the contract requirements.

## <a name="AccessRestriction">Access Restriction</a> [&#8593;](#list-of-patterns)
&emsp;**Problem** Sometimes, functions before being executed in Solidity smart contracts, a set of requirements must be met first. 

&emsp;**Solution** create modifiers used to check requirements that can be reused several times in the same contract.

**Examples:**
* [Balance Limit](./contracts/BalanceLimit.sol)
* [Check effects interaction](./contracts/CheckEffectsInteraction.sol)
* [Emergency Stop](./contracts/EmergencyStop.sol)
* [Mutex](./contracts/Mutex)
* [RateLimit](./contracts/RateLimit.sol)
* [SpeedBump](./contracts/SpeedBump.sol)
* [Access Retricstion](./contracts/AccessRetriction.sol)
