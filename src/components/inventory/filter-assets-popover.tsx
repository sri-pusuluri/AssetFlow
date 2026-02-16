"use client"

import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { Filter } from "lucide-react"
import { Label } from "@/components/ui/label"

export function FilterAssetsPopover() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" className="gap-2">
                    <Filter className="w-4 h-4" />
                    Filters
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-60" align="end">
                <div className="space-y-4">
                    <h4 className="font-medium leading-none">Filter Assets</h4>

                    <div className="space-y-2">
                        <Label>Status</Label>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="available" />
                                <Label htmlFor="available" className="text-sm font-normal">Available</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="assigned" />
                                <Label htmlFor="assigned" className="text-sm font-normal">Assigned</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="maintenance" />
                                <Label htmlFor="maintenance" className="text-sm font-normal">In Maintenance</Label>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label>Condition</Label>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="new" />
                                <Label htmlFor="new" className="text-sm font-normal">New</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="good" />
                                <Label htmlFor="good" className="text-sm font-normal">Good</Label>
                            </div>
                        </div>
                    </div>

                    <Button size="sm" className="w-full">Apply Filters</Button>
                </div>
            </PopoverContent>
        </Popover>
    )
}
