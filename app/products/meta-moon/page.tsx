import React from 'react'

export default function MetaMoon() {
    return (
        <div className='py-32'>
            <div className='flex h-screen overflow-auto'>
                <div className='w-4/12'>
                    <div>Img1</div>
                    <div>Img1</div>
                    <div>Img1</div>
                </div>

                <div className='h-screen bg-green-300  w-4/12 overflow-y-scroll'>
                    <div className='h-screen bg-red-500'>123</div>
                    <div className='h-screen bg-orange-500'>123</div>
                    <div className='h-screen bg-purple-500'>123</div>
                </div>

                <div className='h-screen w-4/12'>
                    <div className='h-screen w-full bg-red-500'>123</div>
                </div>
            </div>
        </div>
    )
}
