'use client'

import { Input } from "../../ui/input"
import { CiMail, CiLock } from "react-icons/ci";
import { useLoginForm } from "@/hooks/useLoginForm";

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
        <form className=" w-full max-w-md p-8 flex flex-col gap-3" onSubmit={handleSubmit}>
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