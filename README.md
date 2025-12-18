# Visual + Conversational AI — marketing site starter (Next.js)

This repo is a **front-end marketing site** (not the product) for a startup building:
- AI agents for support + onboarding
- visual guidance (co-browsing-style)
- video-avatar agents (replaceable with your generated character videos)

## Quickstart

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Swap the video avatar

- Put your character video at: `public/avatar.mp4`
- The UI will fall back to `public/avatar-placeholder.svg` if the video fails to load.

Recommended: 1:1 or 4:5 aspect ratio, H.264 MP4, muted loop.

## Wiring the widget to your backend

The bottom-right widget is a **mock**. Replace `mockAgentReply()` in:
- `src/components/agent/AgentWidget.tsx`

with a call to your API (or a Next.js Route Handler).

## Notes

- Tailwind CSS v4 setup uses PostCSS (`postcss.config.mjs`) and `@import "tailwindcss";` in `globals.css`.
- Keep dependencies updated — RSC security advisories have happened recently, so don’t let this drift.
