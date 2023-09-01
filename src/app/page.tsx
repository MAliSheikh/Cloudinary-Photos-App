'use client'
import Image from 'next/image'
import { CldUploadButton,CldImage } from 'next-cloudinary';
import { useState } from 'react';

export interface UploadImage{
  event: 'success';
  info: {
    public_id: string;
  }; 

}

export default function Home() {
  const [imageId, setImageId] = useState('')
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // </main>
    <>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <CldUploadButton uploadPreset="vl6jirya"
        onUpload={(result) => {
          let res = result as UploadImage;
          setImageId(res.info.public_id);
        }}
         />

        {imageId && (
        <CldImage
          width="400"
          height="300"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
        )}

      </div>
    </>

  )
}
