import Link from 'next/link';
import React from 'react';

export function LinkIcon({ icon, to = "/" }: { icon: React.ReactNode; to?: string; }) {
    return <Link href={to}>
        <button>
            {icon}
        </button>
    </Link>;
}
