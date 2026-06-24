export function SidebarItem({text, icon}: {
    text: string,
    icon: React.ReactNode
}){
    return (
        <div className="flex items-center gap-3 px-3 py-2.5 text-xs font-semibold text-slate-500 cursor-pointer transition-colors hover:text-slate-900">
            <span className="shrink-0">{icon}</span> 
            <span className="capitalize tracking-wide">{text}</span>
        </div>
    )
}
