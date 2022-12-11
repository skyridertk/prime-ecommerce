import { SectionBreaker } from '@/components/SectionBreaker'
import React from 'react'

export default function RefundPolicyPage() {
  return (
      <div className='py-32 flex flex-col'>
          <div className='text-center font-bold text-2xl'>
              PRIME HYDRATION RETURN POLICY 
          </div>

          <div className='flex justify-center'>
              <div className='max-w-6xl'>
                  All Prime Hydration purchases are final sale.  
                  <SectionBreaker />

                  <ul className='list-disc'>
                      <li>
                          We do not accept returns from any retail locations that carry our products.
                      </li>
                      <li>
                          All discounted/promotions or limited-edition items are final sale.  
                      </li>
                  </ul>
                  
                  <SectionBreaker />
                  
                  We don’t offer returns or refunds on our products, as they are consumable goods. We are unable to resell or reuse returns, due to the safety risk
              </div>
              
             
              
              
          </div>
      </div>
  )
}
