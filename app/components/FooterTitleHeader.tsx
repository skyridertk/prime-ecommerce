import React from 'react';

export function FooterTitleHeader({ title }: { title: string; }) {
    return <div className='uppercase font-bold text-2xl'>
        {title}
    </div>;
}
