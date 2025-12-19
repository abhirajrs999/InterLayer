export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div id="top" className="font-[var(--font-sora)] text-base">InterLayer</div>
            <div className="mt-2 max-w-md text-sm text-white/65">
              AI agents for support, onboarding, and demos — with a visual layer and video-avatar interface.
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
            <div className="space-y-2">
              <div className="text-xs font-medium text-white/60">Product</div>
              <a className="block text-white/70 hover:text-white" href="#product">Capabilities</a>
              <a className="block text-white/70 hover:text-white" href="#demo">Demo</a>
              <a className="block text-white/70 hover:text-white" href="#pricing">Pricing</a>
            </div>
            <div className="space-y-2">
              <div className="text-xs font-medium text-white/60">Company</div>
              <a className="block text-white/70 hover:text-white" href="#use-cases">Use cases</a>
              <a className="block text-white/70 hover:text-white" href="#faq">FAQ</a>
              <a className="block text-white/70 hover:text-white" href="#top">Home</a>
            </div>
            <div className="space-y-2">
              <div className="text-xs font-medium text-white/60">Legal</div>
              <span className="block text-white/40">Privacy</span>
              <span className="block text-white/40">Terms</span>
              <a
                className="block text-white/70 hover:text-white"
                href="https://calendly.com/abhiraj-interlayer/30min"
                target="_blank"
                rel="noreferrer"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} InterLayer. All rights reserved.</div>
          <a
            href="https://www.linkedin.com/company/inter-layer/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white"
            aria-label="InterLayer on LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4zM8.5 8.5h3.8v2.11h.05c.53-1 1.84-2.11 3.79-2.11 4.06 0 4.81 2.67 4.81 6.15V24h-4v-6.79c0-1.62-.03-3.69-2.25-3.69-2.25 0-2.6 1.76-2.6 3.58V24h-4z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
