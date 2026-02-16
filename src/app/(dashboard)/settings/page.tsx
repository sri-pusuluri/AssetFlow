import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Shield, Settings as SettingsIcon, Globe, Bell, UserPlus } from "lucide-react"

export default function SettingsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                <p className="text-muted-foreground">
                    Manage system configurations, roles, and security policies.
                </p>
            </div>

            <Tabs defaultValue="general" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="general" className="gap-2">
                        <SettingsIcon className="w-4 h-4" />
                        General
                    </TabsTrigger>
                    <TabsTrigger value="rbac" className="gap-2">
                        <Shield className="w-4 h-4" />
                        RBAC & Security
                    </TabsTrigger>
                    <TabsTrigger value="notifications" className="gap-2">
                        <Bell className="w-4 h-4" />
                        Notifications
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="general" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Organization Details</CardTitle>
                            <CardDescription>Basic info about your company.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="org-name">Organization Name</Label>
                                <Input id="org-name" defaultValue="AssetFlow Corp" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="domain">Primary Domain</Label>
                                <Input id="domain" defaultValue="assetflow.io" />
                            </div>
                            <Button>Save Changes</Button>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="rbac" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle>Role-Based Access Control</CardTitle>
                                    <CardDescription>Define what different users can see and do.</CardDescription>
                                </div>
                                <Button variant="outline" className="gap-2">
                                    <UserPlus className="w-4 h-4" />
                                    Add Custom Role
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label className="text-base">Administrator</Label>
                                        <p className="text-sm text-muted-foreground">Full access to all modules and system settings.</p>
                                    </div>
                                    <Badge>6 Users</Badge>
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label className="text-base">Asset Manager</Label>
                                        <p className="text-sm text-muted-foreground">Can manage inventory and assignments but no settings.</p>
                                    </div>
                                    <Badge variant="secondary">12 Users</Badge>
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label className="text-base">Employee (Self-Service)</Label>
                                        <p className="text-sm text-muted-foreground">Can view their own assets and request maintenance.</p>
                                    </div>
                                    <Badge variant="outline">750+ Users</Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Security Policies</CardTitle>
                            <CardDescription>Enforce compliance across the organization.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label>Force E-Sign Acknowledgement</Label>
                                    <p className="text-sm text-muted-foreground">Require employees to e-sign when receiving new assets.</p>
                                </div>
                                <Switch checked />
                            </div>
                            <Separator />
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label>Asset Recovery Webhook</Label>
                                    <p className="text-sm text-muted-foreground">Trigger HR offboarding flow when an employee leaves.</p>
                                </div>
                                <Switch checked />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

// Add Switch since it might be missing
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
