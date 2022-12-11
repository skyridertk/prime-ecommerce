import React from 'react';

export function Recommendation({ children }: { children: React.ReactNode; }) {
    return <div className='py-20 space-y-10'>
        <div className='text-center text-2xl font-bold'>You may also like</div>
        <div className='flex justify-center'>
            {children}
        </div>
    </div>;
}
