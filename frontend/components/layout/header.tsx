'use client'

import { useState, useEffect, useRef } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { CiSettings, CiLogout, CiCircleQuestion, CiUser } from "react-icons/ci";
import { navigateItems } from "@/constants/navigate";
import Link from "next/link";
import { link } from "fs";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Fecha o menu se clicar fora dele
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="w-full h-full bg-white border-b border-gray-100 flex flex-col items-center px-8 sticky top-0 z-40">

            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2 py-1">
                    <img src="logo.svg" alt="" className="h-10"/>
                    <span className="text-2xl font-bold text-brand-green">Fin</span>
                    <span className="text-2xl font-bold text-letters-green text-opacity-80">Sync</span>
                </div>

                {/* Lado Direito: Perfil e Opções */}
                <div className="flex items-center gap-4" ref={menuRef}>
                    <div className="flex flex-col items-end sm:flex">
                        <span className="text-sm font-medium text-letters-green">João Victor</span>
                    </div>

                    <div className="relative">
                        {/* Botão de 3 Pontos */}
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`p-2 rounded-full transition-all ${isMenuOpen ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                            aria-label="Menu de opções"
                        >
                            <HiDotsVertical size={22} className="text-gray-500" />
                        </button>

                        {/* Dropdown Menu */}
                        {isMenuOpen && (
                            <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-xl py-2 animate-in fade-in zoom-in duration-200">
                                <div className="px-4 py-2 border-b border-gray-50 mb-1 sm:hidden">
                                    <p className="text-sm font-bold text-letters-green">João Victor</p>
                                </div>

                                <Link href="/dashboard/perfil" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand-green transition-colors">
                                    <CiUser size={20} /> Meu Perfil
                                </Link>
                                
                                <Link href="/dashboard/configuracoes" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand-green transition-colors">
                                    <CiSettings size={20} /> Configurações
                                </Link>

                                <Link href="/ajuda" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand-green transition-colors">
                                    <CiCircleQuestion size={20} /> Central de Ajuda
                                </Link>

                                <div className="border-t border-gray-100 mt-2 pt-2">
                                    <button 
                                        onClick={() => console.log('Logando out...')}
                                        className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors"
                                    >
                                        <CiLogout size={20} /> Sair da conta
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
            <div className="flex items-center justify-between w-full py-3 text-brand-green">
                {navigateItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                        {item.label}
                    </Link>
                ))}
            </div>

        </header>
    );
}