import React from 'react';
import white_prime from '@/assets/Prime-Metamoon-ProductDetail-front_600x.png';
import Image from 'next/image';

export function ShopItem() {
    return <div className='flex flex-col justify-center'>
        <div className=' '>
            <Image alt="leeerob" src={white_prime} height={600} />
        </div>
        <div className='flex flex-col justify-center items-center p-2 text-center space-y-4'>
            <div>
                <div>Meta Moon</div>
                <div>12PK / $29.99</div>
            </div>
            <button className='outline outline-1 w-40 font-bold'>Sold out</button>
        </div>
    </div>;
}
