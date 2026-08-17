// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

library PaymentTypes {

    enum PaymentStatus {
        Created,
        Approved,
        Processing,
        Paid,
        Refunded,
        Cancelled,
        Expired
    }

    struct Payment {

        bytes32 id;

        address merchant;

        address payer;

        address token;

        uint256 amount;

        PaymentStatus status;

        uint64 createdAt;

        uint64 expiresAt;

        string metadata;
    }

}