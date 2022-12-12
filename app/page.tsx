import Image from 'next/image'
import styles from './page.module.css'
import main_prime from "@/assets/hero-desktop_2000x.jpg"
import main_prime_800 from "@/assets/logan-ksi-hero-mobile_x800.png"
import hydration from "@/assets/HYDRATION_1000x.png"
import hydrationcollection from "@/assets/PRIME_MetaMoon_group_shot_600x.jpg"
import { ShopItem } from '@/components/ShopItem'
import Link from 'next/link'
import { ImageItem } from './components/ImageItem'

import meta_moon from '@/assets/Prime-Metamoon-ProductDetail-front_600x.png';
import ice_pop from '@/assets/PrimeHydration_1serve_IcePop_0000_400x.png';
import blue_raspberry from '@/assets/PrimeHydration_1serve_bluerasberry_0000_400x.png';
import tropical_punch from '@/assets/PrimeHydration_1serve_tropicalpunch_0000_400x.png';
import lemon_lime from '@/assets/PrimeHydration_1serve_lemonlime_0000_400x.png';
import grape from '@/assets/PrimeHydration_1serve_grape_0000_400x.png';

import Coconut_4 from '@/assets/Coconut_4.png';
import BCC_A from '@/assets/BCAA_3.png';
import Vitamins_3 from '@/assets/Vitamins_3.png';
import Antioxidents_3 from '@/assets/Antioxidents_3.png';
import Electrolytes_3 from '@/assets/Electrolytes_3.png';

export default function Home() {
    return (
        <div className=''>

            <div className='w-screen h-screen  text-white flex flex-col overflow-clip relative'>
                <Image src={main_prime}
                    alt="banner_prime"
                    className="object-cover object-center hidden md:block w-screen h-screen z-0"
                />

                <Image src={main_prime_800}
                    alt="banner_prime"
                    className="object-cover object-center w-screen h-sreen md:hidden z-0"
                />

                <div className='flex flex-col z-10 absolute p-10 w-screen h-screen justify-center items-center md:hidden'>
                    <div>FUEL UP.</div>
                    <div className='font-bold text-2xl'>WELCOME TO YOUR PRIME</div>
                    <div className='flex justify-start py-6'>
                        <Link href={'/shop'}>
                            <div className='py-4 bg-white text-black w-40 text-center uppercase hover:bg-transparent hover:text-white hover:outline hover:outline-1'>hydrate</div>
                        </Link>
                    </div>
                </div>

                <div className='hidden md:flex md:flex-col z-10 md:bottom-20  absolute p-10  w-full'>
                    <div>FUEL UP.</div>
                    <div className='font-bold text-2xl'>WELCOME TO YOUR PRIME</div>
                    <div className='flex justify-start py-6'>
                        <Link href={'/shop'}>
                            <div className='py-4 bg-white text-black w-40 text-center uppercase hover:bg-transparent hover:text-white hover:outline hover:outline-1'>hydrate</div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='flex  justify-center items-center'>
                <div className='max-w-6xl  flex flex-col py-32 space-y-10 justify-center items-center'>
                    <Image src={hydration}
                        alt="banner_prime"
                        className=""
                    />

                    <div className='grid grid-cols-6 '>
                        <ShopItem src={meta_moon} title={'Meta Moon'} price={'$29.99'} pack={'12 PK'} to={'/products/meta-moon'} />
                        <ShopItem src={ice_pop} title={'Ice Pop'} price={'$29.99'} pack={'12 PK'} to={'/products/ice-pop'} />
                        <ShopItem src={blue_raspberry} title={'Blue Raspberry'} price={'$29.99'} pack={'12 PK'} to={'/products/blue-raspberry'} />
                        <ShopItem src={tropical_punch} title={'Tropical Punch'} price={'$29.99'} pack={'12 PK'} to={'/products/tropical-punch'} />
                        <ShopItem src={grape} title={'Grape'} price={'$29.99'} pack={'12 PK'} to={'/products/grape'} />

                        <ShopItem src={lemon_lime} title={'Lemon Lime'} price={'$29.99'} pack={'12 PK'} to={'/products/lemon-lime'} />
                    </div>

                    <div className='flex justify-center'>
                        <Link href={'/shop'}>
                            <div className='py-4 bg-black text-white w-40 text-center uppercase'>More</div>
                        </Link>
                    </div>

                    <div className='flex py-10 '>
                        <Image src={hydrationcollection}
                            alt="banner_prime"
                            className=""
                        />

                        <div className='flex flex-col p-6 space-y-6 '>
                            <div className='grid grid-cols-3 gap-5'>
                                <ImageItem src={Coconut_4} />
                                <ImageItem src={BCC_A} />
                                <ImageItem src={Vitamins_3} />
                                
                            </div>
                            <div className='grid grid-cols-2 gap-5 px-10'>
                                <ImageItem src={Antioxidents_3} />
                                <ImageItem src={Electrolytes_3} />
                            </div>

                            <div className='flex justify-center py-6'>
                                <Link href={'/shop'}>
                                    <div className='py-4 bg-black text-white w-40 text-center uppercase'>hydrate</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    
}

