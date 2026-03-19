import { useRouter } from "next/navigation";
import { LoginButton } from "../auth/login/loginButton";
import { RegisterButton } from "../auth/register/registerButton";

export function HomePageHeader(){
    const router = useRouter();

    return (
        <div className=" bg-gray-100">
            <section className="relative bg-brand-green text-white">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80')] bg-cover bg-center opacity-20"></div>
            <div className="absolute inset-0 bg-linear-to-b from-black/30 to-transparent"></div>
            
            {/* Navigation */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
                <div className="flex justify-between items-center h-20">
                {/* Logo */}
                <div className="flex items-center">
                    <div className="shrink-0">  
                    <img 
                        src="/logo.svg" 
                        alt="FinSync Logo" 
                        className="h-13 w-13"
                    />
                    </div>  
                    <span className="ml-3 text-xl font-bold text-white">FinSync</span>
                </div>

                {/* Buttons */}
                <div className="flex items-center space-x-4">
                    <LoginButton/>
                    <RegisterButton/>
                    
                </div>
                </div>

                {/* Hero Content */}
                <div className="text-center py-20">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Controle Financeiro Simplificado
                </h1>
                <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                    Organize suas contas, acompanhe gastos e planeje seu futuro com nossa plataforma inteligente de gestão financeira
                </p>
                </div>
            </div>
            </section>
        </div>
    );
}