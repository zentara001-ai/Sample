import { Routes, Route, useLocation } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { ProjectListing } from './components/sections/ProjectListing'
import { ProjectDetail } from './components/sections/ProjectDetail'
import { CompanyStory } from './components/sections/CompanyStory'
import { CostEstimator } from './components/sections/CostEstimator'
import { Login } from './components/portal/Login'
import { Dashboard } from './components/portal/Dashboard'
import { Design } from './components/sections/Design'
import { AppCreation } from './components/sections/AppCreation'
import { Interior } from './components/sections/Interior'
import { useNavigation } from './lib/NavigationContext'
import { useLayoutEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CustomCursor } from './components/ui/CustomCursor'
import { CommandMenu } from './components/command-menu'
import { Palette, Smartphone, Home as HomeIcon } from 'lucide-react'

function CategoryGrid() {
    const { handleNavigation } = useNavigation()

    const categories = [
        {
            id: 'design',
            title: 'Design',
            description: 'Brand Identity & Visual Language',
            icon: Palette,
            path: '/design',
            color: 'bg-secondary/30'
        },
        {
            id: 'app-creation',
            title: 'App Creation',
            description: 'Digital Products & SaaS Engineering',
            icon: Smartphone,
            path: '/app-creation',
            color: 'bg-secondary/30'
        },
        {
            id: 'interior',
            title: 'Interior',
            description: 'Architectural Spaces & Modern Living',
            icon: HomeIcon,
            path: '/interior',
            color: 'bg-secondary/30'
        }
    ]

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((cat) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            whileHover={{ y: -10 }}
                            className="group cursor-pointer"
                            onClick={() => handleNavigation(cat.id, cat.path)}
                        >
                            <div id={cat.id} className={`h-full p-8 rounded-3xl border border-border/50 ${cat.color} backdrop-blur-sm transition-all hover:border-primary/50 relative overflow-hidden`}>
                                <div className="p-4 rounded-2xl bg-background/80 w-fit mb-6 text-primary">
                                    <cat.icon size={32} />
                                </div>
                                <h3 className="text-3xl font-bold mb-4">{cat.title}</h3>
                                <p className="text-muted-foreground text-lg mb-8">{cat.description}</p>
                                <div className="flex items-center text-primary font-medium">
                                    Explore Studio →
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function Home() {
    return (
        <motion.main
            className="flex-1 flex flex-col gap-0 pt-0"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div id="home"><Hero /></div>
            <CategoryGrid />
        </motion.main>
    )
}

function PageWrapper({ children }: { children: React.ReactNode }) {
    const location = useLocation();
    const isFromZoom = location.state?.fromZoom;

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <motion.main 
            className="flex-1 pt-20 relative"
            initial={isFromZoom ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            {isFromZoom && (
                <motion.div
                    className="absolute inset-0 bg-background z-50 pointer-events-none"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />
            )}
            {children}
        </motion.main>
    )
}

function App() {
    const location = useLocation();

    return (
        <div className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary/20 flex flex-col">
            <CustomCursor />
            <CommandMenu />
            {location.pathname !== '/' && <Navbar />}
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/design" element={<PageWrapper><Design /></PageWrapper>} />
                                            <Route path="/design/projects" element={<PageWrapper><ProjectListing /></PageWrapper>} />
                                            <Route path="/design/work" element={<PageWrapper><Services /></PageWrapper>} />
                                            <Route path="/design/about" element={<PageWrapper><About /></PageWrapper>} />
                                            <Route path="/design/contact" element={<PageWrapper><Contact /></PageWrapper>} />
                                            
                                            <Route path="/app-creation" element={<PageWrapper><AppCreation /></PageWrapper>} />
                                            <Route path="/app-creation/projects" element={<PageWrapper><ProjectListing /></PageWrapper>} />
                                            <Route path="/app-creation/work" element={<PageWrapper><Services /></PageWrapper>} />
                                            <Route path="/app-creation/about" element={<PageWrapper><About /></PageWrapper>} />
                                            <Route path="/app-creation/contact" element={<PageWrapper><Contact /></PageWrapper>} />
                                            
                                            <Route path="/interior" element={<PageWrapper><Interior /></PageWrapper>} />
                                            <Route path="/interior/projects" element={<PageWrapper><ProjectListing /></PageWrapper>} />
                                            <Route path="/interior/work" element={<PageWrapper><Services /></PageWrapper>} />
                                            <Route path="/interior/about" element={<PageWrapper><About /></PageWrapper>} />
                                            <Route path="/interior/contact" element={<PageWrapper><Contact /></PageWrapper>} />                    <Route path="/projects" element={<PageWrapper><ProjectListing /></PageWrapper>} />
                    <Route path="/projects/:id" element={<PageWrapper><ProjectDetail /></PageWrapper>} />
                    <Route path="/story" element={<PageWrapper><CompanyStory /></PageWrapper>} />
                    <Route path="/estimator" element={<PageWrapper><CostEstimator /></PageWrapper>} />
                    <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
                    <Route path="/portal" element={<PageWrapper><Dashboard /></PageWrapper>} />
                    <Route path="/work" element={<PageWrapper><Services /></PageWrapper>} />
                    <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
                    <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
                </Routes>
            </AnimatePresence>
            <Footer />
        </div>
    )
}

export default App
