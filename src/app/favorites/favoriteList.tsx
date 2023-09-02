'use client'

import React, { useEffect } from 'react'
import CloudinaryImage from '@/app/gallery/CloudinaryImage'
import { searchResult } from '../gallery/page'
import { useState } from 'react'

export default function FavoriteList(
    { initialResources }: { initialResources: searchResult[] }
) {
    const [resources, setResources] = useState(initialResources)

    useEffect(() => {
        setResources(initialResources)
    },[initialResources])

    return (
        <div className='grid grid-cols-4 gap-4'>
            {resources.map((result) => (
                <CloudinaryImage
                    key={result.public_id}
                    imageData={result}
                    width='400'
                    height='300'
                    alt='Gallery Image'
                    onUnheart={(unheartedResource) => {
                        setResources((currentResources) =>
                            currentResources.filter((resource) =>
                                resource.public_id !== unheartedResource.public_id
                            )
                        )
                    }}
                />
            ))
            }
        </div>

    )
}

