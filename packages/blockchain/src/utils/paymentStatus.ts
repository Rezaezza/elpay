export function getPaymentStatus(status: number) {
  switch (status) {
    case 0:
      return {
        label: "Created",
        color: "text-yellow-600",
        bg: "bg-yellow-100",
      };

    case 1:
      return {
        label: "Approved",
        color: "text-blue-600",
        bg: "bg-blue-100",
      };

    case 2:
      return {
        label: "Processing",
        color: "text-orange-600",
        bg: "bg-orange-100",
      };

    case 3:
      return {
        label: "Paid",
        color: "text-green-600",
        bg: "bg-green-100",
      };

    case 4:
      return {
        label: "Refunded",
        color: "text-red-600",
        bg: "bg-red-100",
      };

    case 5:
      return {
        label: "Cancelled",
        color: "text-gray-600",
        bg: "bg-gray-200",
      };

    case 6:
      return {
        label: "Expired",
        color: "text-purple-600",
        bg: "bg-purple-100",
      };

    default:
      return {
        label: "Unknown",
        color: "text-gray-600",
        bg: "bg-gray-100",
      };
  }
}