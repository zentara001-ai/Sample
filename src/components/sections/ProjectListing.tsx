import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card'
import { projects } from '../../data/projects'
import { studioProjects } from '../../data/studioData'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getStudioContext } from '../../lib/utils'

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}

export function ProjectListing() {
    const location = useLocation();
    const studio = getStudioContext(location.pathname);
    
    // Use studio-specific projects if available, otherwise use global ones
    const displayedProjects = studio ? studioProjects[studio as keyof typeof studioProjects] : null;

    if (displayedProjects) {
        return (
            <section className="py-32 container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h1 className="text-5xl font-bold mb-6 capitalize">{studio?.replace('-', ' ')} Projects</h1>
                    <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                        A specialized collection of our {studio?.replace('-', ' ')} expertise.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {displayedProjects.map((project, i) => (
                        <motion.div key={i} variants={item}>
                            <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 group border-border/50 bg-background/50 backdrop-blur-sm flex flex-col">
                                <div className="relative aspect-video overflow-hidden">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                                        {project.year}
                                    </div>
                                </div>
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">{project.category}</p>
                                            <CardTitle className="text-2xl">{project.title}</CardTitle>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.technologies?.slice(0, 3).map(tech => (
                                            <span key={tech} className="text-xs font-medium px-2 py-1 rounded-full bg-secondary text-secondary-foreground border border-border/50">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col justify-between">
                                    <CardDescription className="text-base line-clamp-3 mb-4">
                                        {project.description}
                                    </CardDescription>
                                    <div className="pt-4 border-t border-border/40 flex items-center justify-between text-sm text-muted-foreground">
                                        <span>{project.role}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        );
    }

    return (
        <section className="py-32 container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-16 text-center"
            >
                <h1 className="text-5xl font-bold mb-6">Our Work</h1>
                <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                    A collection of projects that push the boundaries of design and technology.
                </p>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {projects.map((project) => (
                    <motion.div key={project.id} variants={item}>
                        <Link to={`/projects/${project.id}`}>
                            <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 group border-border/50 bg-background/50 backdrop-blur-sm">
                                <div className="relative aspect-video overflow-hidden">
                                    <img 
                                        src={project.thumbnail} 
                                        alt={project.title} 
                                        className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="bg-background/90 text-foreground px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            View Case Study <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.technologies.slice(0, 3).map(tech => (
                                            <span key={tech} className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        {project.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}