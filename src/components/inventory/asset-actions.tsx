"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { MoreHorizontal } from "lucide-react"

interface Asset {
    id: string
    serial: string
    name: string
    category: string
    status: string
    condition: string
    assignedTo: string | null
    location: string
}

export function AssetActions({ asset }: { asset: Asset }) {
    const [viewOpen, setViewOpen] = useState(false)

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>Assign Asset</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setViewOpen(true)}>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit Asset</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">Mark Retired</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <Dialog open={viewOpen} onOpenChange={setViewOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{asset.name}</DialogTitle>
                        <DialogDescription>Serial Number: {asset.serial}</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-medium">Status</h4>
                                <p className="text-sm text-muted-foreground">{asset.status}</p>
                            </div>
                            <div>
                                <h4 className="font-medium">Condition</h4>
                                <p className="text-sm text-muted-foreground">{asset.condition}</p>
                            </div>
                            <div>
                                <h4 className="font-medium">Assigned To</h4>
                                <p className="text-sm text-muted-foreground">{asset.assignedTo || "Unassigned"}</p>
                            </div>
                            <div>
                                <h4 className="font-medium">Location</h4>
                                <p className="text-sm text-muted-foreground">{asset.location}</p>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}
