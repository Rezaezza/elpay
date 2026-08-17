export const paymentProcessorAbi = [
  {
    type: "function",
    name: "createPayment",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "payer",
        type: "address",
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
    outputs: [
      {
        name: "paymentId",
        type: "bytes32",
      },
    ],
  },

  {
    type: "function",
    name: "approvePayment",
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
    name: "cancelPayment",
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
    name: "executePayment",
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
    name: "refundPayment",
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
    name: "releaseEscrow",
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
    name: "getPayment",
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
            name: "id",
            type: "bytes32",
          },
          {
            name: "payer",
            type: "address",
          },
          {
            name: "merchant",
            type: "address",
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
            name: "status",
            type: "uint8",
          },
          {
            name: "createdAt",
            type: "uint64",
          },
          {
            name: "expiresAt",
            type: "uint64",
          },
          {
            name: "description",
            type: "string",
          },
        ],
        type: "tuple",
      },
    ],
  },

  {
    type: "function",
    name: "paymentExistsView",
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

 /* -------------------------------------------------------------------------- */
/*                                   Events                                   */
/* -------------------------------------------------------------------------- */

{
  type: "event",
  name: "PaymentCreated",
  anonymous: false,
  inputs: [
    {
      indexed: true,
      name: "paymentId",
      type: "bytes32",
    },
    {
      indexed: true,
      name: "payer",
      type: "address",
    },
    {
      indexed: true,
      name: "merchant",
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
  name: "PaymentApproved",
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
  name: "PaymentProcessing",
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
  name: "PaymentCompleted",
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
  name: "PaymentPaid",
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
  name: "PaymentCancelled",
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
  name: "PaymentRefunded",
  anonymous: false,
  inputs: [
    {
      indexed: true,
      name: "paymentId",
      type: "bytes32",
    },
  ],
},

/* -------------------------------------------------------------------------- */
/*                                   Events                                   */
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

{
  type: "event",
  name: "EscrowRefunded",
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
  name: "paymentCount",
  stateMutability: "view",
  inputs: [],
  outputs: [
    {
      type: "uint256",
    },
  ],
},
] as const;