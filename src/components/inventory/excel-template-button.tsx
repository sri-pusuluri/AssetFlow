"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function ExcelTemplateButton() {
    const downloadTemplate = () => {
        const headers = ["Serial Number", "Asset Name", "Model", "Category", "Condition", "Location", "Purchase Date", "Purchase Price"]
        const csvContent = "data:text/csv;charset=utf-8," + headers.join(",")
        const encodedUri = encodeURI(csvContent)
        const link = document.createElement("a")
        link.setAttribute("href", encodedUri)
        link.setAttribute("download", "asset_inventory_template.csv")
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <Button variant="outline" className="gap-2" onClick={downloadTemplate}>
            <Download className="w-4 h-4" />
            Template
        </Button>
    )
}
