import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '../ui/button'

export function Hero() {
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 500], [0, 200])
    const opacity = useTransform(scrollY, [0, 300], [1, 0])

    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 animate-pulse" />
            </div>

            <motion.div
                className="relative z-10 text-center space-y-8 p-4"
                style={{ y, opacity }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-6xl md:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50"
                >
                    Akruti Studio<span className="text-primary">.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
                >
                    We craft digital experiences that defy gravity.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex justify-center gap-4"
                >
                    <Button size="lg" className="rounded-full text-lg h-14 px-8">
                        View Our Work
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full text-lg h-14 px-8">
                        Contact Us
                    </Button>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <div className="w-1 h-12 rounded-full bg-border relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-primary animate-accordion-down" />
                </div>
            </motion.div>
        </section>
    )
}
