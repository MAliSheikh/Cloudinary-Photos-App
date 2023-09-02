import { User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Menu from "./icons/menu"
import {FolderPlus} from 'lucide-react'

export function ImageMenu() {
    return (
        <div className='absolute top-2 right-2'>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hover:bg-black rounded p-0 w-8 h-8 bg-black text-white"><Menu /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32">
                <DropdownMenuItem>
                    <FolderPlus className="mr-2 h-4 w-4" />
                    <User className="mr-2 h-4 w-4" />
                    <span>Add to Album</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        </div>
    )
}
