export const elPayFactoryAbi = [
  /* -------------------------------------------------------------------------- */
  /*                           Public Immutable Getter                          */
  /* -------------------------------------------------------------------------- */

  {
    type: "function",
    name: "registry",
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
    name: "processor",
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
    name: "escrow",
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
    name: "VERSION",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        type: "string",
      },
    ],
  },

  /* -------------------------------------------------------------------------- */
  /*                               View Functions                               */
  /* -------------------------------------------------------------------------- */

  {
    type: "function",
    name: "version",
    stateMutability: "pure",
    inputs: [],
    outputs: [
      {
        type: "string",
      },
    ],
  },

  {
    type: "function",
    name: "registryAddress",
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
    name: "processorAddress",
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
    name: "escrowAddress",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        type: "address",
      },
    ],
  },
] as const;