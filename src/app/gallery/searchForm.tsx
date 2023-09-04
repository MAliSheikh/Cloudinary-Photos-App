'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

const SearchForm = () => {
    const [tagName, setTagName] = useState('')

    return (
        <form>
            <Label htmlFor="tag-name" className="text-right">
                Search By Tag
            </Label>
            <div className='flex gap-2'>
            <Input onChange={(e) => setTagName(e.currentTarget.value)}
                id="album-name" value={tagName} className="col-span-3" />
            <Button className='rounded bg-white text-black hover:bg-white'>Search</Button>
            </div>
        </form>
    )
}

export default SearchForm
