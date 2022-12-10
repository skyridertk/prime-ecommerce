import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FooterItem } from './FooterItem';
import { FooteritemHeader } from './FooteritemHeader';
import { FooterTitleHeader } from './FooterTitleHeader';
import { SocialItem } from './SocialItem';

export function Footer() {
    return <div className='bg-black text-white p-20'>
        <div className='grid grid-cols-3  gap-10'>
            <div className='space-y-4'>
                {FooterTitleHeader({ title: 'ABOUT PRIME HYDRATION' })}
                <div className='text-sm'>
                    Prime Hydration was developed to fill the void where great taste meets function. With bold, thirst-quenching flavors to help you refresh, replenish, and refuel, Prime is the perfect boost for any endeavor. We’re confident you’ll love it as much as we do.
                </div>
                <div className='flex justify-start items-center space-x-6 '>
                    {SocialItem({ icon: <FaFacebook />, link: 'https://www.facebook.com/primehydration' })}
                    {SocialItem({ icon: <FaInstagram />, link: 'https://www.instagram.com/primehydration/' })}
                    {SocialItem({ icon: <FaTwitter />, link: 'https://twitter.com/primehydration' })}
                </div>
            </div>
            <div className=' grid grid-cols-2 gap-5'>
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
                    {FooterItem({ title: 'About Prime', link: '/about', uppercase: true })}
                    {FooterItem({ title: 'Where to Buy', link: '/where-to-buy', uppercase: true })}
                    {FooterItem({ title: 'FAQ', link: '/faq', uppercase: true })}
                    {FooterItem({ title: 'Terms of Use', link: '/terms-of-use', uppercase: true })}
                    {FooterItem({ title: 'Privacy Policy', link: '/privacy-policy', uppercase: true })}
                    {FooterItem({ title: 'Refund Policy', link: '/refund-policy', uppercase: true })}
                    {FooterItem({ title: 'Contact Us', link: '/contact-us', uppercase: true })}
                </div>
            </div>

            <div className='space-y-6'>
                {FooterTitleHeader({ title: 'newsletter' })}
                <div>
                    Subscribe to receive updates, access to exclusive deals, and more.
                </div>

                <div className='space-y-4'>
                    <input className='py-4 px-6 w-full outline outline-1' placeholder='Enter your email address' />
                    <input className='py-4 px-6 w-full outline outline-1' placeholder='Phone number' />
                    <div className='text-xs flex items-start space-x-2 p-2 py-4 bg-gray-900'>
                        <input type='checkbox' />
                        <div className='inline-block'>By signing up, you agree to receive marketing text messages from Prime Hydration at the number used, including messages sent by autodialer. Consent is not a condition of purchase. Message and data rates may apply. Message frequency varies. Reply HELP for help or STOP to cancel. View our Privacy Policy and Terms of Service.</div>
                    </div>
                    <button className='py-4 w-full bg-black text-white uppercase text-center hover:bg-white hover:text-black outline outline-1'>
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
        <Link href={"/"}>
            <div className='py-10 '>
                © Prime Hydration LLC
            </div>
        </Link>
    </div>;
}
