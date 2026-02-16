import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, Filter, MoreHorizontal } from "lucide-react"
import { AddAssetDialog } from "@/components/inventory/add-asset-dialog"
import { ExcelTemplateButton } from "@/components/inventory/excel-template-button"
import { FilterAssetsPopover } from "@/components/inventory/filter-assets-popover"
import { AssetActions } from "@/components/inventory/asset-actions"

const mockAssets = [
    {
        id: "1",
        serial: "LPT-2024-001",
        name: "MacBook Pro 14\"",
        category: "Laptop",
        status: "ASSIGNED",
        condition: "NEW",
        assignedTo: "John Doe",
        location: "New York",
    },
    {
        id: "2",
        serial: "MON-2023-042",
        name: "Dell UltraSharp 27\"",
        category: "Monitor",
        status: "AVAILABLE",
        condition: "GOOD",
        assignedTo: null,
        location: "London",
    },
    {
        id: "3",
        serial: "LPT-2024-005",
        name: "ThinkPad X1 Carbon",
        category: "Laptop",
        status: "MAINTENANCE",
        condition: "FAIR",
        assignedTo: null,
        location: "Berlin",
    },
    {
        id: "4",
        serial: "KB-2023-112",
        name: "Logitech MX Keys",
        category: "Peripheral",
        status: "ASSIGNED",
        condition: "GOOD",
        assignedTo: "Jane Smith",
        location: "New York",
    },
    {
        id: "5",
        serial: "LPT-2023-088",
        name: "MacBook Air M2",
        category: "Laptop",
        status: "RETIRED",
        condition: "BROKEN",
        assignedTo: null,
        location: "Remote",
    },
]

export default function InventoryPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Asset Inventory</h1>
                    <p className="text-muted-foreground">
                        Manage and track all company hardware and accessories.
                    </p>
                </div>
                <div className="flex gap-2">
                    <ExcelTemplateButton />
                    <AddAssetDialog />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search assets..." className="pl-9" />
                </div>
                <FilterAssetsPopover />
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Serial Number</TableHead>
                            <TableHead>Asset Name</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Condition</TableHead>
                            <TableHead>Assigned To</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {mockAssets.map((asset) => (
                            <TableRow key={asset.id}>
                                <TableCell className="font-medium">{asset.serial}</TableCell>
                                <TableCell>{asset.name}</TableCell>
                                <TableCell>{asset.category}</TableCell>
                                <TableCell>
                                    <Badge variant={
                                        asset.status === "AVAILABLE" ? "success" :
                                            asset.status === "ASSIGNED" ? "secondary" :
                                                asset.status === "MAINTENANCE" ? "warning" : "destructive"
                                    } className="capitalize">
                                        {asset.status.toLowerCase()}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <span className="text-sm">{asset.condition.toLowerCase()}</span>
                                </TableCell>
                                <TableCell>{asset.assignedTo || "-"}</TableCell>
                                <TableCell>{asset.location}</TableCell>
                                <TableCell className="text-right">
                                    <AssetActions asset={asset} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
