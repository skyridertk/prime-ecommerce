import React from 'react';

export function ProductDetail({ title, pack, price, description, children }: { title: string; pack?: string; price: string; description: string; children?: any; }) {
    return <div className='space-y-4'>
        <div>
            <div className='uppercase font-bold'>{title}</div>
            <div>{pack}</div>
        </div>
        <div>{price}</div>
        <div>{description}</div>

        <hr />

        {children}
    </div>;
}
