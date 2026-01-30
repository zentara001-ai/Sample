import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card'
import { 
    Code, Smartphone, Bot, Gamepad2, Box, Palette, // Core
    Wand2, Clapperboard, AudioWaveform, MonitorPlay, ScrollText, UserSquare, BrainCircuit, // AI Creative
    Terminal, AppWindow, Video, Mic, Fingerprint, TrendingUp,
    Share2, Cloud, CheckCircle2, X
} from 'lucide-react'
import { useNavigation } from '../../lib/NavigationContext'
import { useLocation } from 'react-router-dom'

// Type definition for Service Item
interface ServiceItem {
    title: string;
    icon: any;
    description: string;
    features: string[];
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
    },
    {
        category: "AI Creative Studio",
        description: "Next-generation content creation powered by Generative AI.",
        items: [
            { 
                title: "Social Media Management", 
                icon: Share2, 
                description: "AI-driven content strategy, creation, and publishing.",
                features: [
                    "Content Calendar & Scheduling",
                    "AI Content Generation (Copy & Headlines)",
                    "Video Creation (Short-form Clips)",
                    "SEO Optimization & Hashtags",
                    "Multi-Platform Publishing",
                    "Performance Analytics & ROI",
                    "Client Approval Workflow"
                ]
            },
            { 
                title: "Algorithmic Video", 
                icon: Clapperboard, 
                description: "AI-optimized editing for high-retention content.",
                features: ["Automated Editing Workflows", "Trend Analysis Integration", "Dynamic Captions", "Pacing Optimization", "Multi-format Export"]
            },
            { 
                title: "Generative AI Visuals", 
                icon: Wand2, 
                description: "Bespoke marketing assets via Midjourney & Stable Diffusion.",
                features: ["Custom Model Training", "Consistent Character Generation", "Product Visualization", "Concept Art", "Marketing Assets"]
            },
            { 
                title: "Sonic Branding", 
                icon: AudioWaveform, 
                description: "AI voiceovers, soundscapes, and audio logos.",
                features: ["Custom Voice Cloning", "Sound Logo Creation", "Adaptive Soundscapes", "Podcast Production", "Audio Mixing"]
            },
        ]
    }
]

// 2. WORK PAGE LIST (Comprehensive, Granular)
const allServices: ServiceCategory[] = [
    {
        category: "Software Engineering",
        items: [
            { title: "SaaS Product Development", icon: Cloud, description: "Scalable B2B/B2C platforms.", features: ["Multi-tenancy", "Stripe Integration", "Auth Systems", "Dashboard Analytics"] },
            { title: "Web Development", icon: Code, description: "Robust full-stack websites.", features: ["Responsive Design", "SEO Optimized", "CMS Integration", "E-commerce"] },
            { title: "Web App Development", icon: AppWindow, description: "Complex browser applications.", features: ["PWA Support", "Real-time Collaboration", "Data Visualization", "Offline Mode"] },
            { title: "Python Development", icon: Terminal, description: "Backend systems & automation.", features: ["Django/FastAPI", "Data Processing", "Scripting", "API Development"] },
            { title: "Flutter Development", icon: Smartphone, description: "High-performance cross-platform apps.", features: ["iOS/Android/Web", "Custom Widgets", "Native Features", "State Management"] },
            { title: "React Native Dev", icon: Smartphone, description: "Native mobile experiences.", features: ["OTA Updates", "Native Modules", "Third-party Integrations", "Performance Tuning"] },
            { title: "Android App Design", icon: Smartphone, description: "Native Android apps.", features: ["Material Design 3", "Kotlin", "Jetpack Compose", "Play Store Optimization"] },
        ]
    },
    {
        category: "AI & Innovation",
        items: [
            { title: "AI Agents Development", icon: Bot, description: "Autonomous task-runners.", features: ["Task Planning", "Tool Use", "Memory Systems", "Multi-Agent Orchestration"] },
            { title: "AI Agents Creation", icon: BrainCircuit, description: "Fine-tuning models.", features: ["Dataset Preparation", "LoRA Training", "Model Evaluation", "Deployment"] },
            { title: "Game Development", icon: Gamepad2, description: "Unity/Unreal & WebGL.", features: ["2D/3D Mechanics", "Physics Engines", "Multiplayer Netcode", "Level Design"] },
            { title: "3D Model Development", icon: Box, description: "Assets for web & AR.", features: ["Low/High Poly Modeling", "Texturing", "Rigging", "Animation"] },
        ]
    },
    {
        category: "Growth & Management",
        items: [
             { 
                title: "Social Media Management", 
                icon: Share2, 
                description: "End-to-end social growth.",
                features: ["Content Calendar", "AI Copywriting", "Video Generation", "SEO & Hashtags", "Auto-Publishing", "Analytics Reports", "Approval Workflow"]
            },
            { title: "SEO & Marketing", icon: TrendingUp, description: "Organic growth.", features: ["Technical SEO", "Content Strategy", "Backlink Building", "Local SEO"] },
            { title: "Brand Identity", icon: Fingerprint, description: "Logos & positioning.", features: ["Logo Design", "Brand Guidelines", "Tone of Voice", "Visual Language"] },
        ]
    },
    {
        category: "Creative Studio",
        items: [
            { title: "Video Editing", icon: Video, description: "Professional post-production.", features: ["Color Grading", "Sound Design", "Motion Graphics", "Transcoding"] },
            { title: "Content Creation", icon: Mic, description: "Strategy & production.", features: ["Scriptwriting", "Storyboarding", "Filming", "Post-production"] },
            { title: "Algorithmic Video", icon: Clapperboard, description: "Data-driven video.", features: ["Template Automation", "A/B Testing", "Programmatic Video", "Batch Processing"] },
            { title: "GenAI Visuals", icon: Wand2, description: "AI art & concepts.", features: ["Image Synthesis", "In-painting", "Style Transfer", "Upscaling"] },
            { title: "Sonic Branding", icon: AudioWaveform, description: "Audio identity.", features: ["Jingles", "UI Sounds", "Theme Music", "Voiceovers"] },
            { title: "Virtual Production", icon: MonitorPlay, description: "Next-gen VFX.", features: ["Green Screen", "Unreal Engine", "Compositing", "Camera Tracking"] },
            { title: "Interactive Scrollytelling", icon: ScrollText, description: "Immersive reading.", features: ["Scroll Triggers", "Lottie Animation", "Data Storytelling", "SVG Animation"] },
            { title: "Real-time AI Avatars", icon: UserSquare, description: "Digital humans.", features: ["Lip Sync", "Facial Animation", "TTS Integration", "Interactive Streaming"] },
        ]
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
    
    const isHomePage = location.pathname === '/'
    const displayedServices = isHomePage ? highlightServices : allServices

    return (
        <section id="work" className="py-32 bg-secondary/20 relative overflow-hidden">
            <motion.div 
                className="container mx-auto px-6 relative z-10"
                animate={isExpanding === 'work' ? { scale: 5, opacity: 0 } : { scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        {isHomePage ? "Our Expertise" : "Full Service Capabilities"}
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        {isHomePage 
                            ? "Merging elite engineering with the bleeding edge of Generative AI."
                            : "A comprehensive catalog of our technical and creative services."}
                    </p>
                </motion.div>

                <div className="space-y-20">
                    {displayedServices.map((category, catIndex) => (
                        <div key={catIndex}>
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="mb-8"
                            >
                                <h3 className="text-2xl font-bold border-l-4 border-primary pl-4 inline-block">
                                    {category.category}
                                </h3>
                                {'description' in category && (
                                    <p className="text-muted-foreground mt-2 ml-5 text-sm md:text-base">
                                        {category.description}
                                    </p>
                                )}
                            </motion.div>
                            
                            <motion.div
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.1 }}
                                className={`grid gap-6 ${
                                    isHomePage 
                                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
                                    : "grid-cols-2 md:grid-cols-3 lg:grid-cols-5" 
                                }`}
                            >
                                {category.items.map((service, index) => (
                                    <motion.div key={index} variants={item}>
                                        <Card 
                                            className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background/60 backdrop-blur-md border-primary/10 group cursor-pointer"
                                            onClick={() => setSelectedService(service)}
                                        >
                                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                                <div className="p-2 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
                                                    <service.icon className="w-6 h-6 text-primary" />
                                                </div>
                                                <CardTitle className={`font-bold leading-tight ${isHomePage ? "text-lg" : "text-sm"}`}>
                                                    {service.title}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <CardDescription className={`font-medium leading-relaxed ${isHomePage ? "text-sm" : "text-xs"}`}>
                                                    {service.description}
                                                </CardDescription>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </motion.div>
            
            {/* Service Detail Modal */}
            <AnimatePresence>
                {selectedService && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedService(null)}
                            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                        />
                        <motion.div
                            layoutId={`service-${selectedService.title}`}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-lg bg-background border border-border rounded-2xl shadow-2xl overflow-hidden"
                        >
                            <div className="p-6">
                                <button 
                                    onClick={() => setSelectedService(null)}
                                    className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-full transition-colors"
                                >
                                    <X size={20} />
                                </button>
                                
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                        <selectedService.icon size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">{selectedService.title}</h3>
                                        <p className="text-muted-foreground text-sm">{selectedService.description}</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Key Features</h4>
                                    <ul className="space-y-3">
                                        {selectedService.features.map((feature, i) => (
                                            <motion.li 
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.05 }}
                                                className="flex items-start gap-3"
                                            >
                                                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span className="text-base">{feature}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-8 pt-6 border-t border-border flex justify-end">
                                    <button 
                                        onClick={() => setSelectedService(null)}
                                        className="text-sm font-medium hover:text-primary transition-colors"
                                    >
                                        Close Details
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

             {isExpanding === 'work' && (
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
