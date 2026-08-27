export interface DashboardPayment {
  id: `0x${string}`;
  payer: `0x${string}`;
  merchant: `0x${string}`;
  token: `0x${string}`;
  amount: bigint;
  status: number;
  createdAt: bigint;
  expiresAt: bigint;
  description: string;
}

export interface DashboardStats {
  merchant?: {
    owner: `0x${string}`;
    name: string;
    metadataURI: string;
    status: number;
    createdAt: bigint;
  };

  totalPayments: number;

  paidPayments: number;

  processingPayments: number;

  refundedPayments: number;

  cancelledPayments: number;

  createdPayments: number;

  totalVolume: bigint;

  payments: DashboardPayment[];
}