import React from 'react'

export default function ContactUsPage() {
  return (
      <div className='py-32 flex flex-col'>
          <div className='text-center text-2xl font-bold py-10'>Contact Us</div>

          <div className='flex justify-center py-10'>
              <div className='w-screen max-w-6xl grid grid-cols-1 gap-7'>
                  <div className='grid grid-cols-2 w-full gap-5'>
                      <input type="text" placeholder='Your name' className='outline outline-1 outline-gray-300 p-2' />
                      <input type="text" placeholder='Your Email' className='outline outline-1 outline-gray-300 p-2'/>
                  </div>

                  <input type="text" placeholder='Your phone (optional)' className='outline outline-1 outline-gray-300 p-2' />
                  <textarea  placeholder='Your Message' className='outline outline-1 outline-gray-300 h-[300px] p-2' />


                  <button className='py-2 bg-black text-white'>Send message</button>
              </div>
          </div>
    </div>
  )
}
