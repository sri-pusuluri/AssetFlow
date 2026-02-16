"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Download, Sparkles, FileText, PieChart, TrendingUp, Plus, CheckCircle2 } from "lucide-react"
import { AuditSummaryDialog } from "@/components/reports/audit-summary-dialog"
import { CreateReportDialog } from "@/components/reports/create-report-dialog"

export default function ReportsPage() {
    const [auditOpen, setAuditOpen] = useState(false)

    const reports = [
        {
            title: "Inventory Accuracy",
            description: "Comparison of system records vs physical audits.",
            icon: CheckCircle2,
        },
        {
            title: "Cost Analysis",
            description: "Total spend on hardware across departments.",
            icon: BarChart3,
        },
        {
            title: "Lifecycle & Depreciation",
            description: "Projected value of current asset pool.",
            icon: TrendingUp,
        },
        {
            title: "Department Allocation",
            description: "Asset distribution by team and office.",
            icon: PieChart,
        },
    ]

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Analytics & Reports</h1>
                    <p className="text-muted-foreground">
                        Generate insights and export data for audits and financial planning.
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="gap-2">
                        <Download className="w-4 h-4" />
                        Export data
                    </Button>
                    <CreateReportDialog />
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <Card className="border-primary/20 bg-primary/5">
                    <CardHeader>
                        <div className="flex items-center gap-2 text-primary">
                            <Sparkles className="w-5 h-5 text-primary fill-primary/20" />
                            <h3 className="font-bold">AI Intelligence</h3>
                        </div>
                        <CardTitle className="mt-2 text-2xl font-bold">Smart Audit Summary</CardTitle>
                        <CardDescription>
                            Generate an AI-powered summary of your entire inventory for auditing purposes.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button
                            onClick={() => setAuditOpen(true)}
                            className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                            <FileText className="w-4 h-4" />
                            Generate Audit Summary
                        </Button>
                        <p className="mt-4 text-xs text-muted-foreground text-center">
                            Powered by AssetFlow Intelligence Tier
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Forecast Procurement</CardTitle>
                        <CardDescription>
                            AI-driven predictions for hardware needs based on hiring trends.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button variant="outline" className="w-full gap-2">
                            <TrendingUp className="w-4 h-4" />
                            Run Procurement Forecast
                        </Button>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {reports.map((report) => (
                    <Card key={report.title} className="hover:bg-accent/50 transition-colors cursor-pointer">
                        <CardHeader className="pb-2">
                            <div className="p-2 w-fit rounded-lg bg-secondary">
                                <report.icon className="w-5 h-5" />
                            </div>
                            <CardTitle className="mt-3 text-lg">{report.title}</CardTitle>
                            <CardDescription>{report.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button variant="link" className="px-0">View Report →</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <AuditSummaryDialog open={auditOpen} onOpenChange={setAuditOpen} />
        </div>
    )
}

