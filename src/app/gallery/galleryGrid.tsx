'use client'

import React from 'react'
import CloudinaryImage from './CloudinaryImage'
import { ImageGrid } from '@/components/imageGrid';
import { searchResult } from './page';


export default function GalleryGrid({ images }: { images: searchResult[] }) {

    return (
        <ImageGrid images={images}
            getImage={(imageData: searchResult) => {
                return (
                    <CloudinaryImage
                        key={imageData.public_id}
                        imageData={imageData}
                        width='400'
                        height='300'
                        alt='Gallery Image' />
                );
            }}
        />
    )
}

