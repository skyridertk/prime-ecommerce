import Link from 'next/link'
import React from 'react'
import { SectionalTitle } from '../components/SectionalTitle'

export default function page() {
    return (
        <div className='py-32 p-10 space-y-6'>
            <div className='space-y-6'>
                <div className='uppercase'>
                    Logout
                </div>
                <div className='font-bold text-4xl'>
                    My account
                </div>
                <div>
                    Welcome back, Tanaka!
                </div>
            </div>

            <div className='flex py-10'>
                <div className='w-9/12 space-y-4'>
                    <div >
                        {SectionalTitle({ text: 'My orders' })}
                        <hr />
                    </div>

                    <div>
                        You haven't placed any orders yet
                    </div>
                </div>

                <div className='w-3/12 space-y-4'>
                    <div>
                        {SectionalTitle({ text: 'Primary Address' })}
                        <hr />
                    </div>
                    <div className='py-4'>
                        <div>Your Name</div>
                        <div>
                            <div>Your Company</div>
                            <div>Add 1</div>
                            <div>Add 2</div>
                            <div>
                                <div>Zip</div>
                                <div>City</div>
                            </div>
                            <div>Country</div>
                        </div>
                    </div>

                    <Link href={'/account/addresses'}>
                        <div className='py-4 bg-black text-white uppercase text-center hover:bg-white hover:text-black outline outline-1'>
                            Edit Addresses
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )

    
}

