'use client'
import React, { ComponentProps, useTransition } from 'react'
import { CldImage, CldImageProps } from 'next-cloudinary'
import Heart from '../components/icons/heart'
import { SetAsFavoriteAction } from '../app/gallery/actions'
import FullHeart from '../components/icons/fullheart'
import { useState } from 'react'
import { ImageMenu } from './imageMenu'

interface searchResult {
    public_id: string;
    tags: string[];
}

const CloudinaryImage = (props: {
    imageData: searchResult;
    onUnheart?: (unheartedResource: searchResult) => void
}
    & Omit<CldImageProps, 'src'>
) => {
    const [transition, startTransition] = useTransition();
    const { imageData, onUnheart } = props;
    const [IsFavorited, setIsfavorited] = useState(imageData.tags.includes('favorite'))

    return (
        <div className='relative'>
            <CldImage {...props} src={imageData.public_id} />
            {IsFavorited ?
                (
                    <FullHeart
                        className='absolute top-2 left-2 hover:text-white text-red-500 cursor-pointer'
                        onClick={() => {
                            onUnheart?.(imageData)
                            setIsfavorited(false)
                            startTransition(() => {
                                SetAsFavoriteAction(imageData.public_id, false)
                            });
                        }}
                    />
                ) : (
                    <Heart
                        onClick={() => {
                            setIsfavorited(true)
                            startTransition(() => {
                                SetAsFavoriteAction(imageData.public_id, true)
                            })
                        }}
                        className='absolute top-2 left-2 hover:text-red-500 cursor-pointer'
                    />
                )}
                <ImageMenu image={imageData} />
        </div>
    )
}

export default CloudinaryImage