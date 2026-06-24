import { SidebarItem } from "./SidebarItems";
import { LayoutGridIcon} from "lucide-react"

import { YoutubeIcon } from "./Youtube";
import { TwitterIcon } from "./Twitter";
 
export function SideBar(){
    return (
        <div className="h-16 md:h-screen w-full md:w-76 bg-white border-b md:border-b-0 md:border-r border-slate-200 fixed left-0 top-0 z-40 flex flex-row md:flex-col items-center md:items-stretch justify-between md:justify-start px-6 py-0 md:py-6 architecture-transition">
          
          {/* Logo Brand Header */}
          <div className="flex items-center gap-3">
             <div className="h-8 w-8 rounded-xl bg-slate-900 flex items-center justify-center text-xs text-white font-bold shadow-xs">
                🧠
             </div>
             <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">MindVault</span>
             </div>
          </div>

          {/* Symmetrical High-End Options Panel Link Block */}
          <div className="hidden md:flex flex-col gap-1 flex-1 w-full">
             <span className="px-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2 mt-6">Workspaces</span>
             
             {/* Selected Tab Active Element state */}
             <div className="w-full bg-slate-100 rounded-xl border border-slate-200/40 transition-all">
                <SidebarItem text="All Memories" icon={<LayoutGridIcon size="1em" className="text-slate-900"/>}/>
             </div>
             
             <div className="w-full hover:bg-slate-50 rounded-xl border border-transparent transition-all">
                <SidebarItem text="Twitter Feed" icon={<TwitterIcon />}/>
             </div>

             <div className="w-full hover:bg-slate-50 rounded-xl border border-transparent transition-all">
                <SidebarItem text="YouTube Sync" icon={<YoutubeIcon />}/>
             </div>
          </div>

        </div>
    )
}