import {
  DashboardHero,
  RecentActivity,
  LatestPayments,
} from "@/components/dashboard";

export default function Home() {
  return (
    <div className="space-y-8">
      <DashboardHero />

      <RecentActivity />

      <LatestPayments />
    </div>
  );
}