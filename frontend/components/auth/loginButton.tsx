import { useRouter } from "next/navigation";

export function LoginButton(){
    const router = useRouter();

    return(
        <button
        onClick={() => router.push('/login')}
        className="text-white/90 hover:text-white hover:bg-white/20 px-3 py-2 border rounded-md text-sm font-medium transition-colors"
        >
        Entrar
        </button>
    );
}