import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wider text-white mb-8">
        About Us
      </h1>
      <div className="text-metallic space-y-4 leading-relaxed">
        <p>
          POSADA TOOLS is building a modern tool brand focused on practical design, useful features,
          and professional presentation. We believe good tools should be straightforward, durable,
          and ready for the work ahead.
        </p>
        <p>
          This is a demonstration storefront. All product data, pricing, and policies shown are for
          illustrative purposes only.
        </p>
      </div>
    </div>
  );
}
