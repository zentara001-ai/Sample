import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { useNavigation } from '../../lib/NavigationContext'

export function Contact() {
    const { isExpanding } = useNavigation()

    return (
        <section id="contact" className="py-32 bg-muted/20 relative overflow-hidden">
            <motion.div 
                className="container mx-auto px-6 max-w-4xl text-center relative z-10"
                animate={isExpanding === 'contact' ? { scale: 5, opacity: 0 } : { scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4">Ready to start?</h2>
                    <p className="text-lg text-muted-foreground">
                        Tell us about your project. We'll build something amazing together.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-6 text-left bg-background p-8 rounded-2xl border shadow-sm"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                            <Input id="name" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <Input id="email" type="email" placeholder="john@example.com" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                        <Textarea id="message" className="min-h-[120px]" placeholder="Tell us about your next big idea..." />
                    </div>

                    <Button size="lg" className="w-full md:w-auto">Send Message</Button>
                </motion.form>
            </motion.div>
             {isExpanding === 'contact' && (
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