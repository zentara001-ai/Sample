import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { useNavigation } from '../../lib/NavigationContext'
import { Link } from 'react-router-dom'

export function About() {
    const { isExpanding } = useNavigation()

    return (
        <section id="about" className="py-32 overflow-hidden relative">
            <motion.div 
                className="container mx-auto px-6"
                animate={isExpanding === 'about' ? { scale: 5, opacity: 0 } : { scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-3 scale-105" />
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                                alt="Team working"
                                className="relative rounded-2xl shadow-2xl object-cover aspect-video"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1"
                    >
                        <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            We are a passionate team of designers, developers, and strategists dedicated to transforming ideas into digital reality. With years of experience and a finger on the pulse of modern technology, we help businesses navigate the digital landscape with confidence.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8">
                            Our philosophy is simple: create beautiful, functional, and user-centric solutions that drive real results. We believe in transparency, collaboration, and pushing the boundaries of what's possible.
                        </p>
                        <div className="flex gap-4">
                            <Link to="/story">
                                <Button size="lg" variant="default">Our Story</Button>
                            </Link>
                            <Button size="lg" variant="outline">Meet the Team</Button>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
             {isExpanding === 'about' && (
                <motion.div
                    className="absolute inset-0 bg-background z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                />
            )}
        </section>
    )
}