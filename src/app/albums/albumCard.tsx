import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

interface Folder {
    name: string; path: string;
}


export function AlbumCard({ folder }: { folder: Folder }) {
    return (
        <Card className="   ">
            <CardHeader>
                <CardTitle>{folder.name}</CardTitle>
                <CardDescription>All your {folder.name} Images.</CardDescription>
            </CardHeader>
            <CardContent>

            </CardContent>
            <CardFooter className="flex justify-between">
                <Button asChild className="bg-white text-black rounded hover:bg-white">
                    <Link href={`/albums/${folder.name}`}>View Album</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
