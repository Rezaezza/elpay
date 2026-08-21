import { ConnectWalletButton } from "@/components/wallet/ConnectWalletButton";
import { LoginButton } from "@/components/wallet/LoginButton";
export default function Home() {
  return (
 <div className="flex flex-col gap-4">
  <ConnectWalletButton />

  <LoginButton />
</div>
  );
}