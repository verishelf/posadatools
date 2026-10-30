import { Metadata } from "next";
import { SupplierPortal } from "@/components/suppliers/SupplierPortal";

export const metadata: Metadata = {
  title: "Supplier Portal",
  description: "POSADA TOOLS supplier portal — POs, specs, and documents.",
  robots: { index: false, follow: false },
};

export default function SupplierPortalPage() {
  return <SupplierPortal />;
}
