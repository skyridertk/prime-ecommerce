import Link from 'next/link';
import React from 'react';

export function LeftItem({ title, to = "" }: { title: string; to?: string; }) {
    return <Link href={to}>

        <div className='uppercase text-base font-medium text-gray-500 hover:text-gray-900"'>
            {title}
        </div>
    </Link>;
}
