'use server'
 
import cloudinary from 'cloudinary'

interface searchResult {
    public_id: string;
    tags: string[];
}



export async function AddImageToAlbum(image: searchResult, album: string) {
    await cloudinary.v2.api.create_folder(album)

    let parts = image.public_id.split('/')
    if (parts.length > 1) {
        parts = parts.slice(1)
    }
    const publicId = parts.join('/')

    await cloudinary.v2.uploader.rename(
        image.public_id,
        `${album}/${publicId}`
    )

}