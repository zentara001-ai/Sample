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
import { NavigationProvider } from './lib/NavigationContext'
import { useEffect, useLayoutEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CustomCursor } from './components/ui/CustomCursor'

function Home() {
    const location = useLocation();
    
    useEffect(() => {
        if (location.state && location.state.targetId) {
            const element = document.getElementById(location.state.targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <motion.main 
            className="flex-1 flex flex-col gap-0 pt-0"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div id="home"><Hero /></div>
            <div id="work"><Services /></div>
            <div id="about"><About /></div>
            <div id="contact"><Contact /></div>
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
        <main className="flex-1 pt-20 relative">
            {isFromZoom && (
                <motion.div
                    className="absolute inset-0 bg-background z-50 pointer-events-none"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />
            )}
            <motion.div
                initial={isFromZoom ? { opacity: 1 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
            >
                {children}
            </motion.div>
        </main>
    )
}

function App() {
    const location = useLocation();
    
    return (
        <NavigationProvider>
            <CustomCursor />
            <div className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary/20 flex flex-col">
                <Navbar />
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<PageWrapper><ProjectListing /></PageWrapper>} />
                        <Route path="/projects/:id" element={<PageWrapper><ProjectDetail /></PageWrapper>} />
                        <Route path="/story" element={<PageWrapper><CompanyStory /></PageWrapper>} />
                        <Route path="/work" element={<PageWrapper><Services /></PageWrapper>} />
                        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
                        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
                    </Routes>
                </AnimatePresence>
                <Footer />
            </div>
        </NavigationProvider>
    )
}

export default App
