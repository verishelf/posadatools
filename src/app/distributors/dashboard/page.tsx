import { Metadata } from "next";
import { DistributorDashboard } from "@/components/distributors/DistributorDashboard";

export const metadata: Metadata = {
  title: "Distributor Dashboard",
  description: "POSADA TOOLS distributor portal — orders, pricing, and resources.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DistributorDashboardPage() {
  return <DistributorDashboard />;
}
