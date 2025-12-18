"use client";

import { Section } from "@/components/ui/Section";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { ArrowRightLeft, Bot, Film, MousePointerClick, Shield, Wand2 } from "lucide-react";

const items = [
  {
    icon: <Bot className="h-5 w-5" />,
    title: "Support agents that actually resolve",
    desc: "Visual agents that see the interface, understand the issue, and complete workflows — not just reply with articles.",
    tag: "Automation",
  },
  {
    icon: <MousePointerClick className="h-5 w-5" />,
    title: "Live, adaptive product demos",
    desc: "A human-like video agent that demos your product in real time, responds to questions, and adapts the flow to the prospect.",
    tag: "Enablement",
  },
  {
    icon: <ArrowRightLeft className="h-5 w-5" />,
    title: "Visual step-by-step onboarding",
    desc: "Agents highlight UI, explain intent, and walk users through setup — without long back-and-forth or screen shares.",
    tag: "Guidance",
  },
  {
    icon: <Film className="h-5 w-5" />,
    title: "Contextual training that stays current",
    desc: "Training generated directly from your product and workflows — so users learn by doing, not watching outdated videos.",
    tag: "Enablement",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Consent-first by default",
    desc: "Build guardrails: consent prompts, redaction, least-privilege control, and audit logs.",
    tag: "Security",
  },
  {
    icon: <Wand2 className="h-5 w-5" />,
    title: "Video-avatar interface",
    desc: "A visual persona where trust, reassurance, or explanation matters",
    tag: "Video",
  },
];

export function Capabilities() {
  return (
    <Section
      id="product"
      eyebrow="PRODUCT"
      title="One platform, Every customer moment"
      subtitle="From first demo to daily support, Interlayer adapts how it shows up — explaining, guiding, or executing when needed."
      tone="light"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, idx) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: idx * 0.04 }}
          >
            <Card className="h-full">
              <CardHeader
                title={it.title}
                description={it.desc}
                right={<Badge className="bg-white/8">{it.tag}</Badge>}
              />
              
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
