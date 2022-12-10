import React from 'react'
import Antioxidents_3 from '@/assets/Antioxidents_3.png';
import banner_prime from "@/assets/collectionbanner_website_2000x.png"
import Image from 'next/image'
import { ShopItem } from '@/components/ShopItem';

export default function Shop() {
    return (

        <div className='py-16'>
            <Image alt="leeerob" src={banner_prime} height={600} />

            <div className='flex justify-center py-10'>
                <div className='grid grid-cols-5  max-w-6xl gap-7'>
                    <Image alt="leeerob" src={Antioxidents_3} />
                    <Image alt="leeerob" src={Antioxidents_3} />
                    <Image alt="leeerob" src={Antioxidents_3} />
                    <Image alt="leeerob" src={Antioxidents_3} />
                    <Image alt="leeerob" src={Antioxidents_3} />
                </div>
            </div>

            <div className='flex justify-center py-6'>
                <div className='grid grid-cols-2 xl:grid-cols-3  max-w-6xl gap-5 gap-y-7'>
                    {ShopItem()}
                    {ShopItem()}
                    {ShopItem()}
                    {ShopItem()}
                </div>
            </div>
        </div>

    )

    
}

