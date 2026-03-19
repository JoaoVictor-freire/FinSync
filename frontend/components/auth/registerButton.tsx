import { useRouter } from "next/navigation";

export function RegisterButton(){
    const router = useRouter();

    return(
        <button 
        onClick={() => router.push('/register')}
        className="bg-white text-letters-green px-4 py-2 rounded-md text-sm font-medium hover:bg-white/90 transition-colors"
        >
            Criar Conta
        </button>
    );
}