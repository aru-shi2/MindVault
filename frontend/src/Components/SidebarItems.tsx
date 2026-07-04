export function SidebarItem({text, icon, darkMode, active}: {
    text: string,
    icon: React.ReactNode,
    darkMode?: boolean,
    active?:boolean
}){
    return (
        <div className={`rounded-xl flex items-center gap-3 px-3 py-2.5 text-xs font-semibold cursor-pointer transition-colors} 
        ${active?
            darkMode?"bg-[#121212] border-[#262626]/40 text-white"
            :"bg-gray-200 text-black border-gray-300"
          :darkMode?" text-[#666666] hover:bg-[#121212] hover:text-white"
            :"text-slate-600 hover:border-gray-400 hover:bg-gray-300"
                }`}>
            <span className="shrink-0">{icon}</span> 
            <span className="capitalize tracking-wide">{text}</span>
        </div>
    )
}