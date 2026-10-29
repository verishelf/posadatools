import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wider text-white mb-8">
        Contact
      </h1>
      <div className="text-metallic space-y-4 leading-relaxed">
        <p>
          For questions about POSADA TOOLS products or support, please reach out using the
          information that will be published here when the brand launches.
        </p>
        <p>
          This is a demonstration storefront. Contact details are not yet configured.
        </p>
      </div>
    </div>
  );
}
