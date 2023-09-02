'use client';

import React, { useEffect } from 'react';
import CloudinaryImage from '@/app/gallery/CloudinaryImage';
import { searchResult } from '../gallery/page';
import { useState } from 'react';
import { ImageGrid } from '@/components/imageGrid';

export default function FavoriteList({ initialResources }: { initialResources: searchResult[] }) {
    const [resources, setResources] = useState(initialResources);

    useEffect(() => {
        setResources(initialResources);
    }, [initialResources]);

    return (
        <ImageGrid
            images={resources}
            getImage={(imageData: searchResult) => {
                return (
                    <CloudinaryImage
                        key={imageData.public_id}
                        imageData={imageData}
                        width='400'
                        height='300'
                        alt='Gallery Image'
                        onUnheart={(unheartedResource) => {
                            setResources((currentResources) =>
                                currentResources.filter((resource) =>
                                    resource.public_id !== unheartedResource.public_id
                                )
                            );
                        }}
                    />
                );
            }}
        />
    );
}
