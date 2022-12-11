import React from 'react';

export function HeaderPoliciy({ title }: { title: string; }) {
    return <div className='uppercase font-bold'>
        {title}
    </div>;
}
