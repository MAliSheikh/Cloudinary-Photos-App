import React from 'react'
// import GalleryGrid from '@/app/gallery/galleryGrid';
import cloudinary from 'cloudinary'

export interface searchResult {
    public_id: string;
    tags: string[];
}

export default async function AlbumsPage() {
    const results = (await cloudinary.v2.search
        .expression('resource_type:image')
        .sort_by('created_at', 'desc')
        .with_field('tags')
        .max_results(100000)
        .execute()) as { resources: searchResult[] }

    return (
        <section>
            <div className='flex flex-col gap-8'>
                <div className='flex justify-between'>
                    <h1 className='text-4xl font-bold'>Albums</h1>
                </div>
            </div>
        </section>
    )
}

