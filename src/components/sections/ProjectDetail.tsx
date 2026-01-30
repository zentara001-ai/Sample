import { useParams, Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { projects } from '../../data/projects'
import { Button } from '../ui/button'
import { ArrowLeft, ArrowRight, Calendar, Code, User } from 'lucide-react'
import { useRef } from 'react'

export function ProjectDetail() {
    const { id } = useParams<{ id: string }>()
    const project = projects.find(p => p.id === id)
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    if (!project) {
        return (
            <div className="h-screen flex flex-col items-center justify-center gap-4">
                <h1 className="text-4xl font-bold">Project Not Found</h1>
                <Link to="/projects">
                    <Button variant="outline"><ArrowLeft className="mr-2" size={16} /> Back to Projects</Button>
                </Link>
            </div>
        )
    }

    return (
        <div ref={containerRef} className="min-h-screen">
            {/* Parallax Hero */}
            <div className="relative h-[70vh] w-full overflow-hidden flex items-end">
                <motion.div 
                    style={{ y, opacity }}
                    className="absolute inset-0 z-0"
                >
                    <img 
                        src={project.thumbnail} 
                        alt={project.title} 
                        className="w-full h-full object-cover brightness-[0.6]"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
                
                <div className="container mx-auto px-6 pb-20 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Link to="/projects" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group">
                            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} /> Back to Projects
                        </Link>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">{project.title}</h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-2xl">{project.description}</p>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold mb-6">Overview</h2>
                            <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                                {project.longDescription.split('\n').map((line, i) => {
                                    const trimmed = line.trim();
                                    if (trimmed.startsWith('•')) {
                                        return (
                                            <div key={i} className="flex items-start gap-3 ml-2">
                                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                                <span>{trimmed.substring(1).trim()}</span>
                                            </div>
                                        )
                                    }
                                    if (trimmed === '') return <br key={i} />;
                                    return <p key={i}>{line}</p>
                                })}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <h2 className="text-3xl font-bold mb-6">Visuals</h2>
                            <div className="grid gap-6">
                                {project.images.map((img, index) => (
                                    <img 
                                        key={index}
                                        src={img} 
                                        alt={`${project.title} screenshot ${index + 1}`}
                                        className="rounded-xl w-full shadow-lg border border-border/50"
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-8"
                    >
                        <div className="p-8 bg-muted/30 rounded-2xl border border-border space-y-6">
                            <h3 className="text-xl font-bold">Project Details</h3>
                            
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <User className="w-5 h-5 text-primary mt-1" />
                                    <div>
                                        <p className="font-medium">Role</p>
                                        <p className="text-muted-foreground text-sm">{project.role}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-4">
                                    <Calendar className="w-5 h-5 text-primary mt-1" />
                                    <div>
                                        <p className="font-medium">Year</p>
                                        <p className="text-muted-foreground text-sm">{project.year}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Code className="w-5 h-5 text-primary mt-1" />
                                    <div>
                                        <p className="font-medium">Stack</p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {project.technologies.map(tech => (
                                                <span key={tech} className="text-xs font-medium px-2 py-1 rounded-full bg-background border border-border">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Button className="w-full mt-6 group">
                                Visit Live Site <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
