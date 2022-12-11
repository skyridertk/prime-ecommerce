import Image from 'next/image';
import Antioxidents_3 from '@/assets/Antioxidents_3.png';

export function ImageItem({width="40px", height="40px"}: {width?: string, height?: string}) {
    return <Image src={Antioxidents_3}
        alt="banner_prime"
        className={`w-[${width}] h-[${height}]`} />;
}
