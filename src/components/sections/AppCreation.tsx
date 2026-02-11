import { motion } from 'framer-motion'
import { Smartphone, Code, Server, Globe, CheckCircle2, Terminal, Lock, Cpu, Settings } from 'lucide-react'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'

export function AppCreation() {
    const navigate = useNavigate();

    return (
        <div className="space-y-32 pb-32">
            {/* HERO (Home) */}
            <section id="app-home" className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl space-y-8"
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">App Creation</h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                        Turning complex ideas into seamless digital tools. We build the engines that power modern business.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="rounded-full" onClick={() => navigate('/app-creation/projects')}>View Deployed Apps</Button>
                        <Button size="lg" variant="outline" className="rounded-full" onClick={() => navigate('/app-creation/work')}>View Services</Button>
                    </div>
                </motion.div>
            </section>

            {/* ABOUT */}
            <section id="app-about" className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="aspect-video bg-muted rounded-[3rem] overflow-hidden order-last md:order-first">
                         <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" alt="Code" className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold">The Engineering Ethos</h2>
                        <p className="text-lg text-muted-foreground">
                            We don't just write code; we solve problems. Our engineering team prioritizes performance, security, and scalability above all else.
                        </p>
                        <ul className="space-y-4">
                            {['Agile development cycles', 'Rigorous automated testing', 'Clean, documented codebases', '24/7 technical support'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-primary" size={20} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section id="app-contact" className="container mx-auto px-6 text-center space-y-8">
                <h2 className="text-5xl font-bold">Ready to Scale?</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    From MVP to Enterprise, we have the technical muscle to bring your digital vision to life.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <Button size="lg" className="rounded-full h-16 px-12" onClick={() => navigate('/contact')}>Book a Technical Call</Button>
                    <Button size="lg" variant="outline" className="rounded-full h-16 px-12">View Documentation</Button>
                </div>
            </section>

             {/* SIGN IN (Portal CTA) */}
            <section className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-card border border-border rounded-[3rem] p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-primary">
                            <Lock size={24} />
                            <span className="font-bold uppercase tracking-widest text-sm">Secure Portal</span>
                        </div>
                        <h3 className="text-3xl font-bold">Developer Dashboard</h3>
                        <p className="text-muted-foreground">Monitor build progress, API health, and deployment logs.</p>
                    </div>
                    <Button className="h-14 px-8 rounded-2xl whitespace-nowrap" onClick={() => navigate('/login')}>Sign In to Console</Button>
                </div>
            </section>
        </div>
    )
}