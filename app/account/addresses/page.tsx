import Link from 'next/link'
import React from 'react'
import { AddressItem } from '../../components/AddressItem'

export default function Addresses() {
    return (
            <div className='py-32 p-10 space-y-6'>
                <Link href={'/account'}>
                    <div className='uppercase'>
                        <div>back to account</div>
                    </div>
                </Link>
                <div>
                    <button className='py-4 w-72 bg-black text-white uppercase text-center hover:bg-white hover:text-black outline outline-1'>
                        Add a new address
                    </button>
                </div>

                <div className='grid grid-cols-4 gap-5 gap-y-7 py-10'>
                    {AddressItem()}
                    {AddressItem()}
                    {AddressItem()}
                    {AddressItem()}
                    {AddressItem()}
                </div>
            </div>
    )

    

    
}

