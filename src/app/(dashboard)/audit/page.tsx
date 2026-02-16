import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ShieldCheck, Search, Info, AlertTriangle, Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const auditLogs = [
    {
        id: "1",
        action: "ASSIGN_ASSET",
        user: "Admin (IT)",
        entity: "MacBook Pro 16\"",
        details: "Assigned to Michael Scott",
        timestamp: "2026-02-13 14:05:22",
    },
    {
        id: "2",
        action: "CREATE_ASSET",
        user: "System Agent",
        entity: "15x Dell Monitors",
        details: "Bulk upload via CSV",
        timestamp: "2026-02-12 09:30:00",
    },
    {
        id: "3",
        action: "UPDATE_STATUS",
        user: "Sarah Connor",
        entity: "ThinkPad X1",
        details: "Marked as MAINTENANCE",
        timestamp: "2026-02-11 16:45:10",
    },
    {
        id: "4",
        action: "RETIRE_ASSET",
        user: "Admin (Finance)",
        entity: "iMac 2017",
        details: "Depreciated and recycled",
        timestamp: "2026-02-10 11:20:00",
    },
]

export default function AuditPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Audit Trails</h1>
                    <p className="text-muted-foreground">
                        Immutable logs of every asset movement and system change.
                    </p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400 rounded-full text-sm font-medium border border-emerald-200 dark:border-emerald-800">
                    <ShieldCheck className="w-4 h-4" />
                    SOC2 Compliant Enforced
                </div>
            </div>

            <Alert className="border-primary/50 bg-primary/5">
                <Sparkles className="h-4 w-4 text-primary" />
                <AlertTitle className="text-primary font-bold">Agentic AI Reconciliation</AlertTitle>
                <AlertDescription>
                    Our autonomous agent is currently cross-referencing HR records with the asset database.
                    <strong> 12 inconsistencies flagged</strong> for review.
                </AlertDescription>
            </Alert>

            <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Filter by user or action..." className="pl-9" />
                </div>
            </div>

            <Card>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Timestamp</TableHead>
                                <TableHead>User</TableHead>
                                <TableHead>Action</TableHead>
                                <TableHead>Entity</TableHead>
                                <TableHead>Details</TableHead>
                                <TableHead className="text-right">Info</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {auditLogs.map((log) => (
                                <TableRow key={log.id}>
                                    <TableCell className="text-xs font-mono text-muted-foreground">
                                        {log.timestamp}
                                    </TableCell>
                                    <TableCell className="font-medium">{log.user}</TableCell>
                                    <TableCell>
                                        <Badge variant="outline">{log.action}</Badge>
                                    </TableCell>
                                    <TableCell>{log.entity}</TableCell>
                                    <TableCell className="text-sm">{log.details}</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="icon">
                                            <Info className="w-4 h-4" />
                                        </Button>
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
