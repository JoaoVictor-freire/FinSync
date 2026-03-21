'use client'

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

interface BackButtonInput extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    frase: string
} 

export function BackButton({frase, ...props}: BackButtonInput){
    const router = useRouter();

    return(
        <button
        onClick={() => router.push('/')}
        className="flex items-center gap-2 hover:text-brand-green transation-colors text-letters-green"
        {...props}
        >
            <FaArrowLeft size={20}/>
            <span>
                {frase}
            </span>
        </button>
    );
}