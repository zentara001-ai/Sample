import { motion } from 'framer-motion'
import { MapPin, Lock, Armchair } from 'lucide-react'
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

export function Interior() {
    const navigate = useNavigate();

    return (
        <div className="space-y-32 pb-32 bg-gradient-to-b from-background via-orange-500/5 to-background overflow-hidden">
            {/* HERO (Home) */}
            <section id="interior-home" className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative">
                {/* Background Full Cover with Parallax-like Zoom */}
                <motion.div 
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.15 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                >
                    <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80" alt="Interior Background" className="w-full h-full object-cover" />
                </motion.div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[160px] -z-10" />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative z-10 max-w-6xl w-full space-y-10"
                >
                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.9] bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/40 py-4 leading-[1.1]">
                        Interior<br/>Design
                    </h1>
                    <p className="text-xl md:text-3xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed italic">
                        Elevating the human experience through architectural harmony. We transform physical spaces into living, breathing works of art.
                    </p>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="flex flex-col sm:flex-row justify-center gap-6 pt-6"
                    >
                        <Button size="lg" className="rounded-full h-16 px-12 text-xl font-light tracking-wide bg-orange-950 text-orange-50 hover:bg-orange-900 shadow-2xl" onClick={() => navigate('/interior/projects')}>
                            Explore Portfolio
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full h-16 px-12 text-xl font-light tracking-wide backdrop-blur-md border-orange-500/20 hover:bg-orange-500/5" onClick={() => navigate('/interior/contact')}>
                            Request a Quote
                        </Button>
                    </motion.div>
                </motion.div>
            </section>

            {/* ABOUT */}
            <section id="interior-about" className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div 
                        initial={fadeInUp.initial}
                        whileInView={fadeInUp.whileInView}
                        viewport={fadeInUp.viewport}
                        transition={fadeInUp.transition}
                        className="space-y-10 order-2 lg:order-1"
                    >
                        <div className="space-y-4">
                            <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-sm">Our Philosophy</span>
                            <h2 className="text-6xl font-bold tracking-tight">Crafting Atmosphere</h2>
                        </div>
                        <p className="text-2xl text-muted-foreground font-light leading-relaxed">
                            Our interior design division focuses on the emotional impact of space. We believe that every room should tell a story and every corner should inspire comfort.
                        </p>
                        <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: false }} className="grid grid-cols-2 gap-8">
                            {[
                                { label: '150+', sub: 'Legacy Projects' },
                                { label: '25+', sub: 'Design Awards' },
                                { label: '10+', sub: 'Global Studios' },
                                { label: '100%', sub: 'Pure Excellence' }
                            ].map((stat, i) => (
                                <motion.div key={i} initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} transition={fadeInUp.transition} viewport={fadeInUp.viewport} className="p-6 border-l border-orange-500/20 bg-orange-500/5 hover:bg-orange-500/10 transition-colors">
                                    <div className="text-4xl font-bold mb-1">{stat.label}</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">{stat.sub}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-6 order-1 lg:order-2">
                         <motion.div 
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="space-y-6 pt-12"
                        >
                            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1616486341351-79b5b27497d3?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                            </div>
                         </motion.div>
                         <motion.div 
                            initial={{ opacity: 0, y: -100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1 }}
                            className="space-y-6"
                        >
                            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1615529182906-134d3abc19f1?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1615873968403-89e068628265?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                            </div>
                         </motion.div>
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section id="interior-contact" className="container mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                    className="relative rounded-[4rem] overflow-hidden bg-orange-950 text-orange-50 p-12 md:p-24 shadow-2xl"
                >
                     <div className="absolute inset-0 opacity-20">
                        <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80" className="w-full h-full object-cover" />
                     </div>
                     
                     <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="text-6xl font-bold tracking-tighter">Visit Our Showroom</h2>
                            <p className="text-orange-100/70 text-2xl font-light leading-relaxed">
                                Experience our design first-hand. Schedule a private viewing of our latest bespoke interior collections.
                            </p>
                            <div className="flex items-center gap-4 text-orange-200">
                                <div className="p-3 rounded-full bg-orange-500/20"><MapPin size={24} /></div>
                                <span className="text-lg">123 Design District, New York, NY</span>
                            </div>
                            <Button size="lg" className="rounded-full h-16 px-12 text-xl font-light bg-orange-50 text-orange-950 hover:bg-orange-100">
                                Schedule Private Visit
                            </Button>
                        </div>
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="aspect-video bg-black/40 rounded-[3rem] backdrop-blur-2xl border border-white/10 p-12 flex flex-col items-center justify-center text-center space-y-4"
                        >
                            <div className="w-20 h-20 rounded-full border-2 border-orange-500/50 flex items-center justify-center animate-pulse">
                                <div className="w-3 h-3 rounded-full bg-orange-500" />
                            </div>
                            <span className="text-orange-200 font-bold uppercase tracking-widest text-sm">Live GPS Location</span>
                            <p className="text-orange-100/50 italic">Interactive Map Terminal Active</p>
                        </motion.div>
                     </div>
                </motion.div>
            </section>

            {/* SIGN IN (Portal CTA) */}
            <section className="container mx-auto px-6 pb-20">
                <motion.div 
                    initial={fadeInUp.initial}
                    whileInView={fadeInUp.whileInView}
                    viewport={fadeInUp.viewport}
                    transition={fadeInUp.transition}
                    className="max-w-3xl mx-auto text-center space-y-10 p-16 rounded-[3rem] bg-card border border-border shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent" />
                    
                    <div className="space-y-4">
                        <Armchair className="mx-auto text-orange-500" size={64} />
                        <h3 className="text-4xl font-bold tracking-tight">Exclusive Collector Access</h3>
                        <p className="text-muted-foreground text-xl max-w-xl mx-auto leading-relaxed">
                            Sign in to access our private catalog of bespoke furniture and view your custom project renders in high-fidelity 4K.
                        </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button className="rounded-2xl h-16 px-12 text-xl font-bold shadow-xl shadow-orange-500/10 bg-orange-950 text-orange-50 hover:bg-orange-900" onClick={() => navigate('/login')}>
                            Sign In
                        </Button>
                        <Button variant="outline" className="rounded-2xl h-16 px-12 text-xl font-bold border-border hover:bg-secondary/50">
                            Request Access
                        </Button>
                    </div>
                    
                    <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground font-medium pt-4">
                        <Lock size={16} className="text-orange-500" />
                        <span>High-Security Vault Connection</span>
                    </div>
                </motion.div>
            </section>
        </div>
    )
}