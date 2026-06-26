export function Input({valueChange, value ,placeholder, darkMode}: {valueChange?:(value: string)=>void, value: string, placeholder: string, darkMode?: boolean}){
    
    return (
        <div className="w-full">
            <input 
                type="text" 
                placeholder={placeholder} 
                value={value}
                onChange={(e)=>valueChange?.(e.target.value)} 
                className={`w-full px-4 py-2.5 text-xs border rounded-xl focus:outline-none transition-all shadow-2xs ${darkMode ? 'bg-[#050505] text-[#f3f4f6] border-[#1f1f1f] placeholder-[#4b5563] focus:border-[#404040]' : 'bg-white text-slate-800 border-slate-200 placeholder-slate-400 focus:border-slate-400'}`} 
            />
        </div>
    )
}