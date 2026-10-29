import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wider text-white mb-8">
        Privacy Policy
      </h1>
      <div className="text-metallic space-y-4 leading-relaxed">
        <p>
          Privacy policy content will be published here before launch. This is a demonstration
          storefront only.
        </p>
      </div>
    </div>
  );
}
