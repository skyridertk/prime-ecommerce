import React from 'react';
import { ImageItem } from '@/components/ImageItem';
import Coconut_4 from '@/assets/Coconut_4.png';
import BCC_A from '@/assets/BCAA_3.png';
import Vitamins_3 from '@/assets/Vitamins_3.png';
import Antioxidents_3 from '@/assets/Antioxidents_3.png';
import Electrolytes_3 from '@/assets/Electrolytes_3.png';

export function Benefits() {
    return <div className='grid grid-cols-5 gap-5 py-4'>
        <ImageItem src={Coconut_4} />
        <ImageItem src={BCC_A} />
        <ImageItem src={Vitamins_3} />
        <ImageItem src={Antioxidents_3} />
        <ImageItem src={Electrolytes_3} />
    </div>;
}
