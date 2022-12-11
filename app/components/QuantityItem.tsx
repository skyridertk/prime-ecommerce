"use client"
import React from 'react'

export default function QuantityItem() {
    const [quantity, setQuantity] = React.useState(0)

    return (
        <div className='outline outline-1 flex justify-between items-center px-5 py-2 w-40'>
            <button className='font-black' onClick={() => { if (quantity > 0) setQuantity(quantity - 1)  }}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
    )
}
