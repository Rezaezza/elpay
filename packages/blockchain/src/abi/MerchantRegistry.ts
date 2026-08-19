export const merchantRegistryAbi = [
  /* -------------------------------------------------------------------------- */
  /*                                Write                                       */
  /* -------------------------------------------------------------------------- */

  {
    type: "function",
    name: "registerMerchant",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "name",
        type: "string",
      },
      {
        name: "metadataURI",
        type: "string",
      },
    ],
    outputs: [],
  },

  {
    type: "function",
    name: "updateMerchant",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "name",
        type: "string",
      },
      {
        name: "metadataURI",
        type: "string",
      },
    ],
    outputs: [],
  },

  {
    type: "function",
    name: "pauseMerchant",
    stateMutability: "nonpayable",
    inputs: [],
    outputs: [],
  },

  {
    type: "function",
    name: "activateMerchant",
    stateMutability: "nonpayable",
    inputs: [],
    outputs: [],
  },

  {
    type: "function",
    name: "disableMerchant",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "merchant",
        type: "address",
      },
    ],
    outputs: [],
  },

  /* -------------------------------------------------------------------------- */
  /*                                  Read                                      */
  /* -------------------------------------------------------------------------- */

  {
    type: "function",
    name: "owner",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        type: "address",
      },
    ],
  },

  {
    type: "function",
    name: "isActive",
    stateMutability: "view",
    inputs: [
      {
        name: "merchant",
        type: "address",
      },
    ],
    outputs: [
      {
        type: "bool",
      },
    ],
  },

  {
    type: "function",
    name: "getMerchant",
    stateMutability: "view",
    inputs: [
      {
        name: "merchant",
        type: "address",
      },
    ],
    outputs: [
      {
        components: [
          {
            name: "owner",
            type: "address",
          },
          {
            name: "name",
            type: "string",
          },
          {
            name: "metadataURI",
            type: "string",
          },
          {
            name: "status",
            type: "uint8",
          },
          {
            name: "createdAt",
            type: "uint64",
          },
        ],
        type: "tuple",
      },
    ],
  },

  /* -------------------------------------------------------------------------- */
  /*                                  Events                                    */
  /* -------------------------------------------------------------------------- */

  {
    type: "event",
    name: "MerchantRegistered",
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "merchant",
        type: "address",
      },
      {
        indexed: false,
        name: "name",
        type: "string",
      },
    ],
  },

  {
    type: "event",
    name: "MerchantUpdated",
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "merchant",
        type: "address",
      },
    ],
  },

  {
    type: "event",
    name: "MerchantPaused",
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "merchant",
        type: "address",
      },
    ],
  },

  {
    type: "event",
    name: "MerchantActivated",
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "merchant",
        type: "address",
      },
    ],
  },
] as const;