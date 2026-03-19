import React from 'react';
import type { ReactNode } from 'react';

interface FeatureCardProps{
    icon: ReactNode;
    title: string;
    description: string;
}

export function FeatureCard({icon, title, description}: FeatureCardProps){

    return(
        <div className='bg-white flex flex-col items-start p-6 rounded-xl border shadow-sm hover:shadow-xl transition-shadow duration-300 h-full'>
            <div className='bg-brand-green p-3 text-letters-green rounded-xl mb-4'>
                {icon}
            </div>

            <div className='text-xl font-semibold text-letters-green'>
                {title}
            </div>

            <div className=' text-sm text-gray-500 font-bold'>
                {description}
            </div>
        </div>
    );
}