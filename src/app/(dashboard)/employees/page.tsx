import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Users, Search, Mail, MapPin, ExternalLink, MoreVertical } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { InviteEmployeeDialog } from "@/components/employees/invite-employee-dialog"

const employees = [
    {
        id: "1",
        name: "John Doe",
        email: "john@example.com",
        department: "Engineering",
        location: "New York",
        assets: 3,
        status: "ACTIVE",
    },
    {
        id: "2",
        name: "Jane Smith",
        email: "jane@example.com",
        department: "Design",
        location: "London",
        assets: 2,
        status: "ACTIVE",
    },
    {
        id: "3",
        name: "Michael Scott",
        email: "michael@example.com",
        department: "Sales",
        location: "Scranton",
        assets: 1,
        status: "OFFBOARDING",
    },
    {
        id: "4",
        name: "Sarah Connor",
        email: "sarah@example.com",
        department: "IT",
        location: "Los Angeles",
        assets: 5,
        status: "ACTIVE",
    },
]

export default function EmployeesPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Employees</h1>
                    <p className="text-muted-foreground">
                        Manage asset holders and track department-level allocations.
                    </p>
                </div>
                <InviteEmployeeDialog />
            </div>

            <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search by name, email, or dept..." className="pl-9" />
                </div>
            </div>

            <Card>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Employee</TableHead>
                                <TableHead>Department</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>Assigned Assets</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {employees.map((emp) => (
                                <TableRow key={emp.id}>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-9 w-9">
                                                <AvatarImage src={`https://avatar.iran.liara.run/username?username=${emp.name}`} />
                                                <AvatarFallback>{emp.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col">
                                                <span className="font-medium">{emp.name}</span>
                                                <span className="text-xs text-muted-foreground">{emp.email}</span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>{emp.department}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-3 h-3 text-muted-foreground" />
                                            <span>{emp.location}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="secondary" className="gap-1">
                                            {emp.assets} Items
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={emp.status === "ACTIVE" ? "success" : "warning"}>
                                            {emp.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="icon">
                                            <ExternalLink className="w-4 h-4" />
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
