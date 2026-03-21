'use client'

import { Input } from "../../ui/input"
import { CiMail, CiLock } from "react-icons/ci";
import { useLoginForm } from "@/hooks/auth/useLoginForm";
import { BackButton } from "@/components/ui/backbutton";
export function LoginForm(){
    const {
        identifier,
        password,
        setPassword,
        isLoading,
        handleIdentifierChange,
        handleSubmit
    } = useLoginForm();

    return(
        <form className="w-full max-w-md p-8 flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="w-full items-start flex flex-col gap-4">
                <BackButton frase="Volte para o menu principal"/>
                <div>
                    <header className="font-bold text-letters-green text-3xl">Bem-vindo de volta!</header>
                    <h1 className="text-gray-400">
                        Entre em nossa plataforma e gerencie seu dinheiro.
                    </h1>
                </div>
            </div>
            <Input
            id="email"
            label="Email"
            iconLeft={<CiMail size={20}/>}
            className="w-full"
            placeholder="Digite seu Email/CPF"
            value={identifier}
            onChange={handleIdentifierChange}
            />
            <Input
            id="senha"
            label="Senha"
            iconLeft={<CiLock size={20}/>}
            className="w-full"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="w-full bg-brand-green text-white py-2 rounded-md mt-4">
                {isLoading ? 'Carregando...' : 'Entrar'}
            </button>
        </form>
    );
}