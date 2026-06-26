export function SidebarItem({text, icon, darkMode}: {
    text: string,
    icon: React.ReactNode,
    darkMode?: boolean
}){
    return (
        <div className={`flex items-center gap-3 px-3 py-2.5 text-xs font-semibold cursor-pointer transition-colors ${darkMode ? 'text-[#666666] hover:text-[#ffffff]' : 'text-slate-500 hover:text-slate-900'}`}>
            <span className="shrink-0">{icon}</span> 
            <span className="capitalize tracking-wide">{text}</span>
        </div>
    )
}