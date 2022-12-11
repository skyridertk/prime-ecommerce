"use client";
import React from 'react';
import Lightbox, { SlideImage } from 'yet-another-react-lightbox';
import Image from 'next/image';
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

export function CarouselItem({
    front,
    side,
    back
}: {
    front: SlideImage;
    side: SlideImage;
    back: SlideImage;
}) {
    return <Lightbox
        styles={{ container: { backgroundColor: "rgba(255, 255, 255, .8)" }, thumbnailsContainer: { backgroundColor: "rgba(255, 255, 255, .8)" }, thumbnail: { backgroundColor: "rgba(255, 255, 255, .8)", border: "1px solid black" }, thumbnailsTrack: { backgroundColor: "rgba(255, 255, 255, .8)" } }}
        className='bg-white p-20 w-7/12'
        slides={[front, side, back]}
        inline={{ style: { width: "100%", maxWidth: "900px", aspectRatio: "3 / 2", background: 'white' } }}
        plugins={[Inline, Thumbnails, Zoom]}
        thumbnails={{ position: "start", vignette: false }}
        render={{
            slide: (image, offset, rect) => {
                const width = Math.round(Math.min(rect.width, (rect.height / image.height!!) * image.width!!));
                const height = Math.round(Math.min(rect.height, (rect.width / image.width!!) * image.height!!));

                return (
                    <div style={{ position: "relative", width, height }}>
                        
                        <Image
                            fill
                            src={image}
                            loading="eager"
                            // placeholder="blur"
                            alt="test"
                            sizes={typeof window !== "undefined"
                                ? `${Math.ceil((width / window.innerWidth) * 100)}vw`
                                : `${width}px`} />
                    </div>
                );
            }
        }} />;
}
