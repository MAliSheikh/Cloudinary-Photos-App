'use client'

import { Button } from "@/components/ui/button"
import { CldImage } from "next-cloudinary"
import { useState } from "react"

export default function EditPage({ searchParams: { publicId }, }:
    { searchParams: { publicId: string } }
) {
    const [transformation, setTransformation] = useState<
        undefined | "generative-fill"
    >()

    return (
        <section>
            <div className='flex flex-col gap-8'>
                <div className='flex justify-between'>
                    <h1 className='text-4xl font-bold'>Edit {publicId}</h1>
                </div>

                <Button onClick={
                    () => {
                        setTransformation('generative-fill')
                    }
                }
                    className="bg-white text-black hover:bg-white">Generative Fill</Button>

                <div className="grid grid-cols-2 gap-12">
                    <CldImage
                        src={publicId}
                        width={300}
                        height={200}
                        alt="Some Image"
                    />

                    {transformation === 'generative-fill' &&
                        <CldImage
                            src={publicId}
                            width={300}
                            height={200}
                            alt="Some Image"
                            crop="pad"
                            fillBackground
                        />
                    }
                </div>
            </div>
        </section>)
}   