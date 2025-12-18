"use client";

import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#product", label: "Product" },
  { href: "#demo", label: "Demo" },
  { href: "#use-cases", label: "Use cases" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
          scrolled ? "pt-3" : "pt-5"
        )}
      >
        <div
          className={cn(
            "rounded-3xl border border-white/10 bg-black/20 backdrop-blur supports-[backdrop-filter]:bg-black/15 transition",
            scrolled ? "shadow-[0_18px_90px_rgba(0,0,0,0.35)]" : ""
          )}
        >
          <div className="flex items-center justify-between px-4 py-3 sm:px-5">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white/6">
                <Image
                  src="/interlayer_logo.png"
                  width={36}
                  height={36}
                  alt="Interlayer logo"
                />
              </div>
              <div className="leading-tight">
                <div className="font-[var(--font-sora)] text-sm font-semibold">InterLayer</div>
                
              </div>
            </div>

            <nav className="hidden items-center gap-6 md:flex">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-white/70 hover:text-white transition">
                  {l.label}
                </a>
              ))}
              <ButtonLink href="#waitlist" variant="primary" size="sm">
                Join the waitlist
              </ButtonLink>
            </nav>

            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/6"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open ? (
            <div className="md:hidden border-t border-white/10 px-4 pb-4 pt-3">
              <div className="flex flex-col gap-3">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-3 py-2 text-sm text-white/80 hover:bg-white/6"
                  >
                    {l.label}
                  </a>
                ))}
                <ButtonLink href="#waitlist" variant="primary" size="md">
                  Join the waitlist
                </ButtonLink>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
