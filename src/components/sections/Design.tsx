import { motion } from 'framer-motion'
import { Palette, Layers, Brush, Zap, CheckCircle2, Mail, Lock } from 'lucide-react'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'

export function Design() {
    const navigate = useNavigate();

    return (
        <div className="space-y-32 pb-32">
            {/* HERO (Home) */}
            <section id="design-home" className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl space-y-8"
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">Design Studio</h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                        We sculpt digital and physical identities that resonate. At Akruti, design is not just how it looks, but how it speaks.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="rounded-full" onClick={() => navigate('/design/projects')}>View Projects</Button>
                        <Button size="lg" variant="outline" className="rounded-full" onClick={() => document.getElementById('design-contact')?.scrollIntoView({ behavior: 'smooth' })}>Get Started</Button>
                    </div>
                </motion.div>
            </section>

            {/* ABOUT */}
            <section id="design-about" className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold">About the Studio</h2>
                        <p className="text-lg text-muted-foreground">
                            Founded on the principle that beauty and utility are inseparable, our design studio operates at the intersection of psychology and aesthetics.
                        </p>
                        <ul className="space-y-4">
                            {['Data-driven design processes', 'Human-centric methodologies', 'Global design perspective', 'Award-winning creative team'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-primary" size={20} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="aspect-square bg-muted rounded-[4rem] overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Team" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section id="design-contact" className="container mx-auto px-6">
                <div className="bg-primary text-primary-foreground rounded-[3rem] p-12 md:p-24 text-center space-y-8">
                    <Mail className="mx-auto" size={48} />
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Let's Create Together</h2>
                    <p className="text-xl opacity-80 max-w-2xl mx-auto">
                        Ready to transform your brand? Our design experts are one click away.
                    </p>
                    <Button size="lg" variant="secondary" className="rounded-full h-16 px-12 text-lg">
                        Start a Project
                    </Button>
                </div>
            </section>

            {/* SIGN IN (Portal CTA) */}
            <section className="container mx-auto px-6">
                <div className="max-w-md mx-auto p-8 rounded-3xl border border-border bg-card text-center space-y-6">
                    <div className="p-4 bg-primary/10 w-fit mx-auto rounded-full text-primary">
                        <Lock size={32} />
                    </div>
                    <h3 className="text-2xl font-bold">Client Portal</h3>
                    <p className="text-muted-foreground">Access your design assets, project timelines, and invoices.</p>
                    <Button className="w-full h-12 rounded-xl" onClick={() => navigate('/login')}>Sign In to Dashboard</Button>
                </div>
            </section>
        </div>
    )
}