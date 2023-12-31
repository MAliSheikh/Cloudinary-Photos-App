import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FolderPlus } from "lucide-react"
import { useState } from "react"
import { AddImageToAlbum } from "./ui/actions"

interface searchResult {
    public_id: string;
    tags: string[];
}

export function AddToAlbum({ image, onClose }: {
    image: searchResult, onClose: () => void
}) {
    const [AlbumName, setAlbumName] = useState('')
    const [open, setOpen] = useState(false)

    return (
        <Dialog
            open={open}
            // onOpenChange={(newOpenState: boolean | ((prevState: boolean) => boolean)) => {
            onOpenChange={(newOpenState) => {
                setOpen(newOpenState);
                if (!newOpenState) {
                    onClose();
                }
            }}
        >
            <DialogTrigger asChild>
                <Button variant="ghost" className="bg-black hover:bg-black">
                    <FolderPlus className="mr-2 h-4 w-4" />
                    <span>Add to Album</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-black text-white">
                <DialogHeader>
                    <DialogTitle>Add To Album</DialogTitle>
                    <DialogDescription>
                        Type an album yoy want to move this image into
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Album
                        </Label>
                        <Input onChange={(e) => setAlbumName(e.currentTarget.value)}
                            id="album-name" value={AlbumName} className="col-span-3" />
                    </div>

                </div>
                <DialogFooter>
                    <Button
                        onClick={async () => {
                            onClose()
                            setOpen(false)
                            await AddImageToAlbum(image, AlbumName)
                        }}
                        type="submit">Add To Album</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
