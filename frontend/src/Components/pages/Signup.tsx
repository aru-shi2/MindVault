import { FileTextIcon, ArrowRight, ShieldCheck, Mail, Lock, User } from "lucide-react"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#a3a3a3] font-sans antialiased selection:bg-indigo-500/10 flex flex-col justify-between p-4 sm:p-6 md:p-8">
      
      {/* Top Header Logo Navigation */}
      <header className="w-full max-w-7xl mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-[#1a1a1a] text-white border border-[#262626] flex items-center justify-center text-xs font-bold shadow-xs">
            🧠
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#ffffff] block">MindVault</span>
        </div>
        <div className="text-[11px] font-mono tracking-tight text-[#525252]">
          sec_ops // v1.0.0
        </div>
      </header>

      {/* Main Form Box Section */}
      <main className="flex-1 flex items-center justify-center my-8">
        <div className="w-full max-w-md bg-[#0c0c0c] border border-[#1c1c1c] rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.03)] overflow-hidden transform transition-all duration-300">
          
          {/* Top Info Banner inside Card */}
          <div className="p-6 sm:p-8 border-b border-[#161616] bg-[#080808]/50">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ffffff] shadow-[0_0_6px_rgba(255,255,255,1)]"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Initialize Vault</span>
            </div>
            <h1 className="text-xl font-bold text-white tracking-tight">Create your repository</h1>
            <p className="text-xs text-[#666666] mt-1">Start encrypting your unified knowledge storage vector hub.</p>
          </div>

          {/* Form Content Controls Container */}
          <div className="p-6 sm:p-8 space-y-5">
            
            {/* Input Field: Username */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#525252] block">Username</label>
                <User size="0.95em" className="text-[#404040]" />
              </div>
              <div className="w-full">
                <input 
                  type="text" 
                  placeholder="e.g. neorover_7" 
                  disabled
                  className="w-full px-4 py-2.5 text-xs bg-[#050505] text-[#f3f4f6] border border-[#1f1f1f] rounded-xl placeholder-[#4b5563] outline-none transition-all shadow-2xs" 
                />
              </div>
            </div>

            {/* Input Field: Email Address */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#525252] block">Email Address</label>
                <Mail size="0.95em" className="text-[#404040]" />
              </div>
              <div className="w-full">
                <input 
                  type="email" 
                  placeholder="name@domain.com" 
                  disabled
                  className="w-full px-4 py-2.5 text-xs bg-[#050505] text-[#f3f4f6] border border-[#1f1f1f] rounded-xl placeholder-[#4b5563] outline-none transition-all shadow-2xs" 
                />
              </div>
            </div>

            {/* Input Field: Password */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#525252] block">Secure Password</label>
                <Lock size="0.95em" className="text-[#404040]" />
              </div>
              <div className="w-full">
                <input 
                  type="password" 
                  placeholder="••••••••••••" 
                  disabled
                  className="w-full px-4 py-2.5 text-xs bg-[#050505] text-[#f3f4f6] border border-[#1f1f1f] rounded-xl placeholder-[#4b5563] outline-none transition-all shadow-2xs" 
                />
              </div>
            </div>

            {/* Premium Agreement Banner Badge */}
            <div className="p-3 bg-[#070707] border border-[#141414] rounded-xl flex items-start gap-3">
              <ShieldCheck size="1.25em" className="text-emerald-500 shrink-0 mt-0.5" />
              <p className="text-[11px] leading-normal text-[#666666]">
                By generating credentials, you accept decentralized sync and system protocol rules.
              </p>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              <button 
                type="button"
                className="w-full font-semibold tracking-wide transition-all duration-300 shrink-0 select-none flex items-center justify-center border border-transparent bg-[#ffffff] text-[#050505] rounded-xl text-xs gap-1.5 px-4 py-2.5 shadow-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
              >
                <span>Generate Vault Access</span>
                <ArrowRight size="1.1em" />
              </button>
            </div>

          </div>

          {/* Bottom Card Redirect Panel Footer */}
          <div className="p-4 border-t border-[#161616] bg-[#080808]/30 flex items-center justify-center gap-1 text-xs">
            <span className="text-[#525252]">Already possess credentials?</span>
            <a href="#login" className="text-white font-semibold hover:underline tracking-wide transition-all">Sign In ↗</a>
          </div>

        </div>
      </main>

      {/* Symmetrical System Footer Branding */}
      <footer className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 py-4 border-t border-[#161616]/40 text-[10px] font-mono tracking-tight text-[#404040]">
        <div>© 2026 MindVault Inc. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="#terms" className="hover:text-[#666666] transition-colors">TERMS_OF_SERVICE</a>
          <span className="text-[#1f1f1f]">•</span>
          <a href="#privacy" className="hover:text-[#666666] transition-colors">PRIVACY_POLICY</a>
        </div>
      </footer>

    </div>
  )
}