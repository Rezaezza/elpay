export const elPayEscrowAbi = [
  /* -------------------------------------------------------------------------- */
  /*                               Write Functions                              */
  /* -------------------------------------------------------------------------- */

  {
    type: "function",
    name: "deposit",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "paymentId",
        type: "bytes32",
      },
      {
        name: "token",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
    ],
    outputs: [],
  },

  {
    type: "function",
    name: "release",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "paymentId",
        type: "bytes32",
      },
    ],
    outputs: [],
  },

  {
    type: "function",
    name: "setPaymentProcessor",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "processor",
        type: "address",
      },
    ],
    outputs: [],
  },

  /* -------------------------------------------------------------------------- */
  /*                                View Functions                              */
  /* -------------------------------------------------------------------------- */

  {
    type: "function",
    name: "escrowExists",
    stateMutability: "view",
    inputs: [
      {
        name: "paymentId",
        type: "bytes32",
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
    name: "getEscrow",
    stateMutability: "view",
    inputs: [
      {
        name: "paymentId",
        type: "bytes32",
      },
    ],
    outputs: [
      {
        components: [
          {
            name: "paymentId",
            type: "bytes32",
          },
          {
            name: "token",
            type: "address",
          },
          {
            name: "amount",
            type: "uint256",
          },
          {
            name: "released",
            type: "bool",
          },
        ],
        type: "tuple",
      },
    ],
  },

  {
    type: "function",
    name: "isReleased",
    stateMutability: "view",
    inputs: [
      {
        name: "paymentId",
        type: "bytes32",
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
    name: "canRelease",
    stateMutability: "view",
    inputs: [
      {
        name: "paymentId",
        type: "bytes32",
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
    name: "paymentProcessor",
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
    name: "owner",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        type: "address",
      },
    ],
  },

  /* -------------------------------------------------------------------------- */
  /*                                   Events                                   */
  /* -------------------------------------------------------------------------- */

  {
    type: "event",
    name: "EscrowCreated",
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "paymentId",
        type: "bytes32",
      },
      {
        indexed: true,
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256",
      },
    ],
  },

  {
    type: "event",
    name: "EscrowReleaseStarted",
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "paymentId",
        type: "bytes32",
      },
    ],
  },

  {
    type: "event",
    name: "EscrowReleased",
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "paymentId",
        type: "bytes32",
      },
    ],
  },
] as const;