import { ConnectWalletButton } from "../src/components/ConnectWalletButton";
import { LoginButton } from "../src/components/LoginButton";

export default function Home() {
  return (
 <div className="flex flex-col gap-4">
  <ConnectWalletButton />

  <LoginButton />
</div>
  );
}