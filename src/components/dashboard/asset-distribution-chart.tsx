"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from "recharts"

const data = [
    { name: "Laptops", value: 450, color: "hsl(var(--primary))" },
    { name: "Monitors", value: 380, color: "hsl(var(--chart-2))" },
    { name: "Peripherals", value: 240, color: "hsl(var(--chart-3))" },
    { name: "Mobile", value: 120, color: "hsl(var(--chart-4))" },
    { name: "Furniture", value: 94, color: "hsl(var(--chart-5))" },
]

export function AssetDistributionChart() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
                <Tooltip
                    contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                    }}
                    itemStyle={{ color: "hsl(var(--foreground))" }}
                />
                <Legend verticalAlign="bottom" height={36} />
            </PieChart>
        </ResponsiveContainer>
    )
}
