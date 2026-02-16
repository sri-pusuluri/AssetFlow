"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Sparkles, Loader2, CheckCircle2, FileText, Download } from "lucide-react"

export function AuditSummaryDialog({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) {
    const [status, setStatus] = useState<'idle' | 'generating' | 'done'>('idle')

    const generate = () => {
        setStatus('generating')
        setTimeout(() => {
            setStatus('done')
        }, 3000)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px] overflow-hidden">
                <DialogHeader>
                    <div className="flex items-center gap-2 text-primary mb-2">
                        <Sparkles className="w-5 h-5 fill-primary" />
                        <span className="font-bold uppercase tracking-wider text-xs font-mono">AI Intelligence</span>
                    </div>
                    <DialogTitle className="text-2xl font-bold">Smart Audit Summary</DialogTitle>
                    <DialogDescription>
                        Our AI is analyzing 1,284 assets, 842 assignments, and 45 maintenance logs.
                    </DialogDescription>
                </DialogHeader>

                <div className="py-6 min-h-[300px] flex flex-col items-center justify-center text-center">
                    {status === 'idle' && (
                        <div className="space-y-4">
                            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                                <FileText className="w-10 h-10 text-primary" />
                            </div>
                            <p className="text-muted-foreground max-w-sm">
                                Ready to generate a comprehensive audit report including discrepancy alerts, lifecycle predictions, and department spending.
                            </p>
                            <Button onClick={generate} className="gap-2">
                                <Sparkles className="w-4 h-4" />
                                Start Analysis
                            </Button>
                        </div>
                    )}

                    {status === 'generating' && (
                        <div className="space-y-4">
                            <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto" />
                            <p className="font-medium">Synthesizing data points...</p>
                            <div className="w-64 h-2 bg-secondary rounded-full overflow-hidden mx-auto">
                                <div className="h-full bg-primary animate-progress" />
                            </div>
                        </div>
                    )}

                    {status === 'done' && (
                        <div className="space-y-6 w-full text-left">
                            <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-100 dark:bg-emerald-950/30 dark:border-emerald-900/50">
                                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold mb-2">
                                    <CheckCircle2 className="w-4 h-4" />
                                    Analysis Complete
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-sm">
                                        <span>Inventory Accuracy:</span>
                                        <span className="font-bold">98.2%</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span>Missing Items detected:</span>
                                        <span className="font-bold text-destructive">12</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span>Maintenance Backlog:</span>
                                        <span className="font-bold text-amber-600">Low</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h4 className="font-bold text-sm uppercase text-muted-foreground tracking-widest">Key Recommendation</h4>
                                <p className="text-sm">
                                    Replace 15% of the Laptop fleet (mostly LPT-2022 series) by Q3 2026 to avoid increased maintenance costs and productivity loss.
                                </p>
                            </div>

                            <div className="flex gap-3 pt-4">
                                <Button className="flex-1 gap-2">
                                    <Download className="w-4 h-4" />
                                    Download PDF
                                </Button>
                                <Button variant="outline" className="flex-1" onClick={() => onOpenChange(false)}>
                                    Close
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}
