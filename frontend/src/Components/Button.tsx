interface ButtonProps {
    variant:"primary"|"secondary"|"tags",
    size: "sm"|"md"|"lg",
    text: string,
    startIcon?: React.ReactNode,
    endIcon?: React.ReactNode,
    onClick?:()=>void;
}

const baseStyles = "font-semibold tracking-wide transition-all duration-200 shrink-0 select-none flex items-center justify-center border"

const ButtonVariants = {
    // Solid High-Contrast Jet Black for Premium Minimal Aesthetics
    "primary": "bg-slate-900 hover:bg-black text-white border-transparent shadow-sm",
    
    // Pure White Solid Plank with Subtle Slate Borders
    "secondary": "bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-xs",
    
    // Soft Gray Token Badge
    "tags": "bg-slate-100 text-slate-500 border-transparent text-[10px] font-mono tracking-tight"
}

const sizeStyles = {
    "sm": "px-2.5 py-0.5 rounded-md text-[10px]",
    "md": "px-4 py-2 rounded-xl text-xs gap-1.5",
    "lg": "px-5 py-3 rounded-2xl text-sm gap-2"
}

export const Button = (props: ButtonProps) => {
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