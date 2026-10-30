"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function SupplierForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    company: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    category: "",
    capabilities: "",
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
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
    setForm({
      company: "",
      contactName: "",
      email: "",
      phone: "",
      website: "",
      category: "",
      capabilities: "",
      message: "",
    });
  };

  if (status === "success") {
    return (
      <div className="border border-border bg-black p-8 text-center">
        <p className="text-white font-semibold mb-2">Inquiry Received</p>
        <p className="text-sm text-muted">
          Thank you. Our supply chain team will review and respond if there is a potential fit.
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
    <form onSubmit={handleSubmit} className="space-y-6 border border-border bg-black p-6 sm:p-8">
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
            className="w-full h-11 px-4 bg-charcoal border border-border text-white text-sm focus:outline-none focus:border-red"
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
            className="w-full h-11 px-4 bg-charcoal border border-border text-white text-sm focus:outline-none focus:border-red"
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
            className="w-full h-11 px-4 bg-charcoal border border-border text-white text-sm focus:outline-none focus:border-red"
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
            className="w-full h-11 px-4 bg-charcoal border border-border text-white text-sm focus:outline-none focus:border-red"
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
            className="w-full h-11 px-4 bg-charcoal border border-border text-white text-sm placeholder:text-muted/50 focus:outline-none focus:border-red"
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
            Primary Category
          </label>
          <select
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full h-11 px-4 bg-charcoal border border-border text-white text-sm focus:outline-none focus:border-red"
          >
            <option value="">Select...</option>
            <option value="motors">Motors & Electronics</option>
            <option value="batteries">Batteries & Charging</option>
            <option value="mechanical">Mechanical Components</option>
            <option value="materials">Materials & Finishes</option>
            <option value="manufacturing">Manufacturing Services</option>
            <option value="packaging">Packaging & Logistics</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="capabilities" className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
          Key Capabilities
        </label>
        <input
          id="capabilities"
          name="capabilities"
          type="text"
          value={form.capabilities}
          onChange={handleChange}
          placeholder="e.g. Brushless motor manufacturing, IP67 assemblies"
          className="w-full h-11 px-4 bg-charcoal border border-border text-white text-sm placeholder:text-muted/50 focus:outline-none focus:border-red"
        />
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
          placeholder="Certifications, capacity, locations, relevant experience..."
          className="w-full px-4 py-3 bg-charcoal border border-border text-white text-sm placeholder:text-muted/50 focus:outline-none focus:border-red resize-y"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red">Please fill in all required fields with a valid email.</p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Submit Inquiry"}
      </Button>

      <p className="text-xs text-muted">
        Demo form — will connect to your backend or procurement system in production.
      </p>
    </form>
  );
}
