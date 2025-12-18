import { Section } from "@/components/ui/Section";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Headphones, GraduationCap, Presentation, Wrench } from "lucide-react";

const cases = [
  {
    icon: <Headphones className="h-5 w-5" />,
    title: "Customer support",
    desc: "Resolve issues visually. Agents see the interface, guide actions step-by-step, and complete workflows when users get stuck.",
    tag: "Support",
    note: "Best for complex products with recurring “how do I…?” tickets. Fewer repeat tickets. Faster resolution. Less hand-holding.",
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "Pre Sales",
    desc: "Teach users inside the product. Explain why something works while they’re doing it — not after they’re confused.",
    tag: "Pre Sales",
    note: "Works when documentation exists but isn’t being read.",
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    title: "Onboarding",
    desc: "Turn setup into a guided experience with visual cues, and a human-like agent that adapts to user intent.",
    tag: "Onboarding",
    note: "24/7 Onboarding and Training via human like visual AI agent.",
  },
  {
    icon: <Presentation className="h-5 w-5" />,
    title: "Product demos",
    desc: "“Prospects want to see their workflow — not a generic demo.” InterLayer runs live, 24/7 adaptive demos using visual AI agent that shows real workflows and answers every question like a human.",
    tag: "Sales",
    note: "Shorter sales cycles. More qualified conversations.",
  },
];

export function UseCases() {
  return (
    <Section
      id="use-cases"
      eyebrow="USE CASES"
      title="Where InterLayer wins"
      subtitle="For workflows where knowledge text fails: multi-step UIs, unfamiliar products, and moments where users can’t afford to guess."
      tone="light"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {cases.map((c) => (
          <Card key={c.title}>
            <CardHeader title={c.title} description={c.desc} right={<Badge className="bg-white/8">{c.tag}</Badge>} />
            <CardContent>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/8">{c.icon}</span>
                <span>{c.note}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
