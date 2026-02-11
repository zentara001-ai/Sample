import { 
    Layers, Brush, Palette, CheckCircle2, Zap, 
    Code, Smartphone, Server, Terminal, Lock, Cpu, Settings,
    Home as HomeIcon, Compass, Wind, Lightbulb, Monitor, Mic, Sun, Armchair
} from 'lucide-react'

export const studioProjects = {
    design: [
        { 
            title: "Lumina Brand Identity", 
            category: "Branding", 
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
            description: "A comprehensive rebrand for a leading solar energy provider, focusing on clarity, warmth, and sustainability.",
            technologies: ["Adobe Illustrator", "Figma", "Cinema 4D"],
            role: "Lead Brand Agency",
            year: "2024"
        },
        { 
            title: "Zenith UI Kit", 
            category: "Product Design", 
            image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&w=800&q=80",
            description: "An enterprise-grade design system built for scalability, featuring over 500+ atomic components and dark mode support.",
            technologies: ["Figma", "React", "Storybook"],
            role: "Product Design",
            year: "2023"
        },
        { 
            title: "Ethereal Campaign", 
            category: "Visual Arts", 
            image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80",
            description: "A surrealist digital art campaign for a high-end perfume brand, blending photography with 3D fluid simulations.",
            technologies: ["Blender", "Octane Render", "Photoshop"],
            role: "Art Direction",
            year: "2024"
        },
        { 
            title: "Vortex Motion System", 
            category: "Motion Graphics", 
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
            description: "A dynamic broadcast package for a global esports tournament, including openers, stingers, and lower thirds.",
            technologies: ["After Effects", "C4D", "Redshift"],
            role: "Motion Design",
            year: "2023"
        },
        { 
            title: "EcoLife Packaging", 
            category: "Sustainable Packaging", 
            image: "https://images.unsplash.com/photo-1606166325683-e6deb697d301?auto=format&fit=crop&w=800&q=80",
            description: "Biodegradable packaging design for a modern skincare line, utilizing molded pulp and soy-based inks.",
            technologies: ["Packaging Design", "3D Prototyping", "Print"],
            role: "Packaging Lead",
            year: "2024"
        }
    ],
    'app-creation': [
        { 
            title: "NeuroFlow SaaS", 
            category: "Web Platform", 
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
            description: "AI-powered workflow automation tool for cognitive researchers, featuring real-time data visualization.",
            technologies: ["Next.js", "Python", "TensorFlow", "AWS"],
            role: "Full Stack Development",
            year: "2024"
        },
        { 
            title: "Pulse Mobile", 
            category: "iOS & Android", 
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
            description: "A health telemetry app connecting patients with doctors via bluetooth-enabled medical devices.",
            technologies: ["Flutter", "BLE", "Firebase"],
            role: "Mobile Engineering",
            year: "2023"
        },
        { 
            title: "Grid OS", 
            category: "Desktop App", 
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
            description: "A high-performance trading terminal for crypto assets, optimized for sub-millisecond latency.",
            technologies: ["Rust", "Tauri", "React", "WebSockets"],
            role: "Systems Architecture",
            year: "2024"
        },
        { 
            title: "FinVault", 
            category: "FinTech Security", 
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
            description: "Bank-grade custody solution for digital assets with multi-signature authorization flows.",
            technologies: ["Go", "gRPC", "PostgreSQL", "Vault"],
            role: "Backend Security",
            year: "2023"
        },
        { 
            title: "MarketMinds", 
            category: "E-commerce Analytics", 
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
            description: "Predictive inventory management system for large-scale retail chains using historical sales data.",
            technologies: ["Python", "Pandas", "Django", "Vue.js"],
            role: "Data Engineering",
            year: "2024"
        }
    ],
    interior: [
        { 
            title: "The Obsidian Villa", 
            category: "Residential", 
            image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
            description: "A brutalist masterpiece in the Swiss Alps, featuring raw concrete, floor-to-ceiling glass, and minimalist warmth.",
            technologies: ["Architecture", "Interior Design", "Bespoke Furniture"],
            role: "Lead Architect",
            year: "2023"
        },
        { 
            title: "Nexus HQ", 
            category: "Commercial", 
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
            description: "A futuristic open-plan office for a tech giant, designed to foster collaboration through organic circulation paths.",
            technologies: ["Space Planning", "Lighting Design", "Acoustics"],
            role: "Interior Lead",
            year: "2024"
        },
        { 
            title: "Aura Boutique", 
            category: "Retail", 
            image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
            description: "An experiential retail space for a luxury fashion brand, using smart mirrors and interactive displays.",
            technologies: ["Retail Design", "Smart Integration", "Visual Merchandising"],
            role: "Design Director",
            year: "2023"
        },
        { 
            title: "Serenity Spa", 
            category: "Hospitality", 
            image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
            description: "A holistic wellness center centered around water, stone, and silence. Designed for total sensory deprivation.",
            technologies: ["Hospitality Design", "Material Selection", "Lighting"],
            role: "Project Lead",
            year: "2024"
        },
        { 
            title: "Urban Loft 404", 
            category: "Modern Living", 
            image: "https://images.unsplash.com/photo-1502005229766-52835226127c?auto=format&fit=crop&w=800&q=80",
            description: "A complete renovation of a historic industrial warehouse into a high-tech smart home loft.",
            technologies: ["Renovation", "Smart Home", "Custom Joinery"],
            role: "Interior Architect",
            year: "2023"
        }
    ]
};

export const studioServices = {
    design: [
        { 
            title: "Brand Strategy", 
            icon: Layers, 
            desc: "Building the foundation of your visual identity.",
            features: ["Market Positioning", "Competitor Analysis", "Brand Archetypes", "Tone of Voice Development"]
        },
        { 
            title: "Logo & Identity", 
            icon: Brush, 
            desc: "Crafting memorable marks that define your business.",
            features: ["Logo Design", "Visual Identity Systems", "Brand Guidelines", "Stationery Design"]
        },
        { 
            title: "UI Design", 
            icon: Palette, 
            desc: "Pixel-perfect interfaces for web and mobile.",
            features: ["High-Fidelity Mockups", "Interactive Prototypes", "Component Libraries", "Accessibility Compliance"]
        },
        { 
            title: "UX Research", 
            icon: CheckCircle2, 
            desc: "Data-driven insights to optimize user flows.",
            features: ["User Interviews", "Usability Testing", "Journey Mapping", "Heuristic Evaluation"]
        },
        { 
            title: "Motion Graphics", 
            icon: Zap, 
            desc: "Bringing static designs to life with fluid animation.",
            features: ["Logo Animation", "Explainer Videos", "Lottie Animations", "Micro-interactions"]
        },
        { 
            title: "Packaging Design", 
            icon: Layers, 
            desc: "Tactile experiences that stand out on the shelf.",
            features: ["Box & Label Design", "3D Rendering", "Print Preparation", "Sustainable Materials"]
        },
        { 
            title: "Typography", 
            icon: Brush, 
            desc: "Custom lettering and font selection.",
            features: ["Custom Font Creation", "Type Pairing", "Hierarchical Layouts", "Expressive Lettering"]
        },
        { 
            title: "Editorial Design", 
            icon: Palette, 
            desc: "Layouts for print and digital publications.",
            features: ["Magazine Layouts", "Annual Reports", "E-books", "Interactive PDFs"]
        },
        { 
            title: "3D Visualisation", 
            icon: Layers, 
            desc: "Photorealistic rendering for products and spaces.",
            features: ["Product Rendering", "Architectural Vis", "Abstract 3D Art", "Animation"]
        },
        { 
            title: "Design Systems", 
            icon: CheckCircle2, 
            desc: "Scalable libraries for consistent branding.",
            features: ["Tokenization", "Component Documentation", "Governance Models", "Multi-platform Support"]
        },
        { 
            title: "Creative Direction", 
            icon: Zap, 
            desc: "Guiding the artistic vision of campaigns.",
            features: ["Concept Development", "Art Direction", "Photo Shoot Direction", "Campaign Strategy"]
        },
        { 
            title: "Social Assets", 
            icon: Palette, 
            desc: "Engaging content for digital platforms.",
            features: ["Instagram Templates", "LinkedIn Carousels", "Ad Creatives", "Story Highlights"]
        }
    ],
    'app-creation': [
        { 
            title: "Full-Stack Web", 
            icon: Code, 
            desc: "Robust backends paired with high-performance frontends.",
            features: ["React/Next.js", "Node.js/Python", "Database Architecture", "Serverless Functions"]
        },
        { 
            title: "iOS Development", 
            icon: Smartphone, 
            desc: "Native Swift applications optimized for Apple devices.",
            features: ["SwiftUI", "Core Data", "App Store Optimization", "TestFlight Beta Testing"]
        },
        { 
            title: "Android Dev", 
            icon: Smartphone, 
            desc: "Kotlin-based apps for the vast Android ecosystem.",
            features: ["Jetpack Compose", "Material Design 3", "Play Store Deployment", "Device Fragmentation Handling"]
        },
        { 
            title: "Cross-Platform", 
            icon: Layers, 
            desc: "Flutter & React Native for unified codebases.",
            features: ["Single Codebase", "Native Performance", "Hot Reload Development", "Platform Specific Code"]
        },
        { 
            title: "Cloud Architecture", 
            icon: Server, 
            desc: "Scalable AWS/Azure infrastructure design.",
            features: ["Auto-scaling Groups", "Load Balancing", "Serverless Computing", "Cost Optimization"]
        },
        { 
            title: "API Integration", 
            icon: Terminal, 
            desc: "Seamless third-party service connections.",
            features: ["REST & GraphQL", "Webhook Handling", "Authentication (OAuth)", "Rate Limiting"]
        },
        { 
            title: "Database Design", 
            icon: Server, 
            desc: "SQL & NoSQL architectures for big data.",
            features: ["Schema Design", "Indexing Strategy", "Data Migration", "Backup Solutions"]
        },
        { 
            title: "Real-time Systems", 
            icon: Zap, 
            desc: "WebSockets for instant data synchronization.",
            features: ["Socket.io", "Real-time Chat", "Live Dashboards", "Collaborative Editing"]
        },
        { 
            title: "Payment Gateways", 
            icon: Lock, 
            desc: "Secure Stripe & PayPal integrations.",
            features: ["Subscription Management", "Fraud Detection", "Global Currencies", "Invoicing"]
        },
        { 
            title: "Security Audits", 
            icon: CheckCircle2, 
            desc: "Compliance testing for GDPR & HIPAA.",
            features: ["Penetration Testing", "Vulnerability Scanning", "Encryption Standards", "Access Control"]
        },
        { 
            title: "DevOps & CI/CD", 
            icon: Settings, 
            desc: "Automated deployment pipelines.",
            features: ["GitHub Actions", "Docker Containerization", "Kubernetes Orchestration", "Infrastructure as Code"]
        },
        { 
            title: "AI Integration", 
            icon: Cpu, 
            desc: "Embedding intelligence into software.",
            features: ["OpenAI API Integration", "Local LLM Inference", "Vector Databases", "Prompt Engineering"]
        }
    ],
    interior: [
        { 
            title: "Spatial Planning", 
            icon: Compass, 
            desc: "Optimizing flow and functionality in any environment.",
            features: ["Floor Plan Layouts", "Circulation Analysis", "Space Optimization", "Zoning"]
        },
        { 
            title: "Bespoke Furnishing", 
            icon: Armchair, 
            desc: "Custom-crafted pieces that fit your space perfectly.",
            features: ["Custom Joinery Design", "Material Selection", "Upholstery Selection", "Ergonomic Design"]
        },
        { 
            title: "Lighting Design", 
            icon: Lightbulb, 
            desc: "Setting the mood through advanced illumination tech.",
            features: ["Layered Lighting Plans", "Fixture Selection", "Smart Control Systems", "Natural Light Analysis"]
        },
        { 
            title: "Sustainable Materials", 
            icon: Wind, 
            desc: "Eco-conscious choices for a healthier living space.",
            features: ["Low-VOC Materials", "Recycled Content", "Energy Efficiency", "Lifecycle Analysis"]
        },
        { 
            title: "Renovation Mgmt", 
            icon: Layers, 
            desc: "End-to-end oversight of construction and remodeling.",
            features: ["Contractor Coordination", "Budget Management", "Timeline Tracking", "Quality Control"]
        },
        { 
            title: "3D Rendering", 
            icon: Monitor, 
            desc: "Photorealistic walkthroughs before building begins.",
            features: ["VR Walkthroughs", "4K Renders", "360 Panoramas", "Material Previews"]
        },
        { 
            title: "Art Curation", 
            icon: Palette, 
            desc: "Selecting the perfect pieces to complete the look.",
            features: ["Artist Sourcing", "Framing & Installation", "Investment Art Advice", "Gallery Coordination"]
        },
        { 
            title: "Kitchen Design", 
            icon: HomeIcon, 
            desc: "Functional culinary spaces with modern aesthetics.",
            features: ["Cabinetry Layout", "Appliance Integration", "Workflow Optimization", "Durable Surfaces"]
        },
        { 
            title: "Acoustical Planning", 
            icon: Mic, 
            desc: "Soundproofing and acoustic optimization.",
            features: ["Sound Absorption Panels", "Noise Reduction Strategies", "Privacy Solutions", "Audio System Integration"]
        },
        { 
            title: "Outdoor Living", 
            icon: Sun, 
            desc: "Blending indoor comfort with outdoor nature.",
            features: ["Terrace Design", "Landscape Integration", "Outdoor Kitchens", "Weatherproof Furniture"]
        },
        { 
            title: "Color Consultation", 
            icon: Palette, 
            desc: "Psychology-backed color palettes for every room.",
            features: ["Color Psychology", "Trend Analysis", "Paint Schedules", "Wallpaper Selection"]
        },
        { 
            title: "Smart Home Setup", 
            icon: Zap, 
            desc: "Integrating technology into the physical space.",
            features: ["Automated Blinds", "Climate Control", "Security Systems", "Voice Control Integration"]
        }
    ]
};