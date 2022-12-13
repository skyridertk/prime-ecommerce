"use client"
import { ShopItem } from '@/components/ShopItem'
import React, { useState } from 'react'
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
import { Slider } from 'antd';
import { HydrationType } from '@/components/HydrationType';

import { SlArrowDown } from 'react-icons/sl';

//

interface SearchProps{
    params: { },
    searchParams: {
        q?: string,
        type?: string,
        sort_by?: string,
        'options[prefix]'?: string,
    }
}

export default function SearchRoute(searchProps: SearchProps) {
    console.log(searchProps)
    const [min, setMin] = useState(13);
    const [max, setMax] = useState(30);

    const onChange = (value) => {
        setMin(value[0]);
        setMax(value[1]);
    }

    return (
        <div className='py-32 flex p-10 justify-center flex-col items-center'>
            <div>
                <div className='text-center text-2xl font-bold'>Search</div>
                <div className='py-4'>2 results for "<span className='uppercase'>{searchProps?.searchParams?.q}</span>"</div>
            </div>

            <div className='w-full py-20'>
                <hr />
                <div className='grid grid-cols-10 py-5 divider-gray-400 divide-x'>
                    <div className='col-span-8'></div>
                    <button className='col-span-2 flex justify-center items-center space-x-4'>
                        <div>Sort</div>

                        <SlArrowDown />
                    </button>
                </div>
                <hr />
            </div>


            <div className='grid grid-cols-7 max-w-6xl gap-5'>
                <div className='col-span-2 grid grid-cols-1'>
                    <div className='space-y-3'>
                        <div>Availability</div>

                        <div>In Stock (0)</div>
                        <div>Out of stock (11)</div>

                        <div className=''>
                            <Slider
                                onChange={onChange}
                                range={{ draggableTrack: true }} min={13} max={30} defaultValue={[min, max]} />

                        </div>
                        <div className='grid grid-cols-2 gap-5 w-full'>
                            <input value={min} type={'number'} onChange={e => setMin(parseInt(e.target.value))} className={'outline outline-1 outline-gray-300 p-2'} />
                            <input value={max} type={'number'} onChange={e => setMax(parseInt(e.target.value))} className={'outline outline-1 outline-gray-300 p-2'} />
                        </div>
                    </div>
                </div>
                <div className='col-span-5'>
                    <div className='flex justify-center py-6 '>
                        <div className='grid grid-cols-4  max-w-6xl gap-5 gap-y-7'>
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
            </div>
        </div>
    )
}
