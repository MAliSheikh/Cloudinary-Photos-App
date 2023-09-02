import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Menu from "./icons/menu"
import { AddToAlbum } from "./AddToAlbum"
import { searchResult } from "@/app/gallery/page"
import { useState } from "react"

export function ImageMenu({ image }: { image: searchResult }) {
    const [open, setOpen] = useState(false)

    return (
        <div className='absolute top-2 right-2'>
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" className="hover:bg-black rounded p-0 w-8 h-8 bg-black text-white"><Menu /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40">
                    <DropdownMenuItem asChild>
                        <AddToAlbum image={image} onClose={() => setOpen(false)}/>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
