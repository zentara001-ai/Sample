import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { projects } from '../../data/projects'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { useNavigation } from '../../lib/NavigationContext'
import { Button } from '../ui/button'

export function ProjectPreview() {
    const { isExpanding, handleNavigation } = useNavigation()

    // Take the first 3 projects for the preview
    const featuredProjects = projects.slice(0, 3)

    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            <motion.div
                className="container mx-auto px-6"
                animate={isExpanding === 'projects' ? { scale: 5, opacity: 0 } : { scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 italic tracking-tight">
                            Selected <span className="text-primary not-italic">Works</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            A showcase of our most ambitious projects, blending technical excellence with creative vision.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Button 
                            variant="outline" 
                            size="lg" 
                            className="group rounded-full"
                            onClick={() => handleNavigation('projects', '/projects')}
                        >
                            View All Projects
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="h-full overflow-hidden border-none bg-secondary/10 hover:bg-secondary/20 transition-all duration-500 group">
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <img
                                        src={project.thumbnail}
                                        alt={project.title}
                                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                                <CardHeader className="pb-2">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-xs font-medium uppercase tracking-widest text-primary mb-1">{project.year}</p>
                                            <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                                                {project.title}
                                            </CardTitle>
                                        </div>
                                        <div className="p-2 rounded-full border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <ExternalLink size={16} />
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground line-clamp-2 mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.slice(0, 3).map(tech => (
                                            <span key={tech} className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-background border border-border">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {isExpanding === 'projects' && (
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
