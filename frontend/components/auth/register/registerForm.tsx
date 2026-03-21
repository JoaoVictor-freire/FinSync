'use client'

import { Input } from "@/components/ui/input"
import { CiMail, CiLock,  CiUser} from "react-icons/ci";
import { useRegisterForm } from "@/hooks/auth/useRegisterForm";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { BackButton } from "@/components/ui/backbutton";


export function RegisterForm(){
    const {
        name,
        cpf,
        email,
        password,
        isLoading,
        setCpf,
        setEmail,
        setPassword,
        setName,
        handleSubmit
    } = useRegisterForm();

    return(
        <form className="w-full max-w-md flex flex-col p-8 gap-3" onSubmit={handleSubmit}>
            <div className="w-full items-start flex flex-col gap-4">
                <BackButton frase="Volte para o menu principal"/>
                <div>
                    <header className="font-bold text-letters-green text-3xl">Cadastra-se</header>
                    <h1 className="text-gray-400">
                        Controlar sua vida financeira com nossa ajuda.
                    </h1>
                </div>
            </div>
            <Input
            className="w-full"
            label="Nome"
            id="nome"
            iconLeft= {<CiUser size={20}/>}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Insira seu nome"
            />
            <Input
            className="w-full"
            label="CPF"
            id="cpf"
            iconLeft= {<IoDocumentAttachOutline size={20}/>}
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="Insira seu CPF"
            />
            <Input
            className="w-full"
            label="Email"
            id="email"
            iconLeft= {<CiMail size={20}/>}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Insira seu Email"
            />
            <Input
            className="w-full"
            label="Senha"
            id="senha"
            iconLeft= {<CiLock size={20}/>}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Insira sua senha"
            />

            <button type="submit" className="w-full bg-brand-green text-white py-2 rounded-md mt-4">
                {isLoading ? 'Carregando...' : 'Criar'}
            </button>
        </form>
    );
}