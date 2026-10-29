"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[\w\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    // Demo only — no real backend
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
    setMessage("You're on the list. Thanks for joining.");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status !== "idle") setStatus("idle");
        }}
        placeholder="Your email address"
        className="flex-1 h-12 px-4 bg-black border border-border text-white placeholder:text-muted text-sm focus:outline-none focus:border-red"
        disabled={status === "loading"}
        aria-label="Email address"
      />
      <Button type="submit" size="md" disabled={status === "loading"}>
        {status === "loading" ? "Joining..." : "Join"}
      </Button>
      {status === "success" && (
        <p className="text-sm text-green-400 sm:absolute sm:mt-14">{message}</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red sm:absolute sm:mt-14">{message}</p>
      )}
    </form>
  );
}
