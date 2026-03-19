'use client';

import { useRouter } from "next/navigation";
import { HomePageHeader } from "@/components/homepage/header";
import { FeatureCard } from "@/components/homepage/featureCard";
import { MdFamilyRestroom, MdSecurity, MdSupportAgent } from "react-icons/md";
import { IoIosFlash } from "react-icons/io";
import { BsClipboardData, BsGlobe2 } from "react-icons/bs";


export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Hero Section with integrated navigation */}
       < HomePageHeader/>

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

            <div className="grid md:grid-cols-3 auto-rows-fr gap-8">
              <FeatureCard icon= {<MdSecurity size={24}/>} title="Segurança de Dados" description="Seus dados financeiros são criptografados com as mesmas tecnologias usadas pelos melhores bancos!"/>
              <FeatureCard icon={<IoIosFlash size={24} />} title="Sincronização Rápida" description="Todas as suas transações são atualizadas em tempo real em todos os seus dispositivos."/>
              <FeatureCard icon={<BsClipboardData size={24}/>} title="Fácil Visualização" description="Acesse suas finanças de qualquer lugar com nosso site e veja como anda o balanço de gastos."/>
              <FeatureCard icon={<MdFamilyRestroom size={24}/>} title="Controle" description="Saiba exatamente para onde está indo seu dinheiro."/>
              <FeatureCard icon={<BsGlobe2 size={24}/>} title="Conectividade" description="Entre em nosso site utilizando qualquer dispositivo que você tenha disponívelme."/>
              <FeatureCard icon={<MdSupportAgent size={24}/>} title="Suporte 24/7" description="Equipe pronta para ajudar com suas dúvidas a qualquer hora do dia ou da noite."/>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-light-green py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
