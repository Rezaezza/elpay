import {
  DashboardHero,
  RecentActivity,
  LatestPayments,
} from "@/components/dashboard";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardHero />

      <RecentActivity />

      <LatestPayments />
    </div>
  );
}