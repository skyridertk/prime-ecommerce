import Image from 'next/image'
import styles from './page.module.css'
import main_prime from "@/assets/hero-desktop_2000x.jpg"
import main_prime_800 from "@/assets/logan-ksi-hero-mobile_x800.png"
import hydration from "@/assets/HYDRATION_1000x.png"
import hydrationcollection from "@/assets/PRIME_MetaMoon_group_shot_600x.jpg"
import { ShopItem } from '@/components/ShopItem'
import Link from 'next/link'
import { ImageItem } from './components/ImageItem'

export default function Home() {
    return (
        <div className=''>

            <div className='w-screen h-screen  text-white flex flex-col bg-orange-500 overflow-clip relative'>
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
                        {ShopItem()}
                        {ShopItem()}
                        {ShopItem()}
                        {ShopItem()}
                        {ShopItem()}
                        {ShopItem()}
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
                                {ImageItem({})}
                                {ImageItem({ })}
                                {ImageItem({})}
                            </div>
                            <div className='grid grid-cols-2 gap-5 px-10'>
                                {ImageItem({})}
                                {ImageItem({})}
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

