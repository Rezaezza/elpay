export const merchantRegistryAbi = [
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
            name: "merchant",
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
            name: "active",
            type: "bool",
          },
          {
            name: "registeredAt",
            type: "uint64",
          },
        ],
        type: "tuple",
      },
    ],
  },
] as const;