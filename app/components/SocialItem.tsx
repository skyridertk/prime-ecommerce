import Link from 'next/link';
import React from 'react';

export function SocialItem({ icon, link }: { icon: React.ReactNode; link: string; }) {
    return <Link href={link}>
        {icon}
    </Link>;
}
