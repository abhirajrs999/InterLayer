import Link from "next/link";
import { useCallback } from "react";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-white text-black hover:bg-white/90 shadow-[0_14px_60px_rgba(255,255,255,0.12)]",
  secondary:
    "bg-white/10 text-white hover:bg-white/14 border border-white/10",
  ghost: "bg-transparent text-white hover:bg-white/10 border border-transparent",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button(
  props: ComponentProps<"button"> & { variant?: Variant; size?: Size }
) {
  const { className, variant = "primary", size = "md", ...rest } = props;
  return <button className={cn(base, variants[variant], sizes[size], className)} {...rest} />;
}

export function ButtonLink(
  props: ComponentProps<typeof Link> & { variant?: Variant; size?: Size }
) {
  const { className, variant = "primary", size = "md", href, onClick, ...rest } = props;

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (href && typeof href === "string" && href.startsWith("#")) {
        event.preventDefault();
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
      onClick?.(event);
    },
    [href, onClick]
  );

  return (
    <Link
      href={href ?? "#"}
      onClick={handleClick}
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    />
  );
}
