'use client'

import { RegisterForm } from "@/components/auth/register/registerForm"

export default function Register(){
    
    return(
        <div className="bg-white min-h-screen flex ">
            {/*Lado Esquerdo*/}
            <div className="bg-brand-green shadow-md w-3/5 flex flex-col items-center justify-center gap-10 relative">
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
            <div className="bg-white shadow-lg w-2/5 flex flex-col items-center justify-center ">
                <RegisterForm/>
            </div>
        </div>
    );
}