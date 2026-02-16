"use client"

import * as React from "react"
import {
    LayoutDashboard,
    Package,
    Users,
    ClipboardList,
    Wrench,
    BarChart3,
    Settings,
    ShieldCheck,
    History,
    FileText,
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"
import Link from "next/link"

const menuItems = [
    {
        title: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
    },
    {
        title: "Inventory",
        icon: Package,
        href: "/inventory",
    },
    {
        title: "Assignments",
        icon: ClipboardList,
        href: "/assignments",
    },
    {
        title: "Employees",
        icon: Users,
        href: "/employees",
    },
    {
        title: "Maintenance",
        icon: Wrench,
        href: "/maintenance",
    },
]

const adminItems = [
    {
        title: "Reports",
        icon: BarChart3,
        href: "/reports",
    },
    {
        title: "Audit Logs",
        icon: ShieldCheck,
        href: "/audit",
    },
    {
        title: "Settings",
        icon: Settings,
        href: "/settings",
    },
]

export function AppSidebar() {
    const pathname = usePathname()

    return (
        <Sidebar variant="sidebar" collapsible="icon">
            <SidebarHeader className="border-b px-4 py-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
                    <div className="bg-primary text-primary-foreground p-1 rounded-lg">
                        <ClipboardList className="w-6 h-6" />
                    </div>
                    <span className="group-data-[collapsible=icon]:hidden">AssetFlow</span>
                </Link>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={pathname === item.href}
                                        tooltip={item.title}
                                    >
                                        <Link href={item.href}>
                                            <item.icon className="w-5 h-5" />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Management</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {adminItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={pathname === item.href}
                                        tooltip={item.title}
                                    >
                                        <Link href={item.href}>
                                            <item.icon className="w-5 h-5" />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="border-t p-4">
                {/* User profile could go here */}
            </SidebarFooter>
        </Sidebar>
    )
}
