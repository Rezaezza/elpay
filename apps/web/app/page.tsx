import DashboardHero from "@/components/dashboard/DashboardHero";
import RecentActivity from "@/components/dashboard/RecentActivity";
import LatestPayments from "@/components/dashboard/LatestPayments";

export default function Home() {
  return (
    <div className="space-y-8">
      <DashboardHero />

      <RecentActivity />

      <LatestPayments />
    </div>
  );
}