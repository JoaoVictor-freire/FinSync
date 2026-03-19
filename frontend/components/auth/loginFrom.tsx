'use client'

import React, { use, useState } from "react"
import { Input } from "../ui/input"
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
    }

    return(
        <form className=" w-full max-w-md p-8 flex flex-col gap-3" onSubmit={handleSubmit}>
            <Input label="Email" iconLeft={<CiMail size={20}/>} className="w-full" placeholder="Digite seu Email/CPF"/>
            <Input label="Senha" iconLeft={<CiLock size={20}/>} className="w-full" placeholder="Digite sua senha"/>
            <button type="submit" className="w-full bg-brand-green text-white py-2 rounded-md mt-4">
                Entrar
            </button>
        </form>
    );
}