import { motion } from 'framer-motion'
import { Home as HomeIcon, Compass, Wind, Lightbulb, CheckCircle2, MapPin, Lock, Armchair, Sun, Monitor, Mic } from 'lucide-react'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'

export function Interior() {
    const navigate = useNavigate();

    return (
        <div className="space-y-32 pb-32">
            {/* HERO (Home) */}
            <section id="interior-home" className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80" alt="Interior Background" className="w-full h-full object-cover" />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10 max-w-4xl space-y-8"
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">Interior Design</h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                        Elevating the human experience through architectural harmony. We transform spaces into living art.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="rounded-full" onClick={() => navigate('/interior/projects')}>Explore Portfolio</Button>
                        <Button size="lg" variant="outline" className="rounded-full backdrop-blur-md" onClick={() => navigate('/contact')}>Request a Quote</Button>
                    </div>
                </motion.div>
            </section>

            {/* ABOUT */}
            <section id="interior-about" className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold">Crafting Atmosphere</h2>
                        <p className="text-lg text-muted-foreground">
                            Our interior design division focuses on the emotional impact of space. We believe that every room should tell a story and every corner should inspire comfort.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: '150+', sub: 'Projects Completed' },
                                { label: '25+', sub: 'Global Awards' },
                                { label: '10+', sub: 'Countries' },
                                { label: '100%', sub: 'Satisfaction' }
                            ].map((stat, i) => (
                                <div key={i} className="p-4 bg-secondary/30 rounded-2xl">
                                    <div className="text-2xl font-bold">{stat.label}</div>
                                    <div className="text-xs text-muted-foreground uppercase">{stat.sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                         <div className="space-y-4 pt-8">
                            <img src="https://images.unsplash.com/photo-1616486341351-79b5b27497d3?auto=format&fit=crop&w=400&q=80" className="rounded-2xl" />
                            <img src="https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&w=400&q=80" className="rounded-2xl" />
                         </div>
                         <div className="space-y-4">
                            <img src="https://images.unsplash.com/photo-1615529182906-134d3abc19f1?auto=format&fit=crop&w=400&q=80" className="rounded-2xl" />
                            <img src="https://images.unsplash.com/photo-1615873968403-89e068628265?auto=format&fit=crop&w=400&q=80" className="rounded-2xl" />
                         </div>
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section id="interior-contact" className="container mx-auto px-6">
                <div className="relative rounded-[3rem] overflow-hidden bg-muted p-12 md:p-24">
                     <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-bold">Visit Our Showroom</h2>
                            <p className="text-muted-foreground text-lg">
                                Experience our design first-hand. Schedule a private viewing of our latest interior collections.
                            </p>
                            <div className="flex items-center gap-4">
                                <MapPin className="text-primary" />
                                <span>123 Design District, New York, NY</span>
                            </div>
                            <Button size="lg" className="rounded-full">Schedule Visit</Button>
                        </div>
                        <div className="aspect-video bg-background/50 rounded-2xl backdrop-blur-md border border-white/10 p-8 flex items-center justify-center">
                            <span className="text-muted-foreground italic">Interactive Map Placeholder</span>
                        </div>
                     </div>
                </div>
            </section>

            {/* SIGN IN (Portal CTA) */}
            <section className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto text-center space-y-8 p-12 rounded-[2rem] bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
                    <Armchair className="mx-auto text-primary" size={48} />
                    <h3 className="text-3xl font-bold">Exclusive Collector Access</h3>
                    <p className="text-muted-foreground">Sign in to access our private catalog of bespoke furniture and view your custom project renders in 4K.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="rounded-xl h-12 px-8" onClick={() => navigate('/login')}>Sign In</Button>
                        <Button variant="outline" className="rounded-xl h-12 px-8">Request Access</Button>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                        <Lock size={12} />
                        <span>256-bit Encrypted SSL Connection</span>
                    </div>
                </div>
            </section>
        </div>
    )
}