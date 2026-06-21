import type { ReactElement } from "react"

interface ButtonProps {
    variant:"primary"|"secondary",
    size: "sm"|"md"|"lg",
    text: string,
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    onClick:()=>void
}

const baseStyles="rounded-xl font-medium flex items-center justify-center"

const ButtonVariants={
    "primary":"bg-blue-500 text-white",
    "secondary":"bg-blue-300 text-blue-800"
}

const sizeStyles={
    "sm":"px-2 py-1 text-sm",
    "md":"px-3 py-2",
    "lg":"px-5 py-3 text-lg"
}

export const Button=(props:ButtonProps)=>{
    return <button className={`${baseStyles} ${ButtonVariants[props.variant]} ${sizeStyles[props.size]} flex items-center gap-2`}>
            {props.startIcon}
            {props.text}
        {props.endIcon}
    </button>
}