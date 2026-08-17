export const elPayEscrowAbi = [
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
] as const;