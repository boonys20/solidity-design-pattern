# Pattern samples in Solidity.

## <a name="list-of-patterns">List of Patterns</a>

* Security Category
	* [Balance Limit](#BalanceLimit)
	* [Check effects interaction](#CheckEffectsInterAction)
    
## <a name="BalanceLimit">Balance Limit</a> [&#8593;](#list-of-patterns)

&emsp;**Problem:** In the case of security bug discover by hackers, all contract funds can be lost. 

&emsp;**Solution** Set a contract balance limit at risk that allows the threshold of amount to manage and validate operations that cannot exceed a predetermined limit.

## <a name="CheckEffectsInterAction">Check Effects Inter Action</a> [&#8593;](#list-of-patterns)

&emsp;**Problem** In the case contracts can call other contracts to execute their functions (external calls).
This feature is the baseline for reentrancy1 attack exploitation.

&emsp;**Solution** To avoid reentrancy attacks, every time external calls are needed. Firstly, the caller contract makes validations (checks), secondly makes all necessary internal state changes (effects) and finally makes the external call (interaction).

&emsp;**Related patterns** Mutex, Secure ether transfer, Pull payment.
## 

**Examples:**
* [Balance Limit](./contracts/BalanceLimit)
* [Check effects interaction](./contracts/CheckEffectsInteraction)
