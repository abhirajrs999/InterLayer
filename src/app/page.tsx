import Image from "next/image";
import { Navbar } from "@/components/nav/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Capabilities } from "@/components/sections/Capabilities";
import { InteractiveTour } from "@/components/sections/InteractiveTour";
import { UseCases } from "@/components/sections/UseCases";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Waitlist } from "@/components/sections/Waitlist";
import { Footer } from "@/components/sections/Footer";
// import { AgentWidget } from "@/components/agent/AgentWidget";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/80 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <span className="grid h-8 w-8 place-items-center overflow-hidden rounded-xl border border-white/20 bg-white/10">
              <Image src="/EF_logo.svg" alt="Entrepreneur First" width={32} height={32} />
            </span>
            Backed by Entrepreneur First
          </div>
        </div>
        <Hero />
        <Capabilities />
        <InteractiveTour />
        <UseCases />
        <Pricing />
        <FAQ />
        <Waitlist />
      </main>
      <Footer />
      {/* <AgentWidget /> */}
    </div>
  );
}
