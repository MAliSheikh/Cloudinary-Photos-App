'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CldImage } from "next-cloudinary"
import { useState } from "react"


export default function EditPage({ searchParams: { publicId }, }:
    { searchParams: { publicId: string } }
) {
    const [transformation, setTransformation] = useState<
        undefined | "generative-fill" | 'green' | 'blur' | 'grayscale' | 'pixelate' | 'border'
    >()

    const [pendingPrompt, setPendingPrompt] = useState('')
    const [prompt, setPrompt] = useState('')

    return (
        <section>
            <div className='flex flex-col gap-8'>
                <div className='flex justify-between'>
                    <h1 className='text-4xl font-bold'>Edit {publicId}</h1>
                </div>

                <div className="flex  gap-4">
                    <Button onClick={() => { setTransformation(undefined) }}
                        className="rounded bg-white text-black hover:bg-white">
                        Clear All
                    </Button>
                    <div className="flex flex-col gap-4">
                        <Button onClick={() => { setTransformation('generative-fill') }}
                            className="rounded bg-white text-black hover:bg-white">
                            Apply Generative Fill
                        </Button>
                        <Label>Prompt</Label>
                        <Input value={pendingPrompt} onChange={(e) => setPendingPrompt(e.currentTarget.value)} />
                    </div>
                    <Button onClick={() => { setTransformation('blur') }}
                        className="rounded bg-white text-black hover:bg-white">
                        Apply Blur
                    </Button>
                    <Button onClick={() => { setTransformation('grayscale') }}
                        className="rounded bg-white text-black hover:bg-white">
                        Convert to Gray
                    </Button>
                    <Button onClick={() => { setTransformation('pixelate') }}
                        className="rounded bg-white text-black hover:bg-white">
                        Pixelate
                    </Button>
                    <Button onClick={() => { setTransformation('border') }}
                        className="rounded bg-white text-black hover:bg-white">
                        Border
                    </Button>

                </div>

                <div className="grid grid-cols-2 gap-12">
                    <CldImage src={publicId} width={300} height={200} alt="Some Image" />

                    {transformation === 'generative-fill' &&
                        <CldImage
                            src={publicId}
                            width={1800}
                            height={1400}
                            alt="Some Image"
                            crop="pad"
                            fillBackground={{
                                    prompt,
                                }}
                        />
                    }
                    {transformation === 'blur' &&
                        <CldImage
                            src={publicId}
                            width={1200}
                            height={1400}
                            blur={'1200'}
                            alt="Some Image"
                        />
                    }
                    {transformation === 'grayscale' &&
                        <CldImage
                            src={publicId}
                            width={1200}
                            height={1400}
                            grayscale
                            alt="Some Image"
                        />
                    }
                    {transformation === 'pixelate' &&
                        <CldImage
                            src={publicId}
                            width={1200}
                            height={1400}
                            pixelate
                            alt="Some Image"
                        />
                    }
                    {transformation === 'border' &&
                        <CldImage
                            src={publicId}
                            width={1200}
                            height={1400}
                            border="40px_solid_purple"
                            alt="Some Image"
                        />
                    }

                </div>
            </div>
        </section>)
}   