// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./TestMutex.sol";

contract Mutex {

  TestMutex exAddr = new TestMutex();

  bool locked = false;

  modifier onReentrancy {
    require(!locked);
    locked = true;
    _;
    locked = false;
  }

  function f() onReentrancy public returns (bytes memory) {
    bytes memory payload = abi.encodeWithSignature("foo(string)", "My Name's Foo");
    (bool success, bytes memory returnData) = address(exAddr).call(payload);
    require(success, "Failed to call foo contract.");
    return returnData;
  }

}
