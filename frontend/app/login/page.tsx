'use client'

import React, { useState } from "react";

export default function Login(){
    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')

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
        if (isCPF(value)) {
            setIdentifier(formatCPF(value))
        } else {
            setIdentifier(value)
        }
    }

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const cleanCPF = identifier.replace(/\D/g, '')
        const isEmail = identifier.includes('@')
        console.log({
            type: isEmail ? 'email' : 'cpf',
            identifier: isEmail ? identifier : cleanCPF,
            password
        })
    }

    return(
        <div className="bg-white min-h-screen flex ">
            {/*Lado Esquerdo*/}
            <div className="bg-brand-green shadow-md w-3/5 rounded-r-lg flex flex-col items-center justify-center gap-10 relative">
                <span className="font-semibold text-3xl text-letters-green">
                    Welcome to, FinSync!
                </span>
                <div className="shrink-0">
                <img 
                  src="/black_logo.svg" 
                  alt="FinSync Logo" 
                  className="h-50 w-50"
                />
              </div> 
              <h2 className="text-letters-green font-semibold">Mantenha suas contas controladas para que elas não le controlem</h2>
            </div>

            {/*Lado Direito*/}
            <div className="bg-background-green shadow-lg w-2/5 flex flex-col items-center justify-center rounded-l-xl -ml-4">

                <div>
                    <header className="font-semibold text-letters-green text-4xl">WELCOME</header>
                </div>

                <form className="w-full max-w-md p-8 flex flex-col" onSubmit={handleSubmit}>

                    <label className="text-center text-gray-800 flex">Email</label>
                    <input 
                    type="text"
                    value={identifier}
                    onChange={handleIdentifierChange}
                    className="bg-light-green text-gray-800 p-2 rounded border border-gray-300 mb-4 text-sm"
                    placeholder="Digite seu Email/CPF"
                    />
                    

                    <label className="text-center text-gray-800 flex">Senha</label>
                    <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-light-green text-gray-800 p-2 rounded border border-gray-300 mb-6 text-sm"
                    placeholder="Insira sua senha"
                    />

                    <button
                    type="submit"
                    className="w-full bg-brand-green text-white py-2 rounded-md"
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
}