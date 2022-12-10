import Link from 'next/link';
import React from 'react';

export function FooterItem({ title, link, uppercase = false }: { title: string; link: string; uppercase?: boolean; }) {
    return <Link href={link}>
        <div className={`py-4 ${uppercase ? 'uppercase' : ''}`}>{title}</div>
    </Link>;
}
