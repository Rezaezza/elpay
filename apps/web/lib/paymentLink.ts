export function paymentLink(paymentId: string) {
  return `${window.location.origin}/pay/${paymentId}`;
}