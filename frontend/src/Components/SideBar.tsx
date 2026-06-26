import { SidebarItem } from "./SidebarItems";
import { LayoutGridIcon, Sun, Moon } from "lucide-react"
import { YoutubeIcon } from "./icons/Youtube";
import { TwitterIcon } from "./icons/Twitter";
 
export function SideBar({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: (v: boolean) => void }){
    return (
        <div className={`h-16 md:h-screen w-full md:w-76 border-b md:border-b-0 md:border-r fixed left-0 top-0 z-40 flex flex-row md:flex-col items-center md:items-stretch justify-between md:justify-start px-6 py-0 md:py-6 transition-all duration-300 ${darkMode ? 'bg-[#050505] border-[#2c2c2c]' : 'bg-white border-[#caccce]'}`}>
          
          {/* Logo Brand Header & Toggle Control */}
         <div className={`flex items-center justify-between pb-8 border-b w-full md:w-auto ${darkMode? 'border-[#2c2c2c]':'border-[#caccce]'}`}>
             <div className="flex items-center gap-3">
                <div className={`h-8 w-8 rounded-xl flex items-center justify-center text-xs font-bold shadow-xs ${darkMode ? 'bg-[#1a1a1a] text-white' : 'bg-slate-900 text-white'}`}>
                   🧠
                </div>
                <div>
                   <span className={`text-xs font-bold uppercase tracking-wider block ${darkMode ? 'text-[#ffffff]' : 'text-slate-900'}`}>MindVault</span>
                </div>
             </div>

             {/* Minimalist Dark Mode Toggle Switch next to Mindvault */}
             <button 
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-xl transition-all border ${darkMode ? 'bg-[#121212] border-[#222222] text-[#fbbf24] hover:bg-[#1a1a1a]' : 'bg-slate-50 border-slate-300 text-slate-500 hover:border-slate-400 hover:bg-slate-200'}`}
                aria-label="Toggle Theme"
             >
                {darkMode ? <Sun size="1.1em" /> : <Moon size="1.1em" />}
             </button>
          </div>

          {/* Symmetrical High-End Options Panel Link Block */}
          <div className="hidden md:flex flex-col gap-1 flex-1 w-full">
             <span className={`px-2 text-[10px] font-bold uppercase tracking-widest block mb-2 mt-8 ${darkMode ? 'text-[#666666]' : 'text-slate-400'}`}>Workspaces</span>
             
             {/* Selected Tab Active Element state */}
             <div className={`w-full rounded-xl border transition-all ${darkMode ? 'bg-[#1a1a1a] border-[#262626]/40' : ' bg-gray-200 border-slate-300'}`}>
                <SidebarItem text="All Memories" icon={<LayoutGridIcon size="1em" className={darkMode ? "text-white" : "text-slate-900"}/>} darkMode={darkMode}/>
             </div>
             
             <div className={`w-full rounded-xl border border-transparent transition-all ${darkMode ? 'hover:bg-[#121212]' : 'hover:bg-gray-200 hover:border-gray-300'}`}>
                <SidebarItem text="Twitter Feed" icon={<TwitterIcon />} darkMode={darkMode}/>
             </div>

             <div className={`w-full rounded-xl border border-transparent transition-all ${darkMode ? 'hover:bg-[#121212]' : 'hover:border-gray-300 hover:bg-gray-200'}`}>
                <SidebarItem text="YouTube Sync" icon={<YoutubeIcon />} darkMode={darkMode}/>
             </div>
          </div>

        </div>
    )
}