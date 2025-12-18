"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Does this replace human support, onboarding, and demos?",
    a: [
      "Yes, for the majority of workflows.",
      "Interlayer is designed to fully handle:",
      "Repetitive support issues",
      "Standard onboarding flows",
      "Product demos and training",
      "Humans are only required for true exceptions. Most teams use Interlayer to avoid hiring or backfilling roles.",
    ],
  },
  {
    q: "Why not just use chatbots or voice AI?",
    a: [
      "Because they still require humans.",
      "Chatbots explain. Interlayer executes.",
      "Voice AI answers. Interlayer completes.",
      "That’s the difference between automation and replacement.",
    ],
  },
  {
    q: "How much human oversight is required?",
    a: [
      "Minimal.",
      "Teams configure flows and permissions upfront.",
      "After that, Interlayer runs continuously without day-to-day human involvement.",
    ],
  },
  {
    q: "How do you handle privacy?",
    a: [
      "Consent prompts, redaction rules, audit logs, and strict data retention.",
    ],
  },
];

export function FAQ() {
  const [open, setOpen] = useState<string>(faqs[0].q);

  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Answers without the fluff"
      tone="light"
    >
      <div className="grid gap-3">
        {faqs.map((f) => {
          const isOpen = open === f.q;
          return (
            <Card key={f.q} className="overflow-hidden">
              <button
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                onClick={() => setOpen(isOpen ? "" : f.q)}
              >
                <div className="font-medium">{f.q}</div>
                <ChevronDown className={cn("h-5 w-5 text-white/60 transition", isOpen ? "rotate-180" : "")} />
              </button>
              {isOpen ? (
                <div className="border-t border-white/10 px-6 py-5 text-sm text-white/70">
                  {Array.isArray(f.a) ? (
                    <ul className="list-disc space-y-2 pl-5">
                      {f.a.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  ) : (
                    f.a
                  )}
                </div>
              ) : null}
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
