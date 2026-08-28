export function getPaymentStatus(status: number) {
  switch (status) {
    case 0:
      return {
        label: "Created",
        color: "text-yellow-300",
        bg: "bg-yellow-500/20 border border-yellow-500/40",
      };

    case 1:
      return {
        label: "Approved",
        color: "text-blue-300",
        bg: "bg-blue-500/20 border border-blue-500/40",
      };

    case 2:
      return {
        label: "Processing",
        color: "text-orange-300",
        bg: "bg-orange-500/20 border border-orange-500/40",
      };

    case 3:
      return {
        label: "Paid",
        color: "text-green-300",
        bg: "bg-green-500/20 border border-green-500/40",
      };

    case 4:
      return {
        label: "Refunded",
        color: "text-red-300",
        bg: "bg-red-500/20 border border-red-500/40",
      };

    case 5:
      return {
        label: "Cancelled",
        color: "text-gray-300",
        bg: "bg-gray-500/20 border border-gray-500/40",
      };

    case 6:
      return {
        label: "Expired",
        color: "text-purple-300",
        bg: "bg-purple-500/20 border border-purple-500/40",
      };

    default:
      return {
        label: "Unknown",
        color: "text-slate-300",
        bg: "bg-slate-500/20 border border-slate-500/40",
      };
  }
}