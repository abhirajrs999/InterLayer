"use client";

import { Button, ButtonLink } from "@/components/ui/Button";
import { ArrowRight, Play, ShieldCheck, Wand2, Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="band band-dark">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <h1 className="mt-2 font-[var(--font-sora)] text-4xl leading-tight text-white sm:text-5xl">
            The visual agent <span className="text-gradient">layer</span> for software.
          </h1>

          <p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">
            Interlayer builds AI agents that see interfaces, understand intent, 
            and act — guiding users through a video character, running workflows, and operating software end-to-end.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="#demo" variant="primary" size="lg">
              Request a demo <Play className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="#product" variant="secondary" size="lg">
              Know more <ArrowRight className="h-4 w-4" /> 
            </ButtonLink>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
            <MiniValue icon={<Wand2 className="h-4 w-4" />} title="When presence matters" text="A human-like video agent explains, guides, and reassures users during pre sales, demos, onboarding, and training." />
            <MiniValue icon={<ShieldCheck className="h-4 w-4" />} title="When action is required" text="Agents visually highlight buttons, explain workflows, and executes tasks autonomously through complex interfaces step-by-step." />
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <VideoPreview className="h-[460px] sm:h-[520px] w-full" />
        </div>
      </div>
    </section>
  );
}

function MiniValue({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/4 p-4">
      <div className="flex items-center gap-2 text-sm font-medium">
        <span className="grid h-8 w-8 place-items-center rounded-2xl bg-white/8">{icon}</span>
        {title}
      </div>
      <div className="mt-2 text-sm text-white/65">{text}</div>
    </div>
  );
}

function VideoPreview({ className }: { className?: string }) {
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const showPlaceholder = !ready || failed;

  const toggleMute = () => {
    const video = videoRef.current;
    const next = !muted;
    setMuted(next);
    if (video) {
      video.muted = next;
      if (!next) {
        video.play().catch(() => {
          /* ignore */
        });
      }
    }
  };

  return (
    <div className={cn("relative min-h-[260px] overflow-hidden rounded-3xl border border-white/10 bg-black/50", className)}>
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src="/hero-video.mp4"
        poster="/hero-video-placeholder.svg"
        muted={muted}
        loop
        autoPlay
        playsInline
        onLoadedData={() => setReady(true)}
        onPlay={() => setReady(true)}
        onError={() => setFailed(true)}
      />
      {showPlaceholder ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-gradient-to-b from-white/10 via-white/5 to-transparent text-center">
          <div className="text-sm font-semibold text-white">Hero video placeholder</div>
          <div className="text-[11px] text-white/70">Add video at public/hero-video.mp4</div>
        </div>
      ) : null}
      {!showPlaceholder ? (
        <button
          className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-black/60 px-3 py-2 text-xs text-white/80"
          onClick={toggleMute}
        >
          {muted ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          {muted ? "Enable sound" : "Mute sound"}
        </button>
      ) : null}
    </div>
  );
}
