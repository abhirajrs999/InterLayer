import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("border-shine rounded-3xl bg-white/4 backdrop-blur", className)}>
      {children}
    </div>
  );
}

export function CardHeader({
  title,
  description,
  right,
}: {
  title: string;
  description?: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-6 p-6">
      <div>
        <div className="font-[var(--font-sora)] text-lg text-white">{title}</div>
        {description ? <div className="mt-1 text-sm text-white/65">{description}</div> : null}
      </div>
      {right ? <div className="pt-1">{right}</div> : null}
    </div>
  );
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("p-6 pt-0", className)}>{children}</div>;
}
