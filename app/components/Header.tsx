import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai'
import { BsPersonCircle } from 'react-icons/bs'
import CartItem from './CartItem'
import { LeftItem } from './LeftItem'
import { LinkIcon } from './LinkIcon'
import { LocationItem } from './LocationItem'
import SearchItem from './SearchItem'

export default function Header() {
    return (
        <div className='py-4 fixed w-full top grid grid-cols-3 px-8 bg-white shadow-lg z-20'>
            <div className='flex space-x-6 justify-start items-center'>
                {LeftItem({ title: 'shop', to: '/shop' })}
                {LeftItem({ title: 'about prime', to: '/about' })}
                {LeftItem({ title: 'where to buy', to: '/where-to-buy' })}
            </div>

            <div className='flex justify-center '>
                <Link href={'/'}>
                    <div className='text-2xl font-black uppercase'>
                        Prime
                    </div>
                </Link>
            </div>

            <div className='flex justify-end items-center space-x-6'>
                <div className='flex justify-center items-center space-x-2'>
                    {LeftItem({ title: 'ship to' })}
                    {LocationItem({ text: 'US' })}
                    {LocationItem({ text: 'UK' })}
                </div>

                <div className='flex justify-end items-center space-x-4'>
                    {LinkIcon({ icon: <BsPersonCircle />, to: '/account' })}
                    <SearchItem icon={<AiOutlineSearch />} />
                    <CartItem icon={<AiOutlineShoppingCart />} />
                    
                </div>

            </div>
        </div>
    )

    
}


