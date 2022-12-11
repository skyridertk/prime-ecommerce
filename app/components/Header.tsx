"use client"
import React from 'react'
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai'
import { BsPersonCircle } from 'react-icons/bs'
import CartItem from './CartItem'
import { LinkIcon } from './LinkIcon'
import SearchItem from './SearchItem'
import Image from 'next/image'
import meta_moon from '@/assets/PRIME_MetaMoon_ext_nav_370x230@2x.jpg'
import hydration from '@/assets/ext_nav_370x230@2x.jpg'
import prime_logo from '@/assets/Prime-Logo_115x.png'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { FooteritemHeader } from './FooteritemHeader'
import { FooterItem } from './FooterItem'
import Link from 'next/link'
import { LeftItem } from './LeftItem'
import { BiMenuAltLeft } from 'react-icons/bi'


function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    return (
        <div className='fixed z-20 w-full shadow-xl'>
            <Popover className="relative bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">

                        <div className="-my-2 -mr-2 md:hidden">
                            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open menu</span>
                                <BiMenuAltLeft className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        <Popover.Group as="nav" className="hidden space-x-10 md:flex ">
                            <Popover className="relative">
                                {({ open }) => (
                                    <>

                                        <Popover.Button
                                            className={classNames(
                                                open ? 'text-gray-900' : 'text-gray-500',
                                                'uppercase group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                            )}
                                        >
                                            <span>Shop</span>

                                        </Popover.Button>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel className="absolute z-10 mt-3 w-screen max-w-7xl transform px-2 sm:px-0lg:ml-0 lg:-translate-x-[50px]">
                                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                    <div className="relative grid grid-cols-5 gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                        <div className=''>

                                                            {FooteritemHeader({ title: 'Drinks' })}
                                                            {FooterItem({ title: 'Meta Moon', link: '/products/meta-moon' })}
                                                            {FooterItem({ title: 'Ice Pop', link: '/products/ice-pop' })}
                                                            {FooterItem({ title: 'Blue Raspberry', link: '/products/blue-raspberry' })}
                                                            {FooterItem({ title: 'Orange', link: '/products/orange' })}
                                                            {FooterItem({ title: 'Tropical Punch', link: '/products/tropical-punch' })}
                                                            {FooterItem({ title: 'Lemon Lime', link: '/products/lemon-lime' })}
                                                            {FooterItem({ title: 'Grape', link: '/products/grape' })}
                                                        </div>
                                                        <div className=''>

                                                            {FooteritemHeader({ title: 'Hydration Sticks' })}
                                                            {FooterItem({ title: 'Ice Pop', link: '/products/ice-pop' })}
                                                            {FooterItem({ title: 'Blue Raspberry', link: '/products/blue-raspberry' })}
                                                            {FooterItem({ title: 'Tropical Punch', link: '/products/tropical-punch' })}
                                                            {FooterItem({ title: 'Lemon Lime', link: '/products/lemon-lime' })}
                                                        </div>
                                                        <div className='flex col-span-3  space-x-5'>
                                                            {ShopDropDownItem({ image: <Image src={meta_moon} alt="test" />, title: 'Meta moon', to: '/products/meta-moon' })}

                                                            {ShopDropDownItem({ image: <Image src={hydration} alt="test" />, title: 'hyration', to: '/shop' })}


                                                        </div>
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>


                            {LeftItem({ title: 'about prime', to: '/about' })}
                            {LeftItem({ title: 'where to buy', to: '/where-to-buy' })}

                        </Popover.Group>
                        <div className="flex justify-center lg:w-0 lg:flex-1 ">
                            <Link href={'/'}>
                                <span className="sr-only">PRIME</span>
                                <Image
                                    className="h-8 w-auto sm:h-10"
                                    src={prime_logo}
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0 space-x-6">
                            <div className='flex space-x-2 justify-center items-center'>
                                <div >Ship to</div>
                                <Link href={'/'}>
                                    <div className='outline outline-1 px-2'>US</div>
                                </Link>
                                <Link href={'/'}>
                                    <div className='outline outline-1 px-2'>UK</div>
                                </Link>
                            </div>
                            {LinkIcon({ icon: <BsPersonCircle className=' text-2xl ' />, to: '/account' })}
                            <SearchItem icon={<AiOutlineSearch className=' text-2xl ' />} />
                            <CartItem icon={<AiOutlineShoppingCart className=' text-2xl '/>} />
                        </div>
                    </div>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            {/* <div className="px-5 pt-5 pb-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                            alt="Your Company"
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close menu</span>
                                            <FaAddressBook className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-8">
                                        {solutions.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                                            >
                                                <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                                <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                            <div className="space-y-6 py-6 px-5">
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                    <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Pricing
                                    </a>

                                    <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Docs
                                    </a>
                                    {resources.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="text-base font-medium text-gray-900 hover:text-gray-700"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div>
                                    <a
                                        href="#"
                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                    >
                                        Sign up
                                    </a>
                                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                                        Existing customer?{' '}
                                        <a href="#" className="text-indigo-600 hover:text-indigo-500">
                                            Sign in
                                        </a>
                                    </p>
                                </div>
                            </div> */}
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </div>
    )

    function ShopDropDownItem({ image, title, to }: { image: React.ReactNode, title: string, to: string }) {
        return <Link href={to}>
            <div>
                {image}
                <div className='uppercase text-center font-bold py-4'>{title}</div>
            </div>
        </Link>
    }
}


