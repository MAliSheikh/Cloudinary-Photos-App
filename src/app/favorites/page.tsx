import React from 'react'
import cloudinary from 'cloudinary'
import CloudinaryImage from '@/components/CloudinaryImage'
import { searchResult } from '../gallery/page'
import { ForceRefrest } from '@/components/forceRefrest'
import FavoriteList from './favoriteList'

export default async function FavoritePage() {
    const results = (await cloudinary.v2.search
        .expression('resource_type:image AND tags=favorite')
        .sort_by('created_at', 'desc')
        .with_field('tags')
        .max_results(100000)
        .execute()) as { resources: searchResult[] }

    // console.log(results)

    return (
        <section>
            <ForceRefrest />
            <div className='flex flex-col gap-8'>
                <div className='flex justify-between'>
                    <h1 className='text-4xl font-bold'>Favorite Images</h1>
                </div>
                <FavoriteList initialResources={results.resources} />

            </div>
        </section>
    )
}

