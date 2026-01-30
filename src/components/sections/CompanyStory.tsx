import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowLeft, Target, Rocket, History, Lightbulb } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { useRef } from 'react'

export function CompanyStory() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    return (
        <div ref={containerRef} className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <motion.div 
                    style={{ y, opacity }}
                    className="absolute inset-0 z-0"
                >
                     <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background z-10" />
                     <img 
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80"
                        alt="Team collaboration"
                        className="w-full h-full object-cover opacity-50"
                     />
                </motion.div>

                <div className="relative z-20 text-center container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">The Journey</h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                            From humble beginnings to digital excellence.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content Sections */}
            <div className="container mx-auto px-6 py-20 max-w-5xl">
                <Link to="/about" className="inline-flex items-center text-primary hover:text-primary/80 mb-12 transition-colors group">
                    <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} /> Back to About
                </Link>

                <motion.div 
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-24"
                >
                    {/* History */}
                    <motion.section variants={item} className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                    <History size={32} />
                                </div>
                                <h2 className="text-3xl font-bold">Our History</h2>
                            </div>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Founded in 2020, Akruti Studio started as a trio of passionate developers working out of a shared living room. We were united by a single belief: that the web could be more than just functional—it could be an experience.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Over the years, we've grown from building simple landing pages to architecting complex digital ecosystems for global brands. Despite our growth, our core philosophy remains unchanged: craft with purpose, build with precision.
                            </p>
                        </div>
                        <div className="order-1 md:order-2 relative aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                             <img 
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                                alt="Early days" 
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </motion.section>

                    {/* Future Aims */}
                    <motion.section variants={item} className="grid md:grid-cols-2 gap-12 items-center">
                         <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500">
                             <img 
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" 
                                alt="Future vision" 
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                    <Rocket size={32} />
                                </div>
                                <h2 className="text-3xl font-bold">Future Aims</h2>
                            </div>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                We are looking ahead to the next frontier of the web. Our R&D team is actively exploring the integration of AI-driven interfaces, WebGL interactivity, and spatial computing.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Our aim is not just to keep up with trends, but to set them. We envision a web that is more immersive, intuitive, and accessible than ever before.
                            </p>
                        </div>
                    </motion.section>

                    {/* Goals */}
                    <motion.section variants={item}>
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-flex p-3 bg-primary/10 rounded-xl text-primary mb-6">
                                <Target size={32} />
                            </div>
                            <h2 className="text-3xl font-bold mb-6">Our Strategic Goals</h2>
                            <p className="text-lg text-muted-foreground">
                                To measure our success, we have set concrete milestones for the next 5 years.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Global Reach",
                                    desc: "Expanding our physical presence to 3 new continents to better serve our international clients.",
                                    icon: Lightbulb
                                },
                                {
                                    title: "Sustainable Tech",
                                    desc: "Committing to carbon-neutral digital footprints for all our hosted projects by 2026.",
                                    icon: LeafIcon
                                },
                                {
                                    title: "Community Growth",
                                    desc: "Launching 'Zen Academy' to mentor 10,000 aspiring developers from underrepresented backgrounds.",
                                    icon: UserGroupIcon
                                }
                            ].map((goal, idx) => (
                                <div key={idx} className="bg-muted/30 p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors">
                                    <goal.icon className="w-10 h-10 text-primary mb-4" />
                                    <h3 className="text-xl font-bold mb-3">{goal.title}</h3>
                                    <p className="text-muted-foreground">{goal.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Call to Action */}
                    <motion.section variants={item} className="text-center py-12 bg-primary/5 rounded-3xl border border-primary/10">
                        <h2 className="text-3xl font-bold mb-6">Be Part of Our Story</h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Whether you're a potential client or a future team member, we'd love to hear from you.
                        </p>
                        <Link to="/contact">
                            <Button size="lg">Contact Us</Button>
                        </Link>
                    </motion.section>
                </motion.div>
            </div>
        </div>
    )
}

// Simple Icon components for the grid to avoid import errors if lucide-react doesn't have them all
function LeafIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.77 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
    )
}

function UserGroupIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}
