import Image from 'next/image';

export function ImageItem({ src, width="40px", height="40px"}: {src: any, width?: string, height?: string}) {
    return <Image src={src}
        alt="banner_prime"
        className={`w-[${width}] h-[${height}]`} />;
}
