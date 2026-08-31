import {
  InvoiceList,
  InvoiceStats,
} from "@/components/invoices";

export default function InvoicesPage() {
  return (
    <div className="space-y-8">

      <InvoiceStats />

      <InvoiceList />

    </div>
  );
}