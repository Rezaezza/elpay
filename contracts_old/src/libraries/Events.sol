// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

library Events {

    event MerchantRegistered(
        address indexed merchant
    );

    event MerchantUpdated(
        address indexed merchant
    );

    event PaymentCreated(
        bytes32 indexed paymentId,
        address indexed merchant,
        address indexed payer,
        uint256 amount
    );

    event PaymentApproved(
        bytes32 indexed paymentId
    );

    event PaymentCompleted(
        bytes32 indexed paymentId,
        bytes32 transactionId
    );

    event PaymentRefunded(
        bytes32 indexed paymentId
    );

    event PaymentCancelled(
        bytes32 indexed paymentId
    );
}