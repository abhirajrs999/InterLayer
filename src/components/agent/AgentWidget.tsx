"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";

type Msg = { id: string; from: "user" | "agent"; text: string };

function uid() {
  return Math.random().toString(16).slice(2) + Date.now().toString(16);
}

function mockAgentReply(input: string): string {
  const t = input.toLowerCase();

  if (t.includes("pricing")) return "Pricing depends on sessions + video minutes. If you tell me MAU and channels, I’ll ballpark a plan.";
  if (t.includes("demo")) return "Cool. Tell me: your product, your #1 onboarding bottleneck, and which channel (in-app / email / call).";
  if (t.includes("cobrowse") || t.includes("co-browse") || t.includes("visual"))
    return "Visual guidance = consented co-browsing + highlights + cursor + annotations. You can start with read-only and add control later.";
  if (t.includes("avatar") || t.includes("video"))
    return "Video agents work best as a *front-end persona* on top of a real tool-calling agent. Otherwise you’ll ship a talking doll that can’t do anything.";
  if (t.includes("security") || t.includes("privacy"))
    return "You need explicit consent + redaction rules + audit logs + retention controls. Build that before you scale.";
  return "Got it. Want the agent to *solve tickets*, *teach flows*, or *run demos*? Pick one as the wedge.";
}

export function AgentWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { id: uid(), from: "agent", text: "I’m your video-guide agent. Ask me about support automation, onboarding, or demo flows." },
  ]);

  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [msgs, open]);

  const onSend = () => {
    const text = input.trim();
    if (!text) return;

    setMsgs((m) => [...m, { id: uid(), from: "user", text }]);
    setInput("");

    // Fake latency
    setTimeout(() => {
      setMsgs((m) => [...m, { id: uid(), from: "agent", text: mockAgentReply(text) }]);
    }, 480);
  };

  const keyHint = useMemo(() => (typeof navigator !== "undefined" && /Mac/.test(navigator.platform) ? "⌘" : "Ctrl"), []);

  return (
    <>
      {/* Launcher */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setOpen(true)}
          className={cn(
            "group flex items-center gap-3 rounded-3xl border border-white/12 bg-white/6 px-4 py-3 backdrop-blur hover:bg-white/10 transition shadow-[0_22px_80px_rgba(0,0,0,0.35)]",
            open ? "hidden" : ""
          )}
          aria-label="Open agent"
        >
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-black">
            <MessageCircle className="h-5 w-5" />
          </div>
          <div className="text-left">
            <div className="text-sm font-medium text-white">Talk to the agent</div>
            <div className="text-xs text-white/60">Try “How does visual guidance work?”</div>
          </div>
        </button>
      </div>

      {/* Panel */}
      {open ? (
        <div className="fixed bottom-5 right-5 z-50 w-[min(420px,calc(100vw-40px))]">
          <div className="border-shine glow overflow-hidden rounded-3xl bg-black/30 backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white/6">
                  {/* Video avatar */}
                  <VideoAvatar />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-medium">Video Guide</div>
                  <div className="text-xs text-white/60">Interactive demo + onboarding</div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/6 hover:bg-white/10"
                aria-label="Close agent"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div ref={listRef} className="max-h-[360px] overflow-auto px-4 py-4">
              {msgs.map((m) => (
                <div key={m.id} className={cn("mb-3 flex", m.from === "user" ? "justify-end" : "justify-start")}>
                  <div
                    className={cn(
                      "max-w-[82%] rounded-3xl px-4 py-3 text-sm leading-relaxed",
                      m.from === "user"
                        ? "bg-white text-black"
                        : "bg-white/8 text-white border border-white/10"
                    )}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 p-3">
              <div className="flex items-center gap-2 rounded-3xl border border-white/10 bg-white/6 px-3 py-2">
                <Sparkles className="h-4 w-4 text-white/70" />
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") onSend();
                  }}
                  className="w-full bg-transparent text-sm outline-none placeholder:text-white/40"
                  placeholder={`Ask anything… (${keyHint}+Enter not needed)`}
                />
                <button
                  onClick={onSend}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white text-black hover:bg-white/90"
                  aria-label="Send"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-2 text-[11px] text-white/45">
                This widget is a front-end mock. Wire it to your agent backend when ready.
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function VideoAvatar() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/avatar-placeholder.svg"
        alt="Avatar placeholder"
        className="h-full w-full object-cover"
      />
    );
  }

  return (
    <video
      className="h-full w-full object-cover"
      src="/avatar.mp4"
      poster="/avatar-placeholder.svg"
      muted
      playsInline
      loop
      autoPlay
      onError={() => setFailed(true)}
    />
  );
}
