import { SidebarItem } from "./SidebarItems";
import { LayoutGridIcon, Sun, Moon } from "lucide-react"
import { YoutubeIcon } from "./icons/Youtube";
import { TwitterIcon } from "./icons/Twitter";
import { useState } from "react";

export function SideBar( { darkMode, setDarkMode, setTypes }: { darkMode: boolean, setTypes: React.Dispatch<React.SetStateAction<string>>, setDarkMode: (v: boolean) => void }){

   
    return (
        <div className={`h-16 md:h-screen w-full md:w-76 border-b md:border-b-0 md:border-r fixed left-0 top-0 z-40 flex flex-row md:flex-col items-center md:items-stretch justify-between md:justify-start px-6 py-0 md:py-6 transition-all duration-300 ${darkMode ? 'bg-[#050505] border-[#2c2c2c]' : 'bg-white border-[#caccce]'}`}>
          
          {/* Logo Brand Header & Toggle Control */}
         <div className={`flex items-center justify-between pb-8 border-b w-full md:w-auto ${darkMode? 'border-[#2c2c2c]':'border-[#caccce]'}`}>
             <div className="flex items-center gap-3">
                <div className={`h-8 w-8 rounded-xl flex items-center justify-center text-md font-bold shadow-xs ${darkMode ? 'bg-[#1a1a1a] text-white' : 'bg-slate-900 text-white'}`}>
                   <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M20 10c-.74 0-1.38.4-1.72 1H13V9h4c.55 0 1-.45 1-1V5.72c.6-.35 1-.98 1-1.72 0-1.1-.9-2-2-2s-2 .9-2 2c0 .74.4 1.38 1 1.72V7h-3V5c0-1.65-1.35-3-3-3-1.3 0-2.41.83-2.83 2.01A3.51 3.51 0 0 0 4 7.5c0 .33.05.65.14.96C2.87 9.14 2 10.49 2 12c0 1.08.43 2.09 1.17 2.83-.11.38-.17.77-.17 1.17 0 1.96 1.41 3.59 3.31 3.93C6.86 21.16 8.11 22 9.5 22c1.93 0 3.5-1.57 3.5-3.5V17h3v1.28c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V16c0-.55-.45-1-1-1h-4v-2h5.28c.35.6.98 1 1.72 1 1.1 0 2-.9 2-2s-.9-2-2-2m-9 8.5c0 .83-.67 1.5-1.5 1.5-.71 0-1.33-.5-1.47-1.2l-.21-.8H7c-1.1 0-2-.9-2-2 0-.35.08-.68.25-.98l.46-.82-.78-.51C4.35 13.31 4 12.68 4 12c0-.98.72-1.82 1.68-1.97l1.69-.26-1.06-1.35c-.2-.26-.32-.59-.32-.92 0-.83.67-1.5 1.5-1.5.11 0 .21.01.31.03l1.19.17V4.99c0-.55.45-1 1-1s1 .45 1 1v13.5Z"></path></svg>
                </div>
                <div>
                   <span className={`text-md font-bold uppercase tracking-wider block ${darkMode ? 'text-[#ffffff]' : 'text-slate-900'}`}>MindVault</span>
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
             <div onClick={()=>setTypes("all")} className={`w-full rounded-xl border transition-all ${darkMode ? 'bg-[#1a1a1a] border-[#262626]/40' : ' bg-gray-200 border-slate-300'}`}>
                <SidebarItem text="All Memories" icon={<LayoutGridIcon size="1em" className={darkMode ? "text-white" : "text-slate-900"}/>} darkMode={darkMode}/>
             </div>
             
             <div onClick={()=>setTypes("twitter")} className={`w-full rounded-xl border border-transparent transition-all ${darkMode ? 'hover:bg-[#121212]' : 'hover:bg-gray-200 hover:border-gray-300'}`}>
                <SidebarItem text="Twitter Feed" icon={<TwitterIcon />} darkMode={darkMode}/>
             </div>

             <div onClick={()=>setTypes("youtube")} className={`w-full rounded-xl border border-transparent transition-all ${darkMode ? 'hover:bg-[#121212]' : 'hover:border-gray-300 hover:bg-gray-200'}`}>
                <SidebarItem text="YouTube Sync" icon={<YoutubeIcon />} darkMode={darkMode}/>
             </div>
          </div>

        </div>
    )
}