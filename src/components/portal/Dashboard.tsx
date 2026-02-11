import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card'
import { LayoutDashboard, Kanban, FileText, Folder, LogOut, CheckCircle2, Clock, Download, DollarSign } from 'lucide-react'
import { cn } from '../../lib/utils'

export function Dashboard() {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState('overview')

    useEffect(() => {
        const auth = localStorage.getItem('isAuthenticated')
        if (!auth) {
            navigate('/login')
        }
    }, [navigate])

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated')
        navigate('/login')
    }

    const tabs = [
        { id: 'overview', label: 'Overview', icon: LayoutDashboard },
        { id: 'kanban', label: 'Project Board', icon: Kanban },
        { id: 'invoices', label: 'Invoices', icon: FileText },
        { id: 'files', label: 'Assets', icon: Folder },
    ]

    return (
        <div className="min-h-screen bg-muted/20 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-card border-r hidden md:flex flex-col">
                <div className="p-6 border-b">
                    <h2 className="text-xl font-bold">Zen Portal</h2>
                    <p className="text-sm text-muted-foreground">Client Access</p>
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "flex items-center gap-3 w-full px-4 py-3 rounded-md text-sm font-medium transition-colors",
                                activeTab === tab.id ? "bg-primary text-primary-foreground" : "hover:bg-accent hover:text-accent-foreground"
                            )}
                        >
                            <tab.icon size={18} />
                            {tab.label}
                        </button>
                    ))}
                </nav>
                <div className="p-4 border-t">
                    <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10" onClick={handleLogout}>
                        <LogOut size={18} className="mr-2" />
                        Log Out
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                <div className="max-w-5xl mx-auto">
                    <header className="flex justify-between items-center mb-8 md:hidden">
                        <h1 className="text-2xl font-bold">Zen Portal</h1>
                        <Button size="icon" variant="ghost" onClick={handleLogout}><LogOut size={20} /></Button>
                    </header>

                    {/* Mobile Tabs */}
                    <div className="flex md:hidden gap-2 overflow-x-auto pb-4 mb-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={cn(
                                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border",
                                    activeTab === tab.id ? "bg-primary text-primary-foreground border-primary" : "bg-background"
                                )}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="space-y-6">
                        {activeTab === 'overview' && <Overview />}
                        {activeTab === 'kanban' && <KanbanBoard />}
                        {activeTab === 'invoices' && <Invoices />}
                        {activeTab === 'files' && <Files />}
                    </div>
                </div>
            </main>
        </div>
    )
}

function Overview() {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Welcome back, Acme Corp</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Project Status</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">On Track</div>
                        <p className="text-xs text-muted-foreground">Sprint 3 of 5</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Next Milestone</CardTitle>
                        <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">Feb 15</div>
                        <p className="text-xs text-muted-foreground">Beta Release</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Open Tasks</CardTitle>
                        <Kanban className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground">4 High Priority</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Budget Used</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">65%</div>
                        <p className="text-xs text-muted-foreground">$12,500 remaining</p>
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center">
                                    <div className="ml-4 space-y-1">
                                        <p className="text-sm font-medium leading-none">Design Review Completed</p>
                                        <p className="text-sm text-muted-foreground">Frontend Team approved the new homepage layout.</p>
                                    </div>
                                    <div className="ml-auto font-medium text-xs text-muted-foreground">2h ago</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Team Contacts</CardTitle>
                        <CardDescription>Your dedicated project team</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/20" />
                                <div>
                                    <div className="font-medium">Sarah Jenkins</div>
                                    <div className="text-xs text-muted-foreground">Project Manager</div>
                                </div>
                            </div>
                             <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/20" />
                                <div>
                                    <div className="font-medium">Mike Chen</div>
                                    <div className="text-xs text-muted-foreground">Lead Developer</div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

function KanbanBoard() {
    return (
        <div className="grid md:grid-cols-3 gap-6 h-full">
            {/* To Do */}
            <div className="bg-muted/40 p-4 rounded-lg space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold">To Do</h3>
                    <span className="text-xs bg-muted px-2 py-1 rounded">3</span>
                </div>
                {[1, 2, 3].map(i => (
                    <Card key={i} className="cursor-move hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                            <p className="text-sm font-medium">Implement User Auth Flow</p>
                            <div className="mt-2 flex justify-between items-center text-xs text-muted-foreground">
                                <span>Backend</span>
                                <span className="text-orange-500">High</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            {/* In Progress */}
            <div className="bg-muted/40 p-4 rounded-lg space-y-4">
                 <div className="flex items-center justify-between">
                    <h3 className="font-semibold">In Progress</h3>
                    <span className="text-xs bg-muted px-2 py-1 rounded">2</span>
                </div>
                 {[1, 2].map(i => (
                    <Card key={i} className="cursor-move hover:shadow-md transition-shadow border-l-4 border-l-blue-500">
                        <CardContent className="p-4">
                            <p className="text-sm font-medium">Dashboard UI Components</p>
                             <div className="mt-2 flex justify-between items-center text-xs text-muted-foreground">
                                <span>Frontend</span>
                                <span className="text-blue-500">Med</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            {/* Done */}
             <div className="bg-muted/40 p-4 rounded-lg space-y-4">
                 <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Done</h3>
                    <span className="text-xs bg-muted px-2 py-1 rounded">5</span>
                </div>
                 {[1, 2, 3, 4, 5].map(i => (
                    <Card key={i} className="opacity-75 hover:opacity-100 transition-opacity">
                        <CardContent className="p-4">
                            <p className="text-sm line-through text-muted-foreground">Homepage Hero Section</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

function Invoices() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Invoices</CardTitle>
                <CardDescription>Manage your billing and payments</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {[
                        { id: 'INV-001', date: 'Jan 15, 2024', amount: '$5,000', status: 'Paid' },
                        { id: 'INV-002', date: 'Feb 01, 2024', amount: '$5,000', status: 'Pending' },
                    ].map((inv) => (
                        <div key={inv.id} className="flex items-center justify-between p-4 border rounded-lg">
                            <div>
                                <div className="font-medium">{inv.id}</div>
                                <div className="text-sm text-muted-foreground">Issued {inv.date}</div>
                            </div>
                            <div className="text-right">
                                <div className="font-bold">{inv.amount}</div>
                                <div className={cn("text-xs font-medium", inv.status === 'Paid' ? "text-green-500" : "text-yellow-500")}>
                                    {inv.status}
                                </div>
                            </div>
                            <Button variant={inv.status === 'Pending' ? 'default' : 'outline'} size="sm">
                                {inv.status === 'Pending' ? 'Pay Now' : 'Download'}
                            </Button>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

function Files() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Assets & Downloads</CardTitle>
                <CardDescription>Access your project files</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { name: 'Brand_Guidelines_v2.pdf', size: '2.5 MB', type: 'PDF' },
                        { name: 'Logo_Pack.zip', size: '15 MB', type: 'ZIP' },
                        { name: 'UI_Design_System.fig', size: '45 MB', type: 'Figma' },
                        { name: 'Contract_Signed.pdf', size: '1.2 MB', type: 'PDF' },
                    ].map((file, i) => (
                        <div key={i} className="flex items-center p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group">
                            <div className="p-2 bg-primary/10 rounded mr-4">
                                <FileText className="text-primary" size={24} />
                            </div>
                            <div className="flex-1">
                                <div className="font-medium group-hover:text-primary transition-colors">{file.name}</div>
                                <div className="text-xs text-muted-foreground">{file.size} • {file.type}</div>
                            </div>
                            <Button variant="ghost" size="icon"><Download size={18} /></Button>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
