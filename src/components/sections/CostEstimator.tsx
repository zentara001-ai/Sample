import { useState, useEffect } from 'react'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card'
import { Check } from 'lucide-react'
import { cn } from '../../lib/utils'

export function CostEstimator() {
    const [platform, setPlatform] = useState<'web' | 'mobile' | 'both'>('web')
    const [design, setDesign] = useState<'template' | 'custom' | 'premium'>('custom')
    const [pages, setPages] = useState(5)
    const [features, setFeatures] = useState({
        seo: false,
        cms: true,
        auth: false,
        analytics: true,
        ecommerce: false,
    })

    const [total, setTotal] = useState(0)

    useEffect(() => {
        let base = 0
        
        // Platform Base
        if (platform === 'web') base += 1000
        if (platform === 'mobile') base += 2500
        if (platform === 'both') base += 3000

        // Design Multiplier
        let designMult = 1
        if (design === 'template') designMult = 1
        if (design === 'custom') designMult = 2
        if (design === 'premium') designMult = 3.5

        base = base * designMult

        // Pages
        base += pages * 150

        // Features
        if (features.seo) base += 500
        if (features.cms) base += 800
        if (features.auth) base += 1200
        if (features.analytics) base += 300
        if (features.ecommerce) base += 2000

        setTotal(base)
    }, [platform, design, pages, features])

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(amount)
    }

    return (
        <section className="py-24 container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Estimate Your Project</h1>
                <p className="text-xl text-muted-foreground">Get a ballpark figure for your next digital product. No hidden fees, just transparency.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 space-y-8">
                    {/* Platform Selection */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Platform</CardTitle>
                            <CardDescription>Where should your product live?</CardDescription>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {(['web', 'mobile', 'both'] as const).map((p) => (
                                <button
                                    key={p}
                                    onClick={() => setPlatform(p)}
                                    className={cn(
                                        "p-4 rounded-lg border-2 text-left transition-all",
                                        platform === p ? "border-primary bg-primary/5 ring-2 ring-primary/20" : "border-muted hover:border-primary/50"
                                    )}
                                >
                                    <div className="font-semibold capitalize text-lg mb-1">{p}</div>
                                    <div className="text-sm text-muted-foreground">
                                        {p === 'web' && "Responsive Website"}
                                        {p === 'mobile' && "iOS & Android App"}
                                        {p === 'both' && "Web + Mobile Apps"}
                                    </div>
                                </button>
                            ))}
                        </CardContent>
                    </Card>

                    {/* Design Level */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Design Level</CardTitle>
                            <CardDescription>How unique should it look?</CardDescription>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {(['template', 'custom', 'premium'] as const).map((d) => (
                                <button
                                    key={d}
                                    onClick={() => setDesign(d)}
                                    className={cn(
                                        "p-4 rounded-lg border-2 text-left transition-all",
                                        design === d ? "border-primary bg-primary/5 ring-2 ring-primary/20" : "border-muted hover:border-primary/50"
                                    )}
                                >
                                    <div className="font-semibold capitalize text-lg mb-1">{d}</div>
                                    <div className="text-sm text-muted-foreground">
                                        {d === 'template' && "Clean, Standard Layouts"}
                                        {d === 'custom' && "Unique Branding & UI"}
                                        {d === 'premium' && "Award-Winning Interactions"}
                                    </div>
                                </button>
                            ))}
                        </CardContent>
                    </Card>

                    {/* Scale (Pages/Screens) */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Scale: {pages} Pages/Screens</CardTitle>
                            <CardDescription>Size of the application.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <input
                                type="range"
                                min="1"
                                max="50"
                                value={pages}
                                onChange={(e) => setPages(parseInt(e.target.value))}
                                className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <div className="flex justify-between text-xs text-muted-foreground mt-2">
                                <span>1 Page</span>
                                <span>25 Pages</span>
                                <span>50+ Pages</span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Features */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Add-ons & Features</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {Object.entries(features).map(([key, value]) => (
                                <div key={key} className="flex items-center justify-between p-3 rounded-md border border-border hover:bg-muted/50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div
                                            onClick={() => setFeatures(prev => ({ ...prev, [key]: !prev[key as keyof typeof features] }))}
                                            className={cn(
                                                "w-5 h-5 rounded border flex items-center justify-center cursor-pointer transition-colors",
                                                value ? "bg-primary border-primary text-primary-foreground" : "border-input"
                                            )}
                                        >
                                            {value && <Check size={14} />}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-medium capitalize">{key === 'cms' ? 'CMS Integration' : key === 'seo' ? 'Advanced SEO' : key}</span>
                                            <span className="text-xs text-muted-foreground">
                                                {key === 'cms' && "Content Management System"}
                                                {key === 'seo' && "Rank higher on Google"}
                                                {key === 'auth' && "User Login & Profiles"}
                                                {key === 'analytics' && "Track user behavior"}
                                                {key === 'ecommerce' && "Online Store Functionality"}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="font-medium text-muted-foreground">
                                        {key === 'seo' && "+$500"}
                                        {key === 'cms' && "+$800"}
                                        {key === 'auth' && "+$1200"}
                                        {key === 'analytics' && "+$300"}
                                        {key === 'ecommerce' && "+$2000"}
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                {/* Sticky Summary */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24">
                        <Card className="border-primary/20 shadow-lg shadow-primary/5 bg-card/80 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle>Estimated Cost</CardTitle>
                                <CardDescription>Based on your selections</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="text-5xl font-bold tracking-tight text-primary">
                                    {formatCurrency(total)}
                                </div>
                                
                                <div className="space-y-2 text-sm border-t pt-4">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Platform</span>
                                        <span className="font-medium capitalize">{platform}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Design</span>
                                        <span className="font-medium capitalize">{design}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Pages</span>
                                        <span className="font-medium">{pages}</span>
                                    </div>
                                </div>

                                <Button size="lg" className="w-full text-lg h-12" onClick={() => window.location.href = `/contact?budget=${total}`}>
                                    Book Consultation
                                </Button>
                                <p className="text-xs text-center text-muted-foreground">
                                    *This is an estimate. Final pricing may vary based on specific requirements.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
