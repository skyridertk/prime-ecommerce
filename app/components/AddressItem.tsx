import { SectionalTitle } from '@/components/SectionalTitle';
import React from 'react';

export function AddressItem() {
    return <div className='w-full space-y-4'>
        <div>
            {SectionalTitle({ text: 'Default Address' })}
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

        <div className='flex space-x-10'>
            <div>Edit</div>
            <div>Delete</div>
        </div>
    </div>;
}
