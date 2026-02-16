import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ClipboardList, Plus, Search, Calendar, FileCheck, ArrowRightLeft } from "lucide-react"
import { Input } from "@/components/ui/input"

const assignments = [
    {
        id: "1",
        asset: "MacBook Pro 14\"",
        serial: "LPT-2024-001",
        employee: "John Doe",
        assignedAt: "2024-01-15",
        returnDate: "2026-01-15",
        status: "ACTIVE",
        eSigned: true,
    },
    {
        id: "2",
        asset: "Dell UltraSharp 27\"",
        serial: "MON-2023-042",
        employee: "Sarah Connor",
        assignedAt: "2023-11-20",
        returnDate: "2025-11-20",
        status: "ACTIVE",
        eSigned: true,
    },
    {
        id: "3",
        asset: "ThinkPad X1 Carbon",
        serial: "LPT-2023-099",
        employee: "Michael Scott",
        assignedAt: "2023-05-10",
        returnDate: "2024-05-10",
        status: "OVERDUE",
        eSigned: true,
    },
]

export default function AssignmentsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Active Assignments</h1>
                    <p className="text-muted-foreground">
                        Monitor asset distributions and track return schedules.
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="gap-2">
                        <ArrowRightLeft className="w-4 h-4" />
                        Transfer Asset
                    </Button>
                    <Button className="gap-2">
                        <Plus className="w-4 h-4" />
                        New Assignment
                    </Button>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search assignments..." className="pl-9" />
                </div>
            </div>

            <Card>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Asset & Serial</TableHead>
                                <TableHead>Employee</TableHead>
                                <TableHead>Assigned Date</TableHead>
                                <TableHead>Expected Return</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>E-Sign</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {assignments.map((asgn) => (
                                <TableRow key={asgn.id}>
                                    <TableCell>
                                        <div className="flex flex-col">
                                            <span className="font-medium">{asgn.asset}</span>
                                            <span className="text-xs text-muted-foreground">{asgn.serial}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>{asgn.employee}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Calendar className="w-4 h-4 text-muted-foreground" />
                                            {asgn.assignedAt}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2 text-sm font-medium">
                                            <Calendar className="w-4 h-4 text-muted-foreground" />
                                            {asgn.returnDate}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={asgn.status === "ACTIVE" ? "success" : "destructive"}>
                                            {asgn.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        {asgn.eSigned ? (
                                            <div className="flex items-center gap-1 text-emerald-500">
                                                <FileCheck className="w-4 h-4" />
                                                <span className="text-xs font-medium">Verified</span>
                                            </div>
                                        ) : (
                                            <span className="text-xs text-muted-foreground">Pending</span>
                                        )}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="sm">Manage</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
