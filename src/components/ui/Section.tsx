import { cn } from "@/lib/utils";

type SectionTone = "dark" | "light";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
  tone = "dark",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  tone?: SectionTone;
}) {
  return (
    <section
      id={id}
      className={cn("band scroll-mt-24", tone === "light" ? "band-light" : "band-dark", className)}
    >
      <div className="mb-8 sm:mb-10">
        {eyebrow ? (
          <div className="text-xs font-medium tracking-wide text-white/60">{eyebrow}</div>
        ) : null}
        <h2 className="mt-2 font-[var(--font-sora)] text-2xl text-white sm:text-3xl">
          {title}
        </h2>
        {subtitle ? <p className="mt-3 max-w-2xl text-sm text-white/65 sm:text-base">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
