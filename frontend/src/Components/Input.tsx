export function Input({onChange, placeholder}: {onChange?:()=>void, placeholder: string}){
    return (
        <div className="w-full">
            <input 
                type="text" 
                placeholder={placeholder} 
                onChange={onChange} 
                className="w-full px-4 py-2.5 text-xs bg-white text-slate-800 border border-slate-200 rounded-xl placeholder-slate-400 focus:outline-none focus:border-slate-400 transition-all shadow-2xs" 
            />
        </div>
    )
}