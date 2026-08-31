import {
  DashboardHero,
  RecentActivity,
} from "@/components/dashboard";

export default function Home() {
  return (
    <div className="space-y-8">
      <DashboardHero />

      <RecentActivity />

    </div>
  );
}