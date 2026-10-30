import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Sponsorship opportunities with POSADA TOOLS — events, teams, and programs that align with professional work.",
};

export default function SponsorsPage() {
  return (
    <>
      <section className="relative bg-black border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-red text-xs font-bold uppercase tracking-[0.3em] mb-4">
              Support & Visibility
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[0.95] mb-6">
              Sponsors
            </h1>
            <p className="text-lg text-metallic max-w-xl leading-relaxed">
              We partner with brands and organizations that support skilled trades,
              professional events, and communities built around real work.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal border-b border-border">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wider text-white mb-12 text-center">
            Sponsorship Focus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Trade & Skills Events",
                text: "Competitions, trade shows, and skills showcases that celebrate craftsmanship and professional excellence.",
              },
              {
                title: "Training & Education",
                text: "Programs that help the next generation of tradespeople develop real, job-ready skills.",
              },
              {
                title: "Teams & Creators",
                text: "Select teams, builders, and creators whose work reflects practical performance and integrity.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-border bg-black p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black border-b border-border">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wider text-white mb-6">
              Current Sponsors
            </h2>
            <p className="text-metallic leading-relaxed mb-10">
              Sponsor relationships will be listed here as they are confirmed.
              We keep this page reserved for genuine, active partnerships.
            </p>
            <div className="border border-border bg-charcoal p-12 text-center">
              <p className="text-sm text-muted uppercase tracking-wider">
                No active sponsors listed yet
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wider text-white mb-4">
            Interested in Sponsoring?
          </h2>
          <p className="text-sm text-muted mb-8 max-w-lg mx-auto">
            Tell us about your brand, audience, and the type of collaboration you
            have in mind. We evaluate opportunities based on fit and mutual value.
          </p>
          <Link href="/contact">
            <Button size="lg">Get in Touch</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
