import { ArrowRight, ShieldCheck, Mail, LayoutGridIcon, PlusIcon, ShareIcon, Sparkles, Terminal, Layers, Eye, Zap, Lock, Database, Compass, Sliders, ChevronRight,  Moon } from "lucide-react"
import { TwitterIcon } from "../icons/Twitter";
import { YoutubeIcon } from "../icons/Youtube";
import { useNavigate } from "react-router-dom";
import image from "../../assets/image.png"

export default function Home() {
  const navigate = useNavigate();

  const handlestart = () => {
    navigate("/signup")
  }

  return (
    <div className=" min-h-screen bg-[#050505] text-[#a3a3a3] font-sans antialiased selection:bg-indigo-500/10 flex flex-col justify-between overflow-x-hidden">
      
      {/* 1. Global Premium Navigation Header Bar */}
      <header className="w-full border-b border-[#161616] bg-[#0c0c0c]/80 backdrop-blur-md fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-3.5">
          <div className="flex items-center gap-2.5 group cursor-pointer">
            <div className="h-7 w-7 rounded-xl bg-[#1a1a1a] text-white border border-[#262626] flex items-center justify-center shadow-xs">
              <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill={"currentColor"} viewBox={"0 0 24 24"}>
                <path d="M20 10c-.74 0-1.38.4-1.72 1H13V9h4c.55 0 1-.45 1-1V5.72c.6-.35 1-.98 1-1.72 0-1.1-.9-2-2-2s-2 .9-2 2c0 .74.4 1.38 1 1.72V7h-3V5c0-1.65-1.35-3-3-3-1.3 0-2.41.83-2.83 2.01A3.51 3.51 0 0 0 4 7.5c0 .33.05.65.14.96C2.87 9.14 2 10.49 2 12c0 1.08.43 2.09 1.17 2.83-.11.38-.17.77-.17 1.17 0 1.96 1.41 3.59 3.31 3.93C6.86 21.16 8.11 22 9.5 22c1.93 0 3.5-1.57 3.5-3.5V17h3v1.28c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V16c0-.55-.45-1-1-1h-4v-2h5.28c.35.6.98 1 1.72 1 1.1 0 2-.9 2-2s-.9-2-2-2m-9 8.5c0 .83-.67 1.5-1.5 1.5-.71 0-1.33-.5-1.47-1.2l-.21-.8H7c-1.1 0-2-.9-2-2 0-.35.08-.68.25-.98l.46-.82-.78-.51C4.35 13.31 4 12.68 4 12c0-.98.72-1.82 1.68-1.97l1.69-.26-1.06-1.35c-.2-.26-.32-.59-.32-.92 0-.83.67-1.5 1.5-1.5.11 0 .21.01.31.03l1.19.17V4.99c0-.55.45-1 1-1s1 .45 1 1v13.5Z"></path>
              </svg>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#ffffff] block">MindVault</span>
          </div>
          
          <div className="flex items-center gap-3">
            <a href="#login" className="text-[11px] font-semibold text-[#525252] hover:text-[#e5e7eb] transition-colors px-2 py-1">
              Sign In
            </a>
            <button 
              onClick={handlestart}
              type="button"
              className="font-semibold tracking-wide transition-all duration-300 flex items-center justify-center border border-transparent bg-[#ffffff] text-[#050505] rounded-xl text-[11px] gap-1.5 px-3.5 py-1.5 shadow-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
            >
              <span>Initialize Vault</span>
              <ArrowRight size="1em" />
            </button>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <main className="pt-25 flex-1">
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-12 md:pt-20 pb-16 text-center space-y-6">
          
          {/* Hero Ambient Gray Gradient */}
<div
  aria-hidden
  className="pointer-events-none absolute inset-0"
>
  <div className="absolute left-1/2 top-[55%] h-[32rem] w-[70rem] -translate-x-1/2 rounded-full bg-zinc-600/15 blur-[180px]" />

  <div className="absolute left-1/2 top-[65%] h-[20rem] w-[50rem] -translate-x-1/2 rounded-full bg-gray-400/10 blur-[140px]" />
</div>

          {/* Ambient Top Tag Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0c0c0c] border border-[#1c1c1c] shadow-[0_0_15px_rgba(255,255,255,0.02)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ffffff] shadow-[0_0_6px_rgba(255,255,255,1)]"></span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#ffffff]">v1.0.0 Live</span>
          </div>

          <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-[1.1]">
            Your Unified Knowledge Storage <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#a3a3a3] to-[#404040]">Vector Hub</span>
          </h1>

          <p className="relative z-10 text-xs sm:text-sm text-[#666666] max-w-xl mx-auto leading-relaxed font-medium">
            MindVault offers a premium, high-contrast digital repository to structure links, capture transient thoughts, and synchronize stream memories natively under secondary encryptions.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button 
              onClick={handlestart}
              type="button"
              className="w-full sm:w-auto font-semibold tracking-wide transition-all duration-300 flex items-center justify-center border border-transparent bg-[#ffffff] text-[#050505] rounded-xl text-xs gap-1.5 px-6 py-3 shadow-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
            >
              <span>Get started - it's free</span>
              <ArrowRight size="1.1em" />
            </button>
            <a
             href="#features"
              className="w-full sm:w-auto font-semibold tracking-wide transition-all duration-300 flex items-center justify-center border border-[#222222] bg-[#121212] text-[#e5e7eb] rounded-xl text-xs gap-1.5 px-6 py-3 hover:bg-[#1a1a1a] hover:border-[#444444] hover:shadow-[0_0_12px_rgba(255,255,255,0.04)]"
            >
              <Terminal size="1.1em" className="text-[#525252]" />
              <span>Read Architecture Specification</span>
            </a>
          </div>

        </section>

        <div className="relative z-10 pb-5 flex justify-center px-4">
  <div className="w-full max-w-4xl rounded-[24px] border border-[#1f1f1f] bg-[#0a0a0a] shadow-[0_30px_80px_rgba(0,0,0,0.7)] overflow-hidden">
    
    {/* Browser Header */}
    <div className="flex items-center gap-2 px-5 py-4 border-b border-[#1a1a1a] bg-[#0c0c0c]">
      <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
      <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
      <span className="h-3 w-3 rounded-full bg-[#28c840]" />
    </div>

    {/* Screenshot */}
    <img
      src={image}
      alt="MindVault Dashboard Preview"
      className="w-full object-cover"
    />
  </div>
</div>
      </main>

      {/* 3. Features Section */}
      <section id="features" className="w-full bg-[#0c0c0c] border-y border-[#161616] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          
          <div className="text-left space-y-2 mb-16 max-w-xl">
            <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-white flex items-center gap-1.5">
              <Sparkles size="1em" /> CORE_CAPABILITIES
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Engineered for absolute minimal workflows</h2>
            <p className="text-xs text-[#666666]">Eliminate overhead clutter. Experience lightning-fast metadata structuring architecture.</p>
          </div>

          {/* Asymmetric High-Contrast Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Bento Card 1 */}
            <div className="md:col-span-2 bg-[#050505] border border-[#1c1c1c] p-6 sm:p-8 rounded-xl flex flex-col justify-between transition-all duration-300 hover:border-[#333333] hover:shadow-[0_0_20px_rgba(255,255,255,0.02)] min-h-[220px]">
              <div className="space-y-3">
                <div className="h-8 w-8 rounded-lg bg-[#141414] border border-[#1f1f1f] flex items-center justify-center text-white">
                  <Layers size="1.1em" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">Multi-Format Content Virtualization</h3>
                <p className="text-xs leading-relaxed text-[#666666] max-w-md">Effortlessly catalog complex notes, deep YouTube production nodes, terminal properties, and system bookmarks cleanly into searchable index layers.</p>
              </div>
              <div className="pt-4 border-t border-[#161616]/60 flex items-center justify-between text-[9px] font-mono text-[#404040]">
                <span>SYSTEM_MAPPING: FULLY_OPERATIONAL</span>
                <ChevronRight size={11} />
              </div>
            </div>

            {/* Bento Card 2 */}
            <div className="bg-[#050505] border border-[#1c1c1c] p-6 sm:p-8 rounded-xl flex flex-col justify-between transition-all duration-300 hover:border-[#333333] hover:shadow-[0_0_20px_rgba(255,255,255,0.02)] min-h-[220px]">
              <div className="space-y-3">
                <div className="h-8 w-8 rounded-lg bg-[#141414] border border-[#1f1f1f] flex items-center justify-center text-white">
                  <Eye size="1.1em" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">Ambient Glow Focus</h3>
                <p className="text-xs leading-relaxed text-[#666666]">A high-end UI designed strictly under tactical black tokens. No distracting multi-colored element overlays.</p>
              </div>
              <span className="text-[9px] font-mono text-[#404040]">UI_MODE // CONTRAST_TRUE</span>
            </div>

            {/* Bento Card 3 */}
            <div className="bg-[#050505] border border-[#1c1c1c] p-6 sm:p-8 rounded-xl flex flex-col justify-between transition-all duration-300 hover:border-[#333333] hover:shadow-[0_0_20px_rgba(255,255,255,0.02)] min-h-[220px]">
              <div className="space-y-3">
                <div className="h-8 w-8 rounded-lg bg-[#141414] border border-[#1f1f1f] flex items-center justify-center text-white">
                  <Zap size="1.1em" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">Instant Capture Vectors</h3>
                <p className="text-xs leading-relaxed text-[#666666]">Integrated with an interactive workspace overlay mechanism enabling hotkeys for record creation.</p>
              </div>
              <span className="text-[9px] font-mono text-[#404040]">LATENCY // 0.04MS</span>
            </div>

            {/* Bento Card 4 */}
            <div className="md:col-span-2 bg-[#050505] border border-[#1c1c1c] p-6 sm:p-8 rounded-xl flex flex-col justify-between transition-all duration-300 hover:border-[#333333] hover:shadow-[0_0_20px_rgba(255,255,255,0.02)] min-h-[220px]">
              <div className="space-y-3">
                <div className="h-8 w-8 rounded-lg bg-[#141414] border border-[#1f1f1f] flex items-center justify-center text-white">
                  <Lock size="1.1em" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">Encrypted Handshake</h3>
                <p className="text-xs leading-relaxed text-[#666666] max-w-md">Your workspaces are mapped using hardcoded hash references to isolate and secure data packets perfectly.</p>
              </div>
              <div className="pt-4 border-t border-[#161616]/60 flex items-center justify-between text-[9px] font-mono text-[#404040]">
                <span>SECURITY_SCHEMAS // HARDENED</span>
                <ShieldCheck size={12} className="text-emerald-500" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Bottom Call-To-Action (CTA) Platform Frame */}
      <section id="architecture" className="max-w-4xl mx-auto w-full px-4 sm:px-6 md:px-8 py-16 md:py-24 text-center">
        <div className="bg-[#0c0c0c] border border-[#1c1c1c] rounded-2xl p-6 sm:p-10 space-y-6 shadow-[0_0_30px_rgba(255,255,255,0.03)]">
          <div className="flex justify-center">
            <div className="p-2.5 bg-[#070707] border border-[#141414] rounded-xl">
              <ShieldCheck size="1.3em" className="text-white" />
            </div>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">Ready to streamline your cognitive assets?</h2>
          <p className="text-xs text-[#666666] max-w-lg mx-auto leading-relaxed">
            Deploy your decentralized knowledge node instantly. No complex onboarding configurations, tracking matrices or bloated data schemas.
          </p>
          <div className="pt-2 flex justify-center">
            <button 
              onClick={handlestart}
              type="button"
              className="font-semibold tracking-wide transition-all duration-300 flex items-center justify-center border border-transparent bg-[#ffffff] text-[#050505] rounded-xl text-xs gap-1.5 px-5 py-2.5 shadow-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
            >
              <span>Initialize Workspace Axis</span>
              <ArrowRight size="1.1em" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Symmetrical System Footer Branding */}
      <footer className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 md:px-8 py-6 border-t border-[#161616]/40 text-[10px] font-mono tracking-tight text-[#404040]">
        <div>© 2026 MindVault Inc. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="#terms" className="hover:text-[#666666] transition-colors">TERMS_OF_SERVICE</a>
          <span className="text-[#1f1f1f]">•</span>
          <a href="#privacy" className="hover:text-[#666666] transition-colors">PRIVACY_POLICY</a>
          <span className="text-[#1f1f1f]">•</span>
          <span className="text-[#525252] flex items-center gap-1">
            <span className="h-1 w-1 bg-emerald-500 rounded-full animate-pulse"></span> NODE_STATUS: ONLINE
          </span>
        </div>
      </footer>

    </div>
  )
}