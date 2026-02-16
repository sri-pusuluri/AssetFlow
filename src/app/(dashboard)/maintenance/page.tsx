import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Wrench, AlertCircle, CheckCircle2, Clock } from "lucide-react"
import { LogMaintenanceDialog } from "@/components/maintenance/log-maintenance-dialog"

const maintenanceTasks = [
    {
        id: "1",
        asset: "MacBook Pro 16\" (LPT-2023-012)",
        issue: "Battery degradation",
        priority: "MEDIUM",
        status: "IN_PROGRESS",
        assignedTo: "Tech Support A",
        dueDate: "2026-02-20",
    },
    {
        id: "2",
        asset: "Dell UltraSharp (MON-2022-099)",
        issue: "Dead pixels reported",
        priority: "LOW",
        status: "PENDING",
        assignedTo: "Unassigned",
        dueDate: "2026-02-25",
    },
    {
        id: "3",
        asset: "ThinkPad X1 (LPT-2024-005)",
        issue: "Screen replacement",
        priority: "HIGH",
        status: "PENDING",
        assignedTo: "Internal IT",
        dueDate: "2026-02-15",
    },
    {
        id: "4",
        asset: "Logitech MX Master (PER-092)",
        issue: "Scroll wheel stuck",
        priority: "LOW",
        status: "COMPLETED",
        assignedTo: "Tech Support B",
        dueDate: "2026-02-10",
    },
]

export default function MaintenancePage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Maintenance & Repair</h1>
                    <p className="text-muted-foreground">
                        Track asset health, scheduled maintenance, and repairs.
                    </p>
                </div>
                <LogMaintenanceDialog />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium">Pending Repairs</CardTitle>
                        <Clock className="w-4 h-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">8</div>
                        <p className="text-xs text-muted-foreground">3 high priority tasks</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium">In Progress</CardTitle>
                        <AlertCircle className="w-4 h-4 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3</div>
                        <p className="text-xs text-muted-foreground">Average 2 days turnaround</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium">Completed (MoM)</CardTitle>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">24</div>
                        <p className="text-xs text-muted-foreground">+5 from last month</p>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Active Maintenance Tasks</CardTitle>
                    <CardDescription>Scheduled repairs and health checks.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Asset</TableHead>
                                <TableHead>Issue</TableHead>
                                <TableHead>Priority</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Assigned To</TableHead>
                                <TableHead>Due Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {maintenanceTasks.map((task) => (
                                <TableRow key={task.id}>
                                    <TableCell className="font-medium">{task.asset}</TableCell>
                                    <TableCell>{task.issue}</TableCell>
                                    <TableCell>
                                        <Badge variant={
                                            task.priority === "HIGH" ? "destructive" :
                                                task.priority === "MEDIUM" ? "warning" : "secondary"
                                        }>
                                            {task.priority}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <span className={`w-2 h-2 rounded-full ${task.status === "COMPLETED" ? "bg-emerald-500" :
                                                task.status === "IN_PROGRESS" ? "bg-blue-500" : "bg-amber-500"
                                                }`} />
                                            <span className="text-sm capitalize">{task.status.toLowerCase().replace("_", " ")}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>{task.assignedTo}</TableCell>
                                    <TableCell>{task.dueDate}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
