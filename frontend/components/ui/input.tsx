import { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label?: string;
    iconLeft?: ReactNode; 
    iconRight?: ReactNode; 
}

export function Input({label, id, className="", iconLeft, iconRight, ...props}: InputProps){
    return(
        <div className="flex flex-col gap-1 w-full">
            {label && (
                <label htmlFor="id" className="text-sm font-medium text-letters-green">
                    {label}
                </label>
            )}


            <div className="relative w-gull group">

                {iconLeft && (
                <div className="absolute left-0 inset-y-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors">
                    {iconLeft}
                </div>
                )}

                <input id={id} className={`
                    px-4 py-2 border border-gray-300 rounded-md shadow-sm text-letters-green placeholder-gray-400 bg-light-green
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                    transition-colors duration-200 
                    disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed
                    ${iconLeft ? 'pl-11' : ''}
                    ${iconRight ? 'pr-11' : ''}
                    ${className} 
                `}
                {...props} />

                {iconRight && (
                <div className="absolute right-0 inset-y-0 pr-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors">
                    {iconRight}
                </div>
                )}

            </div>
            
        </div>
    );
}