// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "../libraries/PaymentTypes.sol";

interface IElPayEscrow {

    function createPayment(
        address merchant,
        address token,
        uint256 amount,
        string calldata metadata
    )
        external
        returns (bytes32);

    function pay(
        bytes32 paymentId
    )
        external;

    function refund(
        bytes32 paymentId
    )
        external;

    function getPayment(
        bytes32 paymentId
    )
        external
        view
        returns (
            PaymentTypes.Payment memory
        );
}