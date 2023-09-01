'use client'
import Image from 'next/image'
import { CldUploadButton } from 'next-cloudinary';
import {CldImage} from 'next-cloudinary';

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // </main>
    <>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <CldUploadButton 
        uploadPreset="vl6jirya" />


        <CldImage
          width="960"
          height="600"
          src="rxw3tnlw8yl5q9iihcju"
          sizes="100vw"
          alt="Description of my image"
        />
      </div>
    </>

  )
}
