'use client'

import { ReactNode } from "react";

interface searchResult {
    public_id: string;
    tags: string[];
}

const MAXCOLUMNS = 4;

export function ImageGrid({ images, getImage }: {
    images: searchResult[];
    getImage: (imageData: searchResult) => ReactNode;
}) {
    function getColums(colIndex: number) {
        return images.filter(
            (resource, idx) => idx % MAXCOLUMNS === colIndex
        )
    }
    return (
        <div className='grid grid-cols-4 gap-4'>

            {[
                getColums(0),
                getColums(1),
                getColums(2),
                getColums(3),
            ].map((column, idx) => (
                <div key={idx} className='flex flex-col gap-4'>
                    {
                        column.map(getImage)
                    }
                </div>
            ))}
        </div>
    )
}