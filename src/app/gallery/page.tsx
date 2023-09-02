import React from 'react'
import UploadButton from './upload-button'
import cloudinary from 'cloudinary'
import CloudinaryImage from './CloudinaryImage'
import { ImageGrid } from '@/components/imageGrid';

export interface searchResult {
    public_id: string;
    tags: string[];
}

export default async function GalleryPage() {
    const results = (await cloudinary.v2.search
        .expression('resource_type:image')
        .sort_by('created_at', 'desc')
        .with_field('tags')
        .max_results(100000)
        .execute()) as { resources: searchResult[] }

    // console.log(results)
 

    return (
        <section>
            <div className='flex flex-col gap-8'>
                <div className='flex justify-between'>
                    <h1 className='text-4xl font-bold'>Gallery</h1>
                    <UploadButton />
                </div>
                <ImageGrid images={results.resources} />
            </div>
        </section>
    )
}

