interface ButtonProps {
    variant:"primary"|"secondary"|"tags",
    size: "sm"|"md"|"lg",
    text: string,
    startIcon?: React.ReactNode,
    endIcon?: React.ReactNode,
    onClick?:()=>void;
    darkMode?: boolean;
}

const baseStyles = "font-semibold tracking-wide transition-all duration-200 shrink-0 select-none flex items-center justify-center border"

export const Button = (props: ButtonProps) => {
    const ButtonVariants = {
        "primary": props.darkMode 
            ? "bg-[#ffffff] text-[#050505] border-transparent hover:bg-[#e5e7eb] shadow-sm"
            : "bg-slate-900 hover:bg-black text-white border-transparent shadow-sm",
        
        "secondary": props.darkMode
            ? "bg-[#121212] border-[#222222] text-[#e5e7eb] hover:bg-[#1a1a1a] hover:border-[#333333] shadow-xs"
            : " bg-[#fff] text-slate-800 border-slate-300 hover:border-slate-400 hover:bg-slate-50 shadow-xs",
        
        "tags": props.darkMode
            ? "bg-[#161616] text-[#a3a3a3] border-transparent text-[10px] font-mono tracking-tight"
            : "bg-slate-100 text-slate-500 border-transparent text-[10px] font-mono tracking-tight"
    }

    const sizeStyles = {
        "sm": "px-2.5 py-0.5 rounded-md text-[10px]",
        "md": "px-4 py-2 rounded-xl text-xs gap-1.5",
        "lg": "px-5 py-3 rounded-2xl text-sm gap-2"
    }

    return (
        <button 
            onClick={props.onClick} 
            className={`${baseStyles} ${ButtonVariants[props.variant]} ${sizeStyles[props.size]}`}
        >
            {props.startIcon && <span className="flex items-center shrink-0">{props.startIcon}</span>}
            <span>{props.text}</span>
            {props.endIcon && <span className="flex items-center shrink-0">{props.endIcon}</span>}
        </button>
    )
}