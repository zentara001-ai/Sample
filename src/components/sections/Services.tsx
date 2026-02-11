import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card'
import {
    Code, Smartphone, Bot, Gamepad2, Box, Palette, // Core
    Wand2, Clapperboard, AudioWaveform, MonitorPlay, ScrollText, UserSquare, BrainCircuit, // AI Creative
    Terminal, AppWindow, Video, Mic, Fingerprint, TrendingUp,
    Share2, Cloud, CheckCircle2, X, Briefcase, Zap, Server, Database, Monitor
} from 'lucide-react'
import { useNavigation } from '../../lib/NavigationContext'
import { useLocation } from 'react-router-dom'
import { getStudioContext } from '../../lib/utils'
import { studioServices } from '../../data/studioData'

// Type definition for Service Item
interface ServiceItem {
    title: string;
    icon: any;
    description?: string;
    features?: string[];
    desc?: string;
}

interface ServiceCategory {
    category: string;
    description?: string;
    items: ServiceItem[];
}

// 1. HOME PAGE LIST (Curated, High-Impact)
const highlightServices: ServiceCategory[] = [
    {
        category: "Core Engineering",
        description: "High-impact technical infrastructure and application architecture.",
        items: [
            {
                title: "SaaS Product Development",
                icon: Cloud,
                description: "End-to-end building of scalable Software-as-a-Service platforms.",
                features: ["Multi-tenant Architecture", "Subscription & Billing Systems", "Cloud Infrastructure (AWS/GCP)", "API-First Design", "Real-time Analytics Dashboards"]
            },
            {
                title: "AI Agents & Systems",
                icon: Bot,
                description: "Custom LLMs, RAG pipelines, and automation bots.",
                features: ["Custom LLM Fine-tuning", "RAG Pipeline Implementation", "Autonomous Task Agents", "Natural Language Interfaces", "Process Automation"]
            },
            {
                title: "Cross-Platform Apps",
                icon: Smartphone,
                description: "Unified Flutter & React Native applications.",
                features: ["Single Codebase efficiency", "Native Performance", "iOS & Android Deployment", "Offline Capabilities", "Hardware Integration"]
            },
            {
                title: "Immersive Web & 3D",
                icon: Box,
                description: "WebGL, Three.js, and complex React architectures.",
                features: ["3D Product Configurators", "WebGL Experiences", "Interactive Storytelling", "Performance Optimization", "VR/AR Web Integration"]
            },
            {
                title: "Full-Stack Architecture",
                icon: Code,
                description: "Scalable Python/Node.js backends with modern frontends.",
                features: ["Microservices Architecture", "Database Design (SQL/NoSQL)", "Secure API Development", "CI/CD Pipelines", "Serverless Solutions"]
            },
            {
                title: "Digital Brand Transformation",
                icon: Palette,
                description: "Strategic Rebranding and High-end UI/UX Design.",
                features: ["Brand Strategy & Identity", "User Journey Mapping", "High-Fidelity Prototyping", "Design Systems", "Usability Testing"]
            },
        ]
    }
]

const allServices: ServiceCategory[] = [
    {
        category: "Full capabilities",
        items: highlightServices[0].items
    }
]

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

export function Services() {
    const { isExpanding } = useNavigation()
    const location = useLocation()
    const [selectedService, setSelectedService] = useState<ServiceItem | null>(null)
    const studio = getStudioContext(location.pathname);

    const isHomePage = location.pathname === '/'
    const studioData = studio ? studioServices[studio as keyof typeof studioServices] : null;

    return (
        <section id="work" className="py-32 bg-secondary/20 relative overflow-hidden min-h-screen">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 capitalize">
                        {studio ? `${studio.replace('-', ' ')} Expertise` : "Our Expertise"}
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        {studio 
                            ? `Comprehensive capabilities in ${studio.replace('-', ' ')} delivery and execution.` 
                            : "Merging elite engineering with the bleeding edge of Generative AI."}
                    </p>
                </motion.div>

                {studioData ? (
                    <motion.div 
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {studioData.map((service, index) => (
                            <motion.div key={index} variants={item}>
                                <Card 
                                    className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:bg-background/80 transition-all hover:-translate-y-1 cursor-pointer group"
                                    onClick={() => setSelectedService(service)}
                                >
                                    <CardHeader>
                                        <div className="p-3 bg-primary/10 w-fit rounded-xl text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            <service.icon size={24} />
                                        </div>
                                        <CardTitle className="text-lg">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>{(service as any).desc || (service as any).description}</CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <div className="space-y-20">
                        {highlightServices.map((category, catIndex) => (
                            <div key={catIndex}>
                                <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                    {category.items.map((service, index) => (
                                        <motion.div key={index} variants={item}>
                                            <Card className="h-full hover:shadow-xl transition-all cursor-pointer" onClick={() => setSelectedService(service)}>
                                                <CardHeader className="flex flex-row items-center gap-4">
                                                    <service.icon className="w-6 h-6 text-primary" />
                                                    <CardTitle>{service.title}</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <CardDescription>{service.description}</CardDescription>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedService && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedService(null)} className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
                        <motion.div layoutId={`service-${selectedService.title}`} className="relative w-full max-w-lg bg-background border border-border rounded-2xl shadow-2xl p-8">
                            <button onClick={() => setSelectedService(null)} className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-full"><X size={20} /></button>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-primary/10 text-primary"><selectedService.icon size={32} /></div>
                                <h3 className="text-2xl font-bold">{selectedService.title}</h3>
                            </div>
                            <p className="text-muted-foreground mb-6">{(selectedService as any).desc || (selectedService as any).description}</p>
                            {selectedService.features && (
                                <div className="space-y-3">
                                    <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Key Features</h4>
                                    {selectedService.features.map((f, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm"><CheckCircle2 className="text-primary" size={16} />{f}</div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    )
}