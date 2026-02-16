import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Package,
    Users,
    ClipboardList,
    AlertTriangle,
    ArrowUpRight,
    ArrowDownRight
} from "lucide-react"
import { AssetDistributionChart } from "@/components/dashboard/asset-distribution-chart"

export default function DashboardPage() {
    const stats = [
        {
            title: "Total Assets",
            value: "1,284",
            description: "+12 from last month",
            icon: Package,
            trend: "up",
        },
        {
            title: "Active Assignments",
            value: "842",
            description: "94% utilization",
            icon: ClipboardList,
            trend: "up",
        },
        {
            title: "Employees",
            value: "756",
            description: "Across 4 locations",
            icon: Users,
            trend: "neutral",
        },
        {
            title: "Missing Assets",
            value: "12",
            description: "-4 from last month",
            icon: AlertTriangle,
            iconColor: "text-destructive",
            trend: "down",
        },
    ]

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">
                    Real-time overview of your office assets and assignments.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <Card key={stat.title}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                {stat.title}
                            </CardTitle>
                            <stat.icon className={`h-4 w-4 ${stat.iconColor || "text-muted-foreground"}`} />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-muted-foreground">
                                {stat.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Asset Distribution</CardTitle>
                        <CardDescription>
                            Assets by category across all locations.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px] flex items-center justify-center m-6">
                        <AssetDistributionChart />
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Assignments</CardTitle>
                        <CardDescription>
                            Latest asset check-outs and returns.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                                        <ClipboardList className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <p className="text-sm font-medium leading-none">
                                            MacBook Pro 16" assigned to John Doe
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            2 hours ago • New York Office
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
