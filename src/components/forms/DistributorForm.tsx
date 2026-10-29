"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function DistributorForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    company: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    territory: "",
    experience: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.company || !form.contactName || !form.email) {
      setStatus("error");
      return;
    }

    if (!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(form.email)) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    // Demo only — no real backend yet
    await new Promise((r) => setTimeout(r, 1000));

    setStatus("success");
    setForm({
      company: "",
      contactName: "",
      email: "",
      phone: "",
      website: "",
      territory: "",
      experience: "",
      message: "",
    });
  };

  if (status === "success") {
    return (
      <div className="border border-border bg-charcoal p-8 text-center">
        <p className="text-white font-semibold mb-2">Inquiry Received</p>
        <p className="text-sm text-muted">
          Thank you. We will review your information and respond within a few business days.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-xs uppercase tracking-wider text-metallic hover:text-white transition-colors"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 border border-border bg-charcoal p-6 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
            Company Name *
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            value={form.company}
            onChange={handleChange}
            className="w-full h-11 px-4 bg-black border border-border text-white text-sm focus:outline-none focus:border-red"
          />
        </div>
        <div>
          <label htmlFor="contactName" className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
            Contact Name *
          </label>
          <input
            id="contactName"
            name="contactName"
            type="text"
            required
            value={form.contactName}
            onChange={handleChange}
            className="w-full h-11 px-4 bg-black border border-border text-white text-sm focus:outline-none focus:border-red"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full h-11 px-4 bg-black border border-border text-white text-sm focus:outline-none focus:border-red"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="w-full h-11 px-4 bg-black border border-border text-white text-sm focus:outline-none focus:border-red"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="website" className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
            Website
          </label>
          <input
            id="website"
            name="website"
            type="url"
            placeholder="https://"
            value={form.website}
            onChange={handleChange}
            className="w-full h-11 px-4 bg-black border border-border text-white text-sm placeholder:text-muted/50 focus:outline-none focus:border-red"
          />
        </div>
        <div>
          <label htmlFor="territory" className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
            Primary Territory / Region
          </label>
          <input
            id="territory"
            name="territory"
            type="text"
            value={form.territory}
            onChange={handleChange}
            className="w-full h-11 px-4 bg-black border border-border text-white text-sm focus:outline-none focus:border-red"
          />
        </div>
      </div>

      <div>
        <label htmlFor="experience" className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
          Experience with Power Tools / Industrial Supply
        </label>
        <select
          id="experience"
          name="experience"
          value={form.experience}
          onChange={handleChange}
          className="w-full h-11 px-4 bg-black border border-border text-white text-sm focus:outline-none focus:border-red"
        >
          <option value="">Select...</option>
          <option value="0-2">0–2 years</option>
          <option value="3-5">3–5 years</option>
          <option value="6-10">6–10 years</option>
          <option value="10+">10+ years</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
          Additional Information
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your business, customer base, and why you're interested in POSADA TOOLS."
          className="w-full px-4 py-3 bg-black border border-border text-white text-sm placeholder:text-muted/50 focus:outline-none focus:border-red resize-y"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red">
          Please fill in all required fields with a valid email address.
        </p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Submit Inquiry"}
      </Button>

      <p className="text-xs text-muted">
        This form is for demonstration purposes. In production it will connect to your backend or CRM.
      </p>
    </form>
  );
}
