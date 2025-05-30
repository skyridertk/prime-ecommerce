import React from 'react'

import { CarouselItem } from '@/components/CarouselItem';
import meta_moon_front from '@/assets/Prime-Metamoon-ProductDetail-front_1799x1799.png';
import meta_moon_side from '@/assets/Prime-Metamoon-ProductDetail-side_1799x1799.png';
import meta_moon_back from '@/assets/Prime-Metamoon-ProductDetail-back_1799x1799.png';
import QuantityItem from '@/components/QuantityItem';
import { ProductDetail } from '@/components/ProductDetail';
import { Benefits } from '@/components/Benefits';
import ice_pop from '@/assets/PrimeHydration_1serve_IcePop_0000_400x.png';
import blue_raspberry from '@/assets/PrimeHydration_1serve_bluerasberry_0000_400x.png';
import lemon_lime from '@/assets/PrimeHydration_1serve_lemonlime_0000_400x.png';
import grape from '@/assets/PrimeHydration_1serve_grape_0000_400x.png';
import { ShopItem } from '@/components/ShopItem';
import { Recommendation } from '@/components/Recommendation';

export default function MetaMoonPage() {

    return (
        <div className='py-32 p-10 justify-center items-center flex flex-col'>
            <div className='max-w-6xl flex'>

                <CarouselItem front={meta_moon_front} side={meta_moon_side} back={meta_moon_back} />

                <div className='w-5/12 px-10 space-y-4'>
                    <ProductDetail title={'Meta Moon'} price="$29.99" description="Pay in 4 interest-free installments for orders over $50.00">
                        <ul className='py-4 list-disc px-5'>
                            <li>Zero added sugar</li>
                            <li>20 Calories</li>
                            <li>10% Coconut Water</li>
                            <li>Electrolytes</li>
                        </ul>
                    </ProductDetail>

                    <Benefits />

                    <QuantityItem />

                    <button className='uppercase outline outline-1 px-4 py-2'>
                        Notify me when available
                    </button>

                </div>
            </div>

            <Recommendation>
                <div className='grid grid-cols-4 max-w-4xl'>
                    <ShopItem src={ice_pop} title={'Ice Pop'} price={'$29.99'} pack={'12 PK'} to={'/products/ice-pop'} />
                    <ShopItem src={blue_raspberry} title={'Blue Raspberry'} price={'$29.99'} pack={'12 PK'} to={'/products/blue-raspberry'} />
                    <ShopItem src={grape} title={'Grape'} price={'$29.99'} pack={'12 PK'} to={'/products/grape'} />
                    <ShopItem src={lemon_lime} title={'Lemon Lime'} price={'$29.99'} pack={'12 PK'} to={'/products/lemon-lime'} />
                </div>
            </Recommendation>
        </div>
    )

}



