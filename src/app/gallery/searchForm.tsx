'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const SearchForm = ({initialSearch}: {initialSearch : string}) => {
    const [tagName, setTagName] = useState(initialSearch ?? "")
    const router = useRouter()

    useEffect(() => {setTagName(initialSearch)}, [initialSearch])

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            router.replace(`/gallery?search=${encodeURIComponent(tagName)}`)
            router.refresh()
        } }>
            <Label htmlFor="tag-name" className="text-right">
                Search By Tag
            </Label>
            <div className='flex gap-2'>
            <Input onChange={(e) => setTagName(e.currentTarget.value)}
                id="album-name" value={tagName} className="col-span-3" />
            <Button type='submit' className='rounded bg-white text-black hover:bg-white'>Search</Button>
            </div>
        </form>
    )
}

export default SearchForm
