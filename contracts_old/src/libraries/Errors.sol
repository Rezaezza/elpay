// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

library Errors {

    error InvalidMerchant();

    error MerchantNotFound();

    error PaymentNotFound();

    error InvalidPaymentStatus();

    error PaymentExpired();

    error PaymentAlreadyPaid();

    error Unauthorized();

    error InvalidAmount();

    error InvalidToken();

}