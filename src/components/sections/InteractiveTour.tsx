"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Volume2, VolumeX } from "lucide-react";

export function InteractiveTour() {
  return (
    <Section
      id="demo"
      eyebrow="DEMO"
      title="The World's First AI agent "
      subtitle="that doesn’t just tell customers what to do, it actually shows them and even does it for them with autonomous UI actions."
      tone="dark"
    >
      <Card className="overflow-hidden">
        <DemoVideo className="w-full" />
      </Card>
    </Section>
  );
}

function DemoVideo({ className }: { className?: string }) {
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const showPlaceholder = !ready || failed;

  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    const video = videoRef.current;
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
    <div className={cn("relative min-h-[320px] overflow-hidden rounded-3xl bg-black/60", className)}>
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src="/demo-video.mp4"
        poster="/demo-video-placeholder.svg"
        muted={muted}
        controls
        controlsList="nodownload"
        loop
        autoPlay
        playsInline
        onLoadedData={() => setReady(true)}
        onPlay={() => setReady(true)}
        onError={() => setFailed(true)}
      />
      {showPlaceholder ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-gradient-to-b from-black/40 via-black/20 to-transparent text-center">
          <div className="text-base font-semibold text-white">Demo video placeholder</div>
          <div className="text-xs text-white/70">Put your file at /public/demo-video.mp4</div>
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
