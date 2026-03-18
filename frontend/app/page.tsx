'use client';

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Hero Section with integrated navigation */}
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
                <button 
                  onClick={() => router.push('/login')}
                  className="text-white/90 hover:text-white hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium transition-colors border"
                >
                  Entrar
                </button>
                
                <button 
                  onClick={() => router.push('/register')}
                  className="bg-white text-letters-green px-4 py-2 rounded-md text-sm font-medium hover:bg-white/90 transition-colors"
                >
                  Criar Conta
                </button>
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

        {/* Features Section */}
        <section className="py-20 bg-light-green">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-letters-green mb-4">
                Por que escolher o FinSync?
              </h2>
              <p className="text-lg text-letters-green max-w-2xl mx-auto">
                Ferramentas poderosas para transformar sua vida financeira
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="h-8 w-8 text-letters-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-letters-green">Gestão de Contas</h3>
                <p className="text-letters-green">
                  Organize todas as suas contas em um só lugar com categorização inteligente
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="h-8 w-8 text-letters-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-letters-green">Relatórios Detalhados</h3>
                <p className="text-letters-green">
                  Visualize seus gastos com gráficos e relatórios detalhados para melhor tomada de decisão
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="h-8 w-8 text-letters-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-letters-green">Segurança Máxima</h3>
                <p className="text-letters-green">
                  Seus dados financeiros protegidos com criptografia de ponta a ponta
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-light-green py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-letters-green mb-4">
              Pronto para transformar suas finanças?
            </h2>
            <p className="text-lg text-letters-green mb-8">
              Comece hoje mesmo e tome controle do seu futuro financeiro
            </p>
            <button 
              onClick={() => router.push('/register')}
              className="bg-brand-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Começar Gratuitamente
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
