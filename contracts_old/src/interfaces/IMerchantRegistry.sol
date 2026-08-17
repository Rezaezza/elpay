// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

interface IMerchantRegistry {

    function registerMerchant()
        external;

    function isMerchant(
        address merchant
    )
        external
        view
        returns (bool);
}