# Pattern samples in Solidity.

## List of Patterns

* Security Category
	* [Balance Limit](#Balance-Limit)
    
## <a name="Balance-Limit">Balance Limit</a> [&#8593;](#list-of-patterns)

**Problem:** In the case of security bug discover by hackers, all contract funds can be lost. 

**Solution** Set a contract balance limit at risk that allows the threshold of amount to manage and validate operations that cannot exceed a predetermined limit.

**Examples:**
* [Balance-Limit](./contracts/Balance-Limit)
