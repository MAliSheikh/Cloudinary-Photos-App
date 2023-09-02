'use client'
import React, { useTransition } from 'react'
import { CldImage } from 'next-cloudinary'
import Heart from '@/components/icons/heart'
import { SetAsFavoriteAction } from './actions'
import { searchResult } from './page'
import FullHeart from '@/components/icons/fullheart'
import path from 'path'

const CloudinaryImage = (props: any & { imageData: searchResult; path: string }) => {
    const [transition, startTransition] = useTransition();
    const { imageData } = props;
    const IsFavorited = imageData.tags.includes('favorite')

    return (
        <div className='relative'>
            <CldImage {...props} src={imageData.public_id} />
            {IsFavorited ?
                (
                <FullHeart
                    className='absolute top-2 right-2 hover:text-white text-red-500 cursor-pointer'
                    onClick={() => {
                        startTransition(() => {
                            SetAsFavoriteAction(imageData.public_id, false, props.path)
                        });
                    }}
                />
                ) : (
                    <Heart
                        onClick={() => {
                            startTransition(() => {
                                SetAsFavoriteAction(imageData.public_id, true, props.path)
                            })
                        }}
                        className='absolute top-2 right-2 hover:text-red-500 cursor-pointer'
                    />
                )}
        </div>
    )
}

export default CloudinaryImage