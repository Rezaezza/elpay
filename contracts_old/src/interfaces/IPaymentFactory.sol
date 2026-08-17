// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

interface IPaymentFactory {

    function createCheckout(
        address merchant,
        address token,
        uint256 amount,
        string calldata metadata
    )
        external
        returns (bytes32);
}