import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DistributorForm } from "@/components/forms/DistributorForm";

export const metadata: Metadata = {
  title: "Become a Distributor",
  description:
    "Partner with POSADA TOOLS. Join our network of distributors and bring professional-grade tools to your market.",
};

export default function DistributorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-black border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-red text-xs font-bold uppercase tracking-[0.3em] mb-4">
              Partner With Us
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[0.95] mb-6">
              Become a<br />Distributor
            </h1>
            <p className="text-lg text-metallic max-w-xl leading-relaxed mb-8">
              Join the POSADA TOOLS network. We work with serious partners who
              understand professional tools and the people who use them.
            </p>
            <p className="text-sm text-muted">
              Already a partner?{" "}
              <Link
                href="/distributors/dashboard"
                className="text-white underline underline-offset-4 hover:text-metallic transition-colors"
              >
                Sign in to the Distributor Portal
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-20 bg-charcoal border-b border-border">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wider text-white mb-12 text-center">
            Why Partner With POSADA TOOLS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Focused Product Line",
                text: "A clear, practical range of power tools, batteries, and accessories designed for real work — not marketing noise.",
              },
              {
                title: "Professional Positioning",
                text: "Premium industrial brand identity that resonates with contractors, workshops, and serious tradespeople.",
              },
              {
                title: "Competitive Margins",
                text: "Structured wholesale pricing designed to support healthy distributor and retailer margins.",
              },
              {
                title: "Marketing Support",
                text: "Product imagery, brand assets, and sales materials to help you present the line professionally.",
              },
              {
                title: "Reliable Supply",
                text: "Clear communication on inventory and lead times so you can plan with confidence.",
              },
              {
                title: "Direct Relationship",
                text: "Work directly with the brand. No layers of bureaucracy between you and the decisions that matter.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-border bg-black p-6"
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We're Looking For */}
      <section className="py-20 bg-black border-b border-border">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wider text-white mb-6">
                Who We Work With
              </h2>
              <p className="text-metallic leading-relaxed mb-8">
                We partner with established distributors and specialty retailers
                who already serve professional and serious DIY customers.
              </p>
              <ul className="space-y-4">
                {[
                  "Regional or national tool distributors",
                  "Specialty industrial and construction supply houses",
                  "Established online retailers with a professional audience",
                  "Companies with existing sales teams and warehouse capacity",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted">
                    <span className="text-red mt-0.5 shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wider text-white mb-6">
                What We Expect
              </h2>
              <ul className="space-y-4">
                {[
                  "Active presence in professional or prosumer tool markets",
                  "Ability to stock and support the product line",
                  "Commitment to brand standards and pricing integrity",
                  "Clear communication and professional account management",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted">
                    <span className="text-red mt-0.5 shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-charcoal border-b border-border">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wider text-white mb-12 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Submit Inquiry", text: "Tell us about your company, territory, and experience." },
              { step: "02", title: "Review", text: "We evaluate fit, market coverage, and capacity." },
              { step: "03", title: "Discussion", text: "A direct conversation about terms, support, and expectations." },
              { step: "04", title: "Onboarding", text: "Agreements, pricing, assets, and first order support." },
            ].map((item) => (
              <div key={item.step} className="text-center md:text-left">
                <span className="block text-red text-xs font-bold tracking-[0.2em] mb-3">
                  {item.step}
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-black">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wider text-white mb-4">
              Start the Conversation
            </h2>
            <p className="text-sm text-muted max-w-lg mx-auto">
              Fill out the form below. We review every serious inquiry and respond
              within a few business days.
            </p>
          </div>
          <DistributorForm />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-charcoal border-t border-border">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted">
            Already a distributor?{" "}
            <Link href="/distributors/dashboard" className="text-white underline underline-offset-4 hover:text-metallic">
              Access the portal
            </Link>
          </p>
          <Link href="/contact">
            <Button variant="outline" size="sm">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
