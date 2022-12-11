import React from 'react'
import Antioxidents_3 from '@/assets/Antioxidents_3.png';
import banner_prime from "@/assets/collectionbanner_website_2000x.png"
import Image from 'next/image'
import { ShopItem } from '@/components/ShopItem';
import { Benefits } from '@/components/Benefits';

/* Meta Moon
                    Ice Pop
                    Blue Raspberry
                    Orange
                    Tropical Punch
                    Lemon Lime
                    Grape */
import meta_moon from '@/assets/Prime-Metamoon-ProductDetail-front_600x.png';
import ice_pop from '@/assets/PrimeHydration_1serve_IcePop_0000_400x.png';
import blue_raspberry from '@/assets/PrimeHydration_1serve_bluerasberry_0000_400x.png';
import orange from '@/assets/PrimeHydration_1serve_orange_0000_400x.png';
import tropical_punch from '@/assets/PrimeHydration_1serve_tropicalpunch_0000_400x.png';
import lemon_lime from '@/assets/PrimeHydration_1serve_lemonlime_0000_400x.png';
import grape from '@/assets/PrimeHydration_1serve_grape_0000_400x.png';

// Ice Pop
// Blue Raspberry
// Tropical Punch
// Lemon Lime
import ice_pop_stick from '@/assets/PrimeHydration_stickpack_IcePop_0000_400x.png';
import blue_raspberry_stick from '@/assets/PrimeHydration_stickpack_BlueRasberry_0000_400x.png';
import tropical_punch_stick from '@/assets/PrimeHydration_stickpack_TropicalPunch_0000_400x.png';
import lemon_lime_stick from '@/assets/PrimeHydration_stickpack_LemonLime_0000_400x.png';

import { HydrationType } from '@/components/HydrationType';

export default function Shop() {
    return (

        <div className='py-16'>
            <Image alt="leeerob" src={banner_prime} height={600} />

            <div className='flex justify-center py-10'>
                <div className='max-w-6xl '>
                    <Benefits />
                </div>
            </div>

            <div className='flex justify-center py-6'>
                <div className='grid grid-cols-2 xl:grid-cols-3  max-w-6xl gap-5 gap-y-7'>
                    <ShopItem src={meta_moon} title={'Meta Moon'} price={'$29.99'} pack={'12 PK'} to={'/products/meta-moon'} />
                    <ShopItem src={ice_pop} title={'Ice Pop'} price={'$29.99'} pack={'12 PK'} to={'/products/ice-pop'} />
                    <ShopItem src={blue_raspberry} title={'Blue Raspberry'} price={'$29.99'} pack={'12 PK'} to={'/products/blue-raspberry'} />
                    <ShopItem src={orange} title={'Orange'} price={'$29.99'} pack={'12 PK'} to={'/products/orange'} />
                    <ShopItem src={tropical_punch} title={'Tropical Punch'} price={'$29.99'} pack={'12 PK'} to={'/products/tropical-punch'} />
                    <ShopItem src={lemon_lime} title={'Lemon Lime'} price={'$29.99'} pack={'12 PK'} to={'/products/lemon-lime'} />
                    <ShopItem src={grape} title={'Grape'} price={'$29.99'} pack={'12 PK'} to={'/products/grape'} />
                    <ShopItem src={ice_pop_stick} title={'Ice Pop'} price={'$29.99'} pack={'6PK'} type={HydrationType.stick} to={'/products/ice-pop-stick'} />
                    <ShopItem src={blue_raspberry_stick} title={'Blue Raspberry'} price={'$29.99'} pack={'6PK'} type={HydrationType.stick} to={'/products/blue-raspberry-stick'} />
                    <ShopItem src={tropical_punch_stick} title={'Tropical Punch'} price={'$29.99'} pack={'6PK'} type={HydrationType.stick} to={'/products/tropical-punch-stick'} />
                    <ShopItem src={lemon_lime_stick} title={'Lemon Lime'} price={'$29.99'} pack={'6PK'} type={HydrationType.stick} to={'/products/lemon-lime-stick'} />


                </div>
            </div>
        </div>

    )


}

