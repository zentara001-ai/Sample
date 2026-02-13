import { motion } from 'framer-motion'
import { CheckCircle2, Mail, Lock } from 'lucide-react'
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

export function Design() {
    const navigate = useNavigate();

    return (
        <div className="space-y-32 pb-32 bg-gradient-to-b from-background via-secondary/10 to-background overflow-hidden">
            {/* HERO (Home) */}
            <section id="design-home" className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 relative">
                {/* Background Gradient Orbs */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="max-w-6xl w-full space-y-8"
                >
                    <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50 py-4 leading-[1.1]">
                        Design Studio
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        We sculpt digital and physical identities that resonate. At Akruti, design is not just how it looks, but how it speaks.
                    </p>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex justify-center gap-4 pt-4"
                    >
                        <Button size="lg" className="rounded-full h-14 px-8 text-lg" onClick={() => navigate('/design/projects')}>
                            View Projects
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg backdrop-blur-sm" onClick={() => navigate('/design/contact')}>
                            Get Started
                        </Button>
                    </motion.div>
                </motion.div>
            </section>

            {/* ABOUT */}
            <section id="design-about" className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div 
                        initial={fadeInUp.initial}
                        whileInView={fadeInUp.whileInView}
                        viewport={fadeInUp.viewport}
                        transition={fadeInUp.transition}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-5xl font-bold tracking-tight">About the Studio</h2>
                            <div className="h-1.5 w-24 bg-primary rounded-full" />
                        </div>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Founded on the principle that beauty and utility are inseparable, our design studio operates at the intersection of psychology and aesthetics.
                        </p>
                        <motion.ul variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: false }} className="space-y-5">
                            {['Data-driven design processes', 'Human-centric methodologies', 'Global design perspective', 'Award-winning creative team'].map((item, i) => (
                                <motion.li key={i} variants={fadeInUp} className="flex items-center gap-4 group">
                                    <div className="p-1 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <span className="text-lg font-medium">{item}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-primary/10 rounded-[4rem] blur-2xl -z-10 translate-x-4 translate-y-4" />
                        <div className="aspect-square bg-muted rounded-[4rem] overflow-hidden border border-border/50">
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Team" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CONTACT */}
            <section id="design-contact" className="container mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                    className="relative bg-primary text-primary-foreground rounded-[4rem] p-12 md:p-24 text-center space-y-10 overflow-hidden"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

                    <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={fadeInUp.transition} className="relative z-10">
                        <Mail className="mx-auto mb-8 opacity-50" size={64} />
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Let's Create Together</h2>
                        <p className="text-xl md:text-2xl opacity-80 max-w-2xl mx-auto leading-relaxed mb-10">
                            Ready to transform your brand? Our design experts are one click away from bringing your vision to reality.
                        </p>
                        <Button size="lg" variant="secondary" className="rounded-full h-16 px-12 text-xl font-bold hover:scale-105 transition-transform" onClick={() => navigate('/design/contact')}>
                            Start a Project
                        </Button>
                    </motion.div>
                </motion.div>
            </section>

            {/* SIGN IN (Portal CTA) */}
            <section className="container mx-auto px-6">
                <motion.div 
                    initial={fadeInUp.initial}
                    whileInView={fadeInUp.whileInView}
                    viewport={fadeInUp.viewport}
                    transition={fadeInUp.transition}
                    className="max-w-md mx-auto p-10 rounded-[3rem] border border-border bg-card/50 backdrop-blur-xl text-center space-y-8 shadow-2xl relative group"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3rem]" />
                    
                    <div className="p-5 bg-primary/10 w-fit mx-auto rounded-full text-primary group-hover:scale-110 transition-transform duration-500">
                        <Lock size={40} />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-3xl font-bold">Client Portal</h3>
                        <p className="text-muted-foreground text-lg">Access your design assets, project timelines, and invoices securely.</p>
                    </div>
                    <Button className="w-full h-14 rounded-2xl text-lg font-semibold shadow-lg shadow-primary/20" onClick={() => navigate('/login')}>
                        Sign In to Dashboard
                    </Button>
                </motion.div>
            </section>
        </div>
    )
}