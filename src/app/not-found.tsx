import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 text-center">
      <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold uppercase tracking-wider text-white mb-4">
        404
      </h1>
      <p className="text-metallic mb-8">Page not found.</p>
      <Link href="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
}
