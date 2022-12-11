import React from 'react';
import Image from 'next/image';
import { HydrationType } from './HydrationType';
import Link from 'next/link';

export function ShopItem({ src, title, pack, price, type = HydrationType.drink, to }: { src: any, title: string, pack: string, price: string, type?: HydrationType, to: string }) {
    return <div className='flex flex-col justify-center'>
        <Link href={to}>
            <Image alt="leeerob" src={src} height={600} />
        </Link>
        <div className='flex flex-col justify-center items-center p-2 text-center space-y-4'>
            <div>
                <Link href={to}>
                    {type == HydrationType.drink ? <div>{title}</div> : <div>{title} {pack}</div>}
                </Link>
                {type == HydrationType.drink ? <div>{pack} / {price}</div> : <></>}
            </div>
            <button className='outline outline-1 w-40 font-bold'>Sold out</button>
        </div>
    </div>;
}
