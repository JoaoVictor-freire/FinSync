'use client'

import React, { use, useState } from "react"
import { Input } from "../../ui/input"
import { CiMail, CiLock } from "react-icons/ci";

export function LoginForm(){
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');

    const isCPF = (value: string) => /^\d/.test(value)

    const formatCPF = (value: string) => {
        const numbers = value.replace(/\D/g, '').slice(0, 11)
        return numbers.replace(/(\d{3})(\d{3})?(\d{3})?(\d{2})?/, (_, p1, p2, p3, p4) => {
            let result = p1
            if (p2) result += '.' + p2
            if (p3) result += '.' + p3
            if (p4) result += '-' + p4
            return result
        })
    }

    const handleIdentifierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        if (isCPF(value)){
            setIdentifier(value)
        } else {
            setIdentifier(value)
        }
    }

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const cleanCPF = identifier.replace(/\D/g, '')
        const isEmail = identifier.includes('@')

        try{
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
                {
                    method: 'POST',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({email: identifier, senha:password})
                }    
            )

            const data = await response.json()
            console.log('Sucesso: ', data)
        }catch(error){
            console.log('Erro: ', error)
        }
    }

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
                Entrar
            </button>
        </form>
    );
}