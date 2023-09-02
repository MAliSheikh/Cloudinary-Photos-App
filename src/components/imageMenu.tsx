import { User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Menu from "./icons/menu"
import {FolderPlus} from 'lucide-react'
import { AddToAlbum } from "./AddToAlbum"
import { searchResult } from "@/app/gallery/page"

export function ImageMenu({image}:{image: searchResult}) {
    return (
        <div className='absolute top-2 right-2'>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hover:bg-black rounded p-0 w-8 h-8 bg-black text-white"><Menu /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
                <DropdownMenuItem asChild>
                    <AddToAlbum image={image}/>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        </div>
    )
}
