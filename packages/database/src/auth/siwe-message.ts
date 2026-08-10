export function createSignMessage(

  address: string,

  nonce: string,

) {

  return [

    "Welcome to ElPay",

    "",

    "Sign this message to authenticate.",

    "",

    `Wallet: ${address}`,

    `Nonce: ${nonce}`,

    "",

    "This request will not trigger a blockchain transaction.",

  ].join("\n");

}