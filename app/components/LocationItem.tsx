import Link from 'next/link';
import React from 'react';

export function LocationItem({ text, to = "/" }: { text: string; to?: string; }) {
    return <Link href={to}>
        <div>
            {text}
        </div>
    </Link>;
}
