"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

export function Waitlist() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Failed request");
      }

      setStatus("success");
      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Check the Sheets webhook URL and try again."
      );
    }
  };

  return (
    <Section
      id="waitlist"
      eyebrow="JOIN THE WAITLIST"
      title="The interface is disappearing. Be early to what replaces it."
      subtitle="Stop scaling teams. Start scaling intelligence."
    >
      <Card className="p-6">
        <form onSubmit={onSubmit} className="grid gap-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Name"
              name="name"
              value={form.name}
              onChange={onChange}
              required
              placeholder="Jordan Lee"
            />
            <Field
              label="Company"
              name="company"
              value={form.company}
              onChange={onChange}
              required
              placeholder="Acme Inc."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Email"
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              required
              placeholder="you@company.com"
            />
            <Field
              label="Phone (optional)"
              type="tel"
              name="phone"
              value={form.phone}
              onChange={onChange}
              placeholder="+1 415 555 0131"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            
            <Button
              type="submit"
              size="lg"
              className="w-full sm:w-auto"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Submitting..." : "Join the waitlist"}
            </Button>
          </div>

          {status === "success" ? (
            <div className="rounded-3xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-white">
              Thanks — you’re on the list. Watch your inbox for next steps.
            </div>
          ) : null}
          {status === "error" ? (
            <div className="rounded-3xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {error}
            </div>
          ) : null}
        </form>
      </Card>
    </Section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="text-sm text-white/80">
      <div className="mb-1 font-medium">{label}</div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={cn(
          "w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
        )}
      />
    </label>
  );
}
