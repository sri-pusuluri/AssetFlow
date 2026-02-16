"use client"

import { useState } from "react"
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus } from "lucide-react"

export function CreateReportDialog() {
    const [open, setOpen] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="gap-2">
                    <Plus className="w-4 h-4" />
                    New Report
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Create Custom Report</DialogTitle>
                    <DialogDescription>
                        Configure parameters for your new analytics report.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Report Name
                        </Label>
                        <Input id="name" placeholder="Q3 Asset Utilization" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="type" className="text-right">
                            Type
                        </Label>
                        <Select>
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Select report type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="inventory">Inventory Summary</SelectItem>
                                <SelectItem value="audit">Audit Log</SelectItem>
                                <SelectItem value="maintenance">Maintenance History</SelectItem>
                                <SelectItem value="utilization">Asset Utilization</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid grid-cols-4 items-start gap-4">
                        <Label className="text-right pt-2">
                            Include
                        </Label>
                        <div className="col-span-3 space-y-2">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="charts" defaultChecked />
                                <label
                                    htmlFor="charts"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Visual Charts
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="raw-data" defaultChecked />
                                <label
                                    htmlFor="raw-data"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Raw Data Tables
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="history" />
                                <label
                                    htmlFor="history"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Historical Comparisons
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={() => setOpen(false)}>Generate Report</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
