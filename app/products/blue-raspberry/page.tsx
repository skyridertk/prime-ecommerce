import React from 'react'

import { CarouselItem } from '@/components/CarouselItem';
import blue_rasperry_back from '@/assets/PrimeHydration_1serve_bluerasberry_0002_1799x1799-back.png';
import blue_rasperry_side from '@/assets/PrimeHydration_1serve_bluerasberry_0001_1799x1799-side.png';
import blue_rasperry_front from '@/assets/PrimeHydration_1serve_bluerasberry_0000_1799x1799-front.png';
import QuantityItem from '@/components/QuantityItem';
import { ProductDetail } from '@/components/ProductDetail';
import { Benefits } from '@/components/Benefits';
import meta_moon from '@/assets/Prime-Metamoon-ProductDetail-front_600x.png';
import ice_pop from '@/assets/PrimeHydration_1serve_IcePop_0000_400x.png';
import lemon_lime from '@/assets/PrimeHydration_1serve_lemonlime_0000_400x.png';
import grape from '@/assets/PrimeHydration_1serve_grape_0000_400x.png';
import { Recommendation } from '@/components/Recommendation';
import { ShopItem } from '@/components/ShopItem';

export default function BlueRasperryPage() {

    return (
        <div className='py-32 flex p-10 justify-center flex-col items-center'>
            <div className='max-w-6xl flex'>

                <CarouselItem front={blue_rasperry_front} side={blue_rasperry_side} back={blue_rasperry_back} />

                <div className='w-5/12 px-10 space-y-4'>
                    <ProductDetail title={'Blue Rasperry'} price="$29.99" description="Pay in 4 interest-free installments for orders over $50.00">
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
                    <ShopItem src={meta_moon} title={'Meta Moon'} price={'$29.99'} pack={'12 PK'} to={'/products/meta-moon'} />
                    <ShopItem src={grape} title={'Grape'} price={'$29.99'} pack={'12 PK'} to={'/products/grape'} />
                    <ShopItem src={lemon_lime} title={'Lemon Lime'} price={'$29.99'} pack={'12 PK'} to={'/products/lemon-lime'} />
                </div>
            </Recommendation>
        </div>
    )
}


