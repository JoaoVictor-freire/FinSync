import React, { useState } from "react";

export function useLoginForm(){
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const formatCPF = (value: string) => {
        const numbers = value.replace(/\D/g, '').slice(0, 11);
        return numbers.replace(/(\d{3})(\d{3})?(\d{3})?(\d{2})?/, (_, p1, p2, p3, p4) => {
            let result = p1;
            if (p2) result += '.' + p2;
            if (p3) result += '.' + p3;
            if (p4) result += '-' + p4;
            return result;
        });
    }

    const handleIdentifierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d/.test(value)) {
            setIdentifier(formatCPF(value));
        } else {
            setIdentifier(value);
        }
    }
    

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const cleanIdentifier = identifier.includes('@') ? identifier : identifier.replace(/\D/g, '');

        try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    email: cleanIdentifier,
                    senha: password
                })
            });
            const data = await response.json();

            if(!response.ok){
                throw new Error(data.message || 'Erro ao realizar login');
            }

            console.log('Login bem-sucedido: ', data);
            return data;
        }catch(error){
            console.log('Erro no hook: ', error);
            alert('Falha no login. Verifique suas credenciais.')
        }finally{
            setIsLoading(false);
        }
    }

    return {
        identifier,
        password,
        setPassword,
        isLoading,
        handleIdentifierChange,
        handleSubmit
    }
}
