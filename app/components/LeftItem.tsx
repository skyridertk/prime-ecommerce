import Link from 'next/link';
import React from 'react';

export function LeftItem({ title, to = "" }: { title: string; to?: string; }) {
    return <Link href={to}>

        <div className='uppercase font-bold text-sm'>
            {title}
        </div>
    </Link>;
}
