"use client";

import { MerchantStatus } from "./MerchantStatus";

type Props = {
  wallet: string;
  name: string;
  metadataURI: string;
  active: boolean;
};

export function MerchantCard({
  wallet,
  name,
  metadataURI,
  active,
}: Props) {

  let website = "-";
  let description = "-";

  try {
    const metadata = JSON.parse(metadataURI);

    website = metadata.website ?? "-";
    description = metadata.description ?? "-";
  } catch {
    // metadataURI bukan JSON
  }

  return (
    <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-xl font-bold">
          Merchant Information
        </h2>

        <MerchantStatus active={active} />

      </div>

      <div className="space-y-4">

        <div>
          <p className="text-sm text-muted-foreground">
            Wallet
          </p>

          <p className="break-all font-mono text-xs">
            {wallet}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Merchant Name
          </p>

          <p>{name}</p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Website
          </p>

          <p>{website}</p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Description
          </p>

          <p>{description}</p>
        </div>

      </div>

    </div>
  );
}