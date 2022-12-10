"use client"
import CarouselItem from '@/components/CarouselItem'
import React from 'react'
import white_prime from '@/assets/Prime-Metamoon-ProductDetail-front_600x.png';
import Lightbox from 'yet-another-react-lightbox';
import Image from 'next/image'
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { ImageItem } from '@/components/ImageItem';

export default function page() {
    const [open, setOpen] = React.useState(true);
    return (
        <div className='py-32 flex p-10 justify-center items-center'>
            <div className='max-w-6xl flex'>
                <Lightbox
                    styles={{ container: { backgroundColor: "rgba(255, 255, 255, .8)" }, thumbnailsContainer: { backgroundColor: "rgba(255, 255, 255, .8)" }, thumbnail: { backgroundColor: "rgba(255, 255, 255, .8)", border: "1px solid black" }, thumbnailsTrack: { backgroundColor: "rgba(255, 255, 255, .8)" } }}
                    className='bg-white p-20 w-7/12'
                    slides={[white_prime, white_prime, white_prime]}
                    inline={{ style: { width: "100%", maxWidth: "900px", aspectRatio: "3 / 2", background: 'white' } }}
                    plugins={[Inline, Thumbnails, Zoom]}
                    thumbnails={{ position: "start", vignette: false }}
                    render={{
                        slide: (image, offset, rect) => {
                            const width = Math.round(Math.min(rect.width, (rect.height / white_prime.height) * white_prime.width));
                            const height = Math.round(Math.min(rect.height, (rect.width / white_prime.width) * white_prime.height));

                            return (
                                <div style={{ position: "relative", width, height }}>
                                    <Image
                                        fill
                                        src={white_prime}
                                        loading="eager"
                                        // placeholder="blur"
                                        alt="test"
                                        sizes={
                                            typeof window !== "undefined"
                                                ? `${Math.ceil((width / window.innerWidth) * 100)}vw`
                                                : `${width}px`
                                        }
                                    />
                                </div>
                            );
                        }
                    }}
                />

                <div className='w-5/12 px-10 space-y-4'>
                    <div>
                        <div className='uppercase font-bold'>META MOON</div>
                        <div>12 PACK</div>
                    </div>
                    <div> $29.99</div>
                    <div>Pay in 4 interest-free installments for orders over $50.00 with  Learn more</div>

                    <hr />

                    {/* Zero added sugar
                    20 Calories
                    10% Coconut Water
                    Electrolytes */}

                    <ul>
                        <li>Zero added sugar</li>
                        <li>20 Calories</li>
                        <li>10% Coconut Water</li>
                        <li>Electrolytes</li>
                    </ul>

                    <div className='grid grid-cols-5 gap-5'>
                        <ImageItem width='full' height='full' />
                        <ImageItem width='full' height='full' />
                        <ImageItem width='full' height='full' />
                        <ImageItem width='full' height='full' />
                        <ImageItem width='full' height='full' />
                    </div>

                    {/* //add subtract input number */}
                    <input type="text" className='outline outline-1 text-center' value={1} />

                    <button className='uppercase outline outline-1 px-4 py-2'>
                        Notify me when available
                    </button>

                </div>
            </div>
        </div>
    )
}
