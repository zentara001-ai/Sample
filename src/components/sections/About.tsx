import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '../ui/button'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { getStudioContext } from '../../lib/utils'
import { CheckCircle2, Target, Rocket, Lightbulb, Users, Shield, Home as HomeIcon } from 'lucide-react'
import { useRef } from 'react'

const studioContent = {
    design: {
        title: "Design Philosophy",
        subtitle: "Aesthetics Meets Functionality",
        description: "In the Design Studio, we believe that every pixel should serve a purpose. We don't just create visuals; we craft experiences that evoke emotion and drive engagement. Our team blends traditional artistic principles with cutting-edge digital tools to build brands that stand the test of time.",
        points: [
            { title: "User-Centric Approach", text: "We start every project by understanding the end user, ensuring the final design resonates with their needs and behaviors.", icon: Users },
            { title: "Visual Storytelling", text: "Your brand has a story to tell. We use typography, color, and motion to narrate it compellingly.", icon: Lightbulb },
            { title: "Iterative Excellence", text: "Through continuous testing and feedback loops, we refine every design until it reaches perfection.", icon: Target }
        ]
    },
    'app-creation': {
        title: "Engineering Excellence",
        subtitle: "Robust Systems, Seamless Experiences",
        description: "Our App Creation team is dedicated to building the backbone of modern digital business. We focus on scalability, security, and high performance. From complex SaaS architectures to intuitive mobile applications, we turn technical challenges into competitive advantages.",
        points: [
            { title: "Scalable Architecture", text: "We build systems that grow with your business, ensuring zero downtime even during peak loads.", icon: Rocket },
            { title: "Security First", text: "Data integrity is our top priority. We implement bank-grade encryption and rigorous security protocols.", icon: Shield },
            { title: "Native Performance", text: "Whether it's Flutter or React Native, we ensure your apps run with the fluid speed of native code.", icon: CheckCircle2 }
        ]
    },
    interior: {
        title: "Architectural Vision",
        subtitle: "Transforming Physical Spaces",
        description: "The Interior Design Studio redefines how people interact with their physical environment. We merge brutalist aesthetics with modern comfort, creating spaces that are both inspiring and functional. Our approach considers lighting, acoustics, and materials to craft a cohesive atmosphere.",
        points: [
            { title: "Spatial Harmony", text: "We optimize the flow of every room, ensuring that form and function exist in perfect balance.", icon: HomeIcon },
            { title: "Sustainable Luxury", text: "We source eco-friendly materials that don't compromise on premium quality or aesthetic appeal.", icon: Rocket },
            { title: "Lighting & Mood", text: "Our designs utilize advanced illumination techniques to set the perfect tone for any occasion.", icon: Lightbulb }
        ]
    }
};

const defaultContent = {
    title: "Who We Are",
    subtitle: "Akruti Studio is a collective of creators",
    description: "We are a passionate team of designers, developers, and strategists dedicated to transforming ideas into digital and physical reality. With a finger on the pulse of modern technology, we help businesses navigate the landscape with confidence.",
    points: [
        { title: "Collaborative Spirit", text: "We work closely with our clients, treating every project as a partnership toward a shared goal.", icon: Users },
        { title: "Boundary Pushing", text: "We aren't afraid to experiment with the latest tech—from AI to 3D—to find the best solutions.", icon: Target },
        { title: "Global Impact", text: "Our work spans industries and continents, delivering results that matter on a global scale.", icon: CheckCircle2 }
    ]
};

export function About() {
    const location = useLocation();
    const navigate = useNavigate();
    const studio = getStudioContext(location.pathname);
    const content = studio ? studioContent[studio as keyof typeof studioContent] : defaultContent;
    
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end end"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={containerRef} className="py-32 relative overflow-hidden bg-background">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="max-w-4xl mx-auto text-center mb-32 space-y-6"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">{content.title}</h1>
                    <p className="text-xl md:text-2xl text-primary font-medium">{content.subtitle}</p>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        {content.description}
                    </p>
                </motion.div>

                {/* Animated Roadmap Section */}
                <div className="relative max-w-5xl mx-auto">
                    {/* The Connecting Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block">
                        <motion.div 
                            style={{ height: lineHeight }}
                            className="w-full bg-primary origin-top shadow-[0_0_15px_rgba(var(--primary),0.5)]"
                        />
                    </div>

                    <div className="space-y-32">
                        {content.points.map((point, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className={`relative flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* The Point/Circle */}
                                <div className="absolute left-8 md:left-1/2 w-12 h-12 bg-background border-4 border-primary rounded-full -translate-x-1/2 z-10 flex items-center justify-center shadow-xl hidden md:flex">
                                    <point.icon size={20} className="text-primary" />
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 w-full">
                                    <div className={`p-8 rounded-[2rem] border border-border bg-secondary/10 backdrop-blur-sm hover:border-primary/30 transition-colors shadow-sm ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className={`p-3 bg-primary/10 w-fit rounded-xl text-primary mb-6 ${i % 2 === 0 ? 'md:ml-auto' : ''}`}>
                                            <point.icon size={28} />
                                        </div>
                                        <h3 className="text-3xl font-bold mb-4">{point.title}</h3>
                                        <p className="text-lg text-muted-foreground leading-relaxed">
                                            {point.text}
                                        </p>
                                    </div>
                                </div>

                                {/* Spacer for the other side of the line */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Footer CTA */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="mt-40 text-center space-y-8 p-12 rounded-[3rem] bg-secondary/20 border border-border"
                >
                    <h2 className="text-4xl font-bold">Interested in working with us?</h2>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="rounded-full h-14 px-8" onClick={() => navigate(studio ? `/${studio}/contact` : '/contact')}>
                            Start a Project
                        </Button>
                        <Link to="/">
                            <Button size="lg" variant="outline" className="rounded-full h-14 px-8">Back Home</Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
