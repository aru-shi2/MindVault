import { ArrowRight, Mail, Lock } from "lucide-react"
import { useState } from "react"
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export default function SigninPage() {
  const navigate=useNavigate();

    const [Usern, setUsern] = useState("")
  const [Pass, setPass] = useState("")

  const handleLogin=async()=>{
    try{
      const res=await fetch(`${BACKEND_URL}api/v1/auth/login`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          username:Usern,
          password:Pass
        })
      })
    
  const data=await res.json();
  localStorage.setItem("token",data.token)
  
  if(!res.ok){
    toast.error(data.msg)
  }else{
    toast.success(data.msg);
    setTimeout(() => {
      navigate("/content")
    }, 2000);
  }
  }catch(e){
  toast.error("Something went wrong!")
  }
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#a3a3a3] font-sans antialiased selection:bg-indigo-500/10 flex flex-col justify-between p-4 sm:p-6 md:p-8">
      
      {/* Top Header Logo Navigation */}
      <header className="w-full max-w-7xl mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-[#1a1a1a] text-white border border-[#262626] flex items-center justify-center text-md font-bold shadow-xs">
            <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M20 10c-.74 0-1.38.4-1.72 1H13V9h4c.55 0 1-.45 1-1V5.72c.6-.35 1-.98 1-1.72 0-1.1-.9-2-2-2s-2 .9-2 2c0 .74.4 1.38 1 1.72V7h-3V5c0-1.65-1.35-3-3-3-1.3 0-2.41.83-2.83 2.01A3.51 3.51 0 0 0 4 7.5c0 .33.05.65.14.96C2.87 9.14 2 10.49 2 12c0 1.08.43 2.09 1.17 2.83-.11.38-.17.77-.17 1.17 0 1.96 1.41 3.59 3.31 3.93C6.86 21.16 8.11 22 9.5 22c1.93 0 3.5-1.57 3.5-3.5V17h3v1.28c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V16c0-.55-.45-1-1-1h-4v-2h5.28c.35.6.98 1 1.72 1 1.1 0 2-.9 2-2s-.9-2-2-2m-9 8.5c0 .83-.67 1.5-1.5 1.5-.71 0-1.33-.5-1.47-1.2l-.21-.8H7c-1.1 0-2-.9-2-2 0-.35.08-.68.25-.98l.46-.82-.78-.51C4.35 13.31 4 12.68 4 12c0-.98.72-1.82 1.68-1.97l1.69-.26-1.06-1.35c-.2-.26-.32-.59-.32-.92 0-.83.67-1.5 1.5-1.5.11 0 .21.01.31.03l1.19.17V4.99c0-.55.45-1 1-1s1 .45 1 1v13.5Z"></path></svg>
          </div>
          <span className="text-md font-bold uppercase tracking-wider text-[#ffffff] block">MindVault</span>
        </div>
      </header>

      {/* Main Form Box Section */}
      <main className="flex-1 flex items-center justify-center my-8">
        <div className="w-full max-w-md bg-[#0c0c0c] border border-[#1c1c1c] rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.03)] overflow-hidden transform transition-all duration-300">
          
          {/* Top Info Banner inside Card */}
          <div className="p-6 sm:p-8 border-b border-[#161616] bg-[#080808]/50">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ffffff] shadow-[0_0_6px_rgba(255,255,255,1)]"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Authenticate Access</span>
            </div>
            <h1 className="text-xl font-bold text-white tracking-tight">Open your repository</h1>
            <p className="text-xs text-[#666666] mt-1">Decrypt and access your unified knowledge storage vector hub.</p>
          </div>

          {/* Form Content Controls Container */}
          <div className="p-6 sm:p-8 space-y-5">

            {/* Input Field: Email Address */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#525252] block">Email Address</label>
                <Mail size="0.95em" className="text-[#404040]" />
              </div>
              <div className="w-full">
                <input 
                  type="email" 
                 value={Usern}
                  placeholder="name@domain.com" 
                  onChange={(e)=>setUsern(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs bg-[#050505] text-[#f3f4f6] border border-[#1f1f1f] rounded-xl placeholder-[#4b5563] outline-none transition-all shadow-2xs" 
                />
              </div>
            </div>

            {/* Input Field: Password */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#525252] block">Password</label>
                <Lock size="0.95em" className="text-[#404040]" />
              </div>
              <div className="w-full">
                <input 
                  type="password" 
                  value={Pass}
                  placeholder="••••••••••••" 
                  onChange={(e)=>setPass(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs bg-[#050505] text-[#f3f4f6] border border-[#1f1f1f] rounded-xl placeholder-[#4b5563] outline-none transition-all shadow-2xs" 
                />
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              <button
              onClick={handleLogin} 
                type="button"
                className="w-full font-semibold tracking-wide transition-all duration-300 shrink-0 select-none flex items-center justify-center border border-transparent bg-[#ffffff] text-[#050505] rounded-xl text-xs gap-1.5 px-4 py-2.5 shadow-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
              >
                <span>Log in</span>
                <ArrowRight size="1.1em" />
              </button>
            </div>

          </div>

          {/* Bottom Card Redirect Panel Footer */}
          <div className="p-4 border-t border-[#161616] bg-[#080808]/30 flex items-center justify-center gap-1 text-xs">
            <span className="text-[#525252]">New to the system?</span>
            <a href="/signup" className="text-white font-semibold hover:underline tracking-wide transition-all">Create Account ↗</a>
          </div>

        </div>
      </main>

    </div>
  )
}