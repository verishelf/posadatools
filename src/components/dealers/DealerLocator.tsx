"use client";

import { useState, useMemo } from "react";
import { Search, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Demo dealer data — replace with real locations / API later
const demoDealers = [
  {
    id: "1",
    name: "Home Depot — Downtown",
    type: "Home Depot",
    address: "1200 Main Street",
    city: "Austin",
    state: "TX",
    zip: "78701",
    phone: "(512) 555-0142",
    hours: "Mon–Sat 6am–10pm, Sun 8am–8pm",
  },
  {
    id: "2",
    name: "Walmart Supercenter",
    type: "Walmart",
    address: "4500 Highway 290",
    city: "Austin",
    state: "TX",
    zip: "78735",
    phone: "(512) 555-0198",
    hours: "Open 24 hours",
  },
  {
    id: "3",
    name: "Lowe's Home Improvement",
    type: "Lowe's",
    address: "8800 Research Blvd",
    city: "Austin",
    state: "TX",
    zip: "78758",
    phone: "(512) 555-0167",
    hours: "Mon–Sat 6am–10pm, Sun 8am–8pm",
  },
  {
    id: "4",
    name: "Ace Hardware — Northside",
    type: "Ace Hardware",
    address: "2100 Burnet Road",
    city: "Austin",
    state: "TX",
    zip: "78757",
    phone: "(512) 555-0133",
    hours: "Mon–Fri 7am–7pm, Sat 8am–6pm, Sun 9am–5pm",
  },
  {
    id: "5",
    name: "Home Depot — Southpark",
    type: "Home Depot",
    address: "3600 Interstate 35 South",
    city: "Austin",
    state: "TX",
    zip: "78745",
    phone: "(512) 555-0181",
    hours: "Mon–Sat 6am–10pm, Sun 8am–8pm",
  },
  {
    id: "6",
    name: "Walmart — Round Rock",
    type: "Walmart",
    address: "2701 Parker Road",
    city: "Round Rock",
    state: "TX",
    zip: "78681",
    phone: "(512) 555-0155",
    hours: "Open 24 hours",
  },
  {
    id: "7",
    name: "Home Depot — Dallas Central",
    type: "Home Depot",
    address: "10300 East Northwest Hwy",
    city: "Dallas",
    state: "TX",
    zip: "75238",
    phone: "(214) 555-0120",
    hours: "Mon–Sat 6am–10pm, Sun 8am–8pm",
  },
  {
    id: "8",
    name: "Lowe's — Plano",
    type: "Lowe's",
    address: "4701 West Park Blvd",
    city: "Plano",
    state: "TX",
    zip: "75093",
    phone: "(972) 555-0144",
    hours: "Mon–Sat 6am–10pm, Sun 8am–8pm",
  },
  {
    id: "9",
    name: "Ace Hardware — Fort Worth",
    type: "Ace Hardware",
    address: "5400 Camp Bowie Blvd",
    city: "Fort Worth",
    state: "TX",
    zip: "76107",
    phone: "(817) 555-0172",
    hours: "Mon–Sat 8am–7pm, Sun 9am–5pm",
  },
  {
    id: "10",
    name: "Home Depot — Houston West",
    type: "Home Depot",
    address: "10505 West Sam Houston Pkwy",
    city: "Houston",
    state: "TX",
    zip: "77064",
    phone: "(281) 555-0190",
    hours: "Mon–Sat 6am–10pm, Sun 8am–8pm",
  },
];

export function DealerLocator() {
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);

  const results = useMemo(() => {
    if (!searched || !query.trim()) return [];
    const q = query.toLowerCase().trim();
    return demoDealers.filter(
      (d) =>
        d.city.toLowerCase().includes(q) ||
        d.state.toLowerCase().includes(q) ||
        d.zip.includes(q) ||
        d.name.toLowerCase().includes(q) ||
        d.type.toLowerCase().includes(q) ||
        `${d.city}, ${d.state}`.toLowerCase().includes(q)
    );
  }, [query, searched]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              if (searched) setSearched(false);
            }}
            placeholder="City, state, or ZIP code"
            className="w-full h-12 pl-11 pr-4 bg-charcoal border border-border text-white text-sm placeholder:text-muted/60 focus:outline-none focus:border-red"
          />
        </div>
        <Button type="submit" size="lg" className="h-12 px-8">
          Search
        </Button>
      </form>

      {!searched && (
        <p className="text-sm text-muted text-center">
          Try searching &quot;Austin&quot;, &quot;Dallas&quot;, &quot;Houston&quot;, or a ZIP like &quot;78701&quot;.
        </p>
      )}

      {searched && results.length === 0 && (
        <div className="border border-border bg-charcoal p-8 text-center">
          <MapPin className="h-8 w-8 text-muted mx-auto mb-3" />
          <p className="text-white font-semibold mb-2">No dealers found</p>
          <p className="text-sm text-muted">
            No demo locations match &quot;{query}&quot;. Try Austin, Dallas, Houston, or Plano.
          </p>
        </div>
      )}

      {searched && results.length > 0 && (
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-wider text-muted">
            {results.length} location{results.length !== 1 ? "s" : ""} found
          </p>
          {results.map((dealer) => (
            <div
              key={dealer.id}
              className="border border-border bg-charcoal p-5 flex flex-col sm:flex-row sm:items-start justify-between gap-4"
            >
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-red mb-1">
                  {dealer.type}
                </p>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2">
                  {dealer.name}
                </h3>
                <p className="text-sm text-muted">
                  {dealer.address}
                  <br />
                  {dealer.city}, {dealer.state} {dealer.zip}
                </p>
                <p className="text-sm text-muted mt-2">{dealer.phone}</p>
                <p className="text-xs text-muted mt-1">{dealer.hours}</p>
              </div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  `${dealer.address}, ${dealer.city}, ${dealer.state} ${dealer.zip}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
              >
                <Button variant="outline" size="sm" className="gap-2">
                  <ExternalLink className="h-3.5 w-3.5" />
                  Directions
                </Button>
              </a>
            </div>
          ))}
          <p className="text-xs text-muted pt-2">
            Demo locations only — not real inventory. Replace with live dealer data in production.
          </p>
        </div>
      )}
    </div>
  );
}
