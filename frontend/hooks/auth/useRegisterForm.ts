import { useState } from "react";
import { useRouter } from "next/navigation";

export function useRegisterForm(){
    const router = useRouter();
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
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

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if (!name || !cpf || !email || !password) {
            return;
        }
        
        setIsLoading(true);

        try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    nome: name,
                    cpf: cpf.replace(/\D/g, ''),
                    email: email,
                    senha: password,
                })
            });
            const data = await response.json();

            if(!response.ok){
                throw new Error(data.message || 'Erro ao registrar-se')
            }else{
                router.push('/login')
            }

            console.log('Sucesso ao registrar-se: ', data);
            return data;
        }catch(error){
            console.log('Erro no hook: ', error)
            alert('Falha no registro. Verifique se os campos estão corretamente preenchidos.')
        }finally{
            setIsLoading(false);
        }
    }
    return {
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
    }
}