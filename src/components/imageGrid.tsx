import CloudinaryImage from "@/app/gallery/CloudinaryImage";
import { searchResult } from "@/app/gallery/page";


const MAXCOLUMNS = 4;

export function ImageGrid({ images }: { images: searchResult[] }) {
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
                        column.map((result) => (
                            <CloudinaryImage
                                key={result.public_id}
                                imageData={result}
                                width='400'
                                height='300'
                                alt='Gallery Image'
                            />
                        ))
                    }
                </div>
            ))}
        </div>
    )
}