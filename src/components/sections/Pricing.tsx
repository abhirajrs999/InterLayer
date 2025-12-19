"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$99",
    note: "/ mo",
    desc: "For early teams proving the wedge.",
    bullets: ["1 product environment", "Visual step-by-step guidance (limited flows)", "Basic ticket deflection", "Email + async support"],
    cta: "Start Pilot",
    href: "https://calendly.com/abhiraj-interlayer/30min",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$199",
    note: "/ mo",
    desc: "For teams replacing manual support, demos, and onboarding.",
    bullets: [
      "Multi-channel agent (in-app + email)",
      "Visual UI overlays + action execution",
      "Human handoff with full context",
      "Audit logs + retention insights",
    ],
    cta: "Request Demo",
    href: "https://calendly.com/abhiraj-interlayer/30min",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    note: "",
    desc: "For complex products with security, scale, and compliance needs.",
    bullets: [
      "SSO + SCIM",
      "Custom interaction policies",
      "Dedicated infra & SLAs",
      "Security + procurement support",
    ],
    cta: "Talk to Sales",
    href: "https://calendly.com/abhiraj-interlayer/30min",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow="PRICING"
      title="Pricing that scales with complexity"
      subtitle="Pay for outcomes, not seats or tickets."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.name}>
            <Card className={t.highlight ? "glow h-full" : "h-full"}>
              <div className="flex h-full flex-col p-6">
                <div className="flex items-center justify-between">
                  <div className="font-[var(--font-sora)] text-lg">{t.name}</div>
                  {t.highlight ? (
                    <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs text-white/80">
                      Most popular
                    </span>
                  ) : null}
                </div>

                <div className="mt-4 flex items-end gap-2">
                  <div className="text-4xl font-semibold tracking-tight">{t.price}</div>
                  <div className="pb-1 text-sm text-white/60">{t.note}</div>
                </div>
                <div className="mt-2 text-sm text-white/65">{t.desc}</div>

                <div className="mt-5 space-y-2">
                  {t.bullets.map((b) => (
                    <div key={b} className="flex items-start gap-2 text-sm text-white/75">
                      <Check className="mt-0.5 h-4 w-4 text-white/70" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  <ButtonLink href={t.href} variant={t.highlight ? "primary" : "secondary"} size="lg" className="w-full">
                    {t.cta}
                  </ButtonLink>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
