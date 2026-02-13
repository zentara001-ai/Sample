import { motion } from 'framer-motion'
import { CheckCircle2, Terminal, Lock, Cpu } from 'lucide-react'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.3 },
    transition: { duration: 0.8 }
}

const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: false, amount: 0.2 }
}

export function AppCreation() {
    const navigate = useNavigate();

    return (
        <div className="space-y-32 pb-32 bg-gradient-to-b from-background via-emerald-500/5 to-background overflow-hidden">
            {/* HERO (Home) */}
            <section id="app-home" className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 relative">
                {/* Tech background pattern */}
                <div className="absolute inset-0 opacity-[0.03] -z-10" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] -z-10 animate-pulse" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-6xl w-full space-y-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm font-bold uppercase tracking-widest mx-auto">
                        <Terminal size={16} /> Next-Gen Engineering
                    </div>
                    <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50 py-4 leading-[1.1]">
                        App Creation
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Turning complex ideas into seamless digital tools. We build the high-performance engines that power modern digital business.
                    </p>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
                    >
                        <Button size="lg" className="rounded-full h-14 px-10 text-lg bg-emerald-600 hover:bg-emerald-700" onClick={() => navigate('/app-creation/projects')}>
                            View Deployed Apps
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full h-14 px-10 text-lg border-emerald-500/20 hover:bg-emerald-500/5" onClick={() => navigate('/app-creation/work')}>
                            View Services
                        </Button>
                    </motion.div>
                </motion.div>
            </section>

            {/* ABOUT */}
            <section id="app-about" className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-emerald-500/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                        <div className="aspect-video bg-muted rounded-[3rem] overflow-hidden border border-emerald-500/10 shadow-2xl">
                             <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" alt="Code" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" />
                        </div>
                        {/* Floating Tech Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-background border border-border p-6 rounded-3xl shadow-xl animate-bounce shadow-emerald-500/10 hidden lg:block">
                            <Cpu className="text-emerald-500 mb-2" size={32} />
                            <div className="font-bold">Edge AI</div>
                            <div className="text-xs text-muted-foreground">Ready for 2025</div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={fadeInUp.initial}
                        whileInView={fadeInUp.whileInView}
                        viewport={fadeInUp.viewport}
                        transition={fadeInUp.transition}
                        className="space-y-8"
                    >
                        <h2 className="text-5xl font-bold tracking-tight">The Engineering Ethos</h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            We don't just write code; we solve high-stakes business problems. Our engineering team prioritizes performance, security, and scalability above all else.
                        </p>
                        <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: false }} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { title: 'Agile Cycles', desc: 'Rapid, iterative delivery.' },
                                { title: 'Auto-Testing', desc: '99.9% fault tolerance.' },
                                { title: 'Clean Code', desc: 'Scalable architecture.' },
                                { title: '24/7 Support', desc: 'Always operational.' }
                            ].map((item, i) => (
                                <motion.div key={i} initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} transition={fadeInUp.transition} viewport={fadeInUp.viewport} className="p-4 rounded-2xl bg-secondary/30 border border-border/50">
                                    <CheckCircle2 className="text-emerald-500 mb-2" size={20} />
                                    <div className="font-bold">{item.title}</div>
                                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* CONTACT */}
            <section id="app-contact" className="container mx-auto px-6 text-center space-y-12">
                <motion.div 
                    initial={fadeInUp.initial}
                    whileInView={fadeInUp.whileInView}
                    viewport={fadeInUp.viewport}
                    transition={fadeInUp.transition}
                    className="max-w-3xl mx-auto space-y-6"
                >
                    <h2 className="text-6xl font-bold tracking-tighter">Ready to Scale?</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        From MVP to Enterprise, we have the technical muscle to bring your digital vision to life.
                    </p>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="flex flex-col md:flex-row justify-center gap-6"
                >
                    <Button size="lg" className="rounded-full h-16 px-12 text-xl font-bold shadow-xl shadow-emerald-500/20 bg-emerald-600 hover:bg-emerald-700" onClick={() => navigate('/app-creation/contact')}>
                        Book a Technical Call
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full h-16 px-12 text-xl font-bold border-emerald-500/20 hover:bg-emerald-500/5">
                        View Documentation
                    </Button>
                </motion.div>
            </section>

             {/* SIGN IN (Portal CTA) */}
            <section className="container mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="max-w-5xl mx-auto bg-card border border-border rounded-[4rem] p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden group shadow-2xl"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    
                    <div className="space-y-6 relative z-10 text-center lg:text-left">
                        <div className="flex items-center gap-3 text-emerald-500 justify-center lg:justify-start">
                            <Lock size={24} />
                            <span className="font-bold uppercase tracking-widest text-sm">Secure Developer Portal</span>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Developer Dashboard</h3>
                        <p className="text-muted-foreground text-xl max-w-xl">
                            Monitor build progress, API health, deployment logs, and infrastructure metrics in real-time.
                        </p>
                    </div>
                    <Button className="h-16 px-12 rounded-2xl text-xl font-bold shadow-lg shadow-emerald-500/20 bg-emerald-600 hover:bg-emerald-700 relative z-10 whitespace-nowrap" onClick={() => navigate('/login')}>
                        Sign In to Console
                    </Button>
                </motion.div>
            </section>
        </div>
    )
}