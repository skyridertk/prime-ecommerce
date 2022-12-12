import Link from 'next/link';
import React from 'react';
import { Popover, Transition } from '@headlessui/react'

export function FooterPopButtonItem({ title, link, uppercase = false }: { title: string; link: string; uppercase?: boolean; }) {
    return <Popover.Button as={Link}  href={link}>
        <div className={`py-4 ${uppercase ? 'uppercase' : ''}`}>{title}</div>
    </Popover.Button>;
}
