import { motion, useInView, useSpring } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { Quote } from 'lucide-react'

// --- Data ---
const stats = [
  { label: "Projects Delivered", value: 150, suffix: "+" },
  { label: "Happy Clients", value: 45, suffix: "" },
  { label: "Years Experience", value: 8, suffix: "+" },
  { label: "Awards Won", value: 12, suffix: "" },
]

const logos = [
    { name: "Acme Corp", src: "https://via.placeholder.com/150x50?text=Acme" },
    { name: "GlobalTech", src: "https://via.placeholder.com/150x50?text=GlobalTech" },
    { name: "Nebula", src: "https://via.placeholder.com/150x50?text=Nebula" },
    { name: "Umbrella", src: "https://via.placeholder.com/150x50?text=Umbrella" },
    { name: "Cyberdyne", src: "https://via.placeholder.com/150x50?text=Cyberdyne" },
    { name: "Wayne Ent", src: "https://via.placeholder.com/150x50?text=Wayne" },
    { name: "Stark Ind", src: "https://via.placeholder.com/150x50?text=Stark" },
]

const testimonials = [
  {
    quote: "The team at Akruti Studio completely transformed our digital presence. Their attention to detail is unmatched.",
    author: "Sarah Jenkins",
    role: "CEO, TechFlow",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    quote: "Working with them was a breeze. They understood our vision immediately and delivered beyond our expectations.",
    author: "Michael Chen",
    role: "Director, InnovateX",
    avatar: "https://i.pravatar.cc/150?u=michael",
  },
  {
    quote: "A masterpiece of design and engineering. The website they built for us won three awards!",
    author: "Elena Rodriguez",
    role: "Marketing Head, Designify",
    avatar: "https://i.pravatar.cc/150?u=elena",
  },
  {
    quote: "Professional, creative, and on time. I couldn't ask for a better partner.",
    author: "David Kim",
    role: "Founder, StartUp",
    avatar: "https://i.pravatar.cc/150?u=david",
  },
  {
    quote: "The ROI on our new site has been incredible. Traffic is up 200%.",
    author: "Jessica Lee",
    role: "VP Sales, GrowthCo",
    avatar: "https://i.pravatar.cc/150?u=jessica",
  },
  {
    quote: "Simply the best. Highly recommended.",
    author: "Tom Baker",
    role: "CTO, FutureNet",
    avatar: "https://i.pravatar.cc/150?u=tom",
  },
]

// --- Components ---

function CountUp({ to, suffix = "" }: { to: number, suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once: true, margin: "-100px" })
    const spring = useSpring(0, { bounce: 0, duration: 2000 })
    
    useEffect(() => {
        if (inView) {
            spring.set(to)
        }
    }, [inView, to, spring])

    const [displayValue, setDisplayValue] = useState(0)

    useEffect(() => {
        return spring.on("change", (latest) => {
            setDisplayValue(Math.floor(latest))
        })
    }, [spring])

    return <span ref={ref} className="tabular-nums">{displayValue}{suffix}</span>
}

function Marquee({ children, reverse = false }: { children: React.ReactNode, reverse?: boolean }) {
    return (
        <div className="flex overflow-hidden w-full mask-linear-gradient">
            <motion.div
                className="flex gap-12 shrink-0 py-10 px-4 items-center"
                animate={{ x: reverse ? ["-100%", "0%"] : ["0%", "-100%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                {children}
                {children}
            </motion.div>
        </div>
    )
}

export function Testimonials() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
             {/* Stats Ticker */}
            <div className="container mx-auto px-6 mb-24">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center space-y-2">
                            <div className="text-4xl md:text-5xl font-bold text-primary">
                                <CountUp to={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Logo Wall */}
            <div className="mb-24 w-full border-y border-border/40 bg-muted/20 backdrop-blur-sm">
                <Marquee>
                    {logos.map((logo, i) => (
                        <div key={i} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100">
                             <span className="text-2xl font-bold text-muted-foreground">{logo.name}</span>
                        </div>
                    ))}
                </Marquee>
            </div>

            {/* Testimonials Masonry */}
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold tracking-tight mb-4">Loved by Founders</h2>
                    <p className="text-xl text-muted-foreground">Don't just take our word for it. Here's what our clients have to say about working with us.</p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="break-inside-avoid"
                        >
                            <Card className="h-full bg-card/50 hover:bg-card transition-colors border-border/50">
                                <CardContent className="p-6 space-y-4">
                                    <Quote className="h-8 w-8 text-primary/20" />
                                    <p className="text-lg leading-relaxed italic text-foreground/80">"{t.quote}"</p>
                                    <div className="flex items-center gap-4 pt-4">
                                        <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full bg-muted object-cover" />
                                        <div>
                                            <div className="font-semibold">{t.author}</div>
                                            <div className="text-sm text-muted-foreground">{t.role}</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
