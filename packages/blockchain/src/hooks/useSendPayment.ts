import { useMutation } from "@tanstack/react-query";

import { sendPayment } from "../services";

export function useSendPayment() {
  return useMutation({
    mutationFn: ({
      receiver,
      amount,
    }: {
      receiver: `0x${string}`;
      amount: string;
    }) =>
      sendPayment(receiver, amount),
  });
}