import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '../ui/button'
import { cn, getStudioContext } from '../../lib/utils'
import { useNavigation } from '../../lib/NavigationContext'
import { useLocation, useNavigate } from 'react-router-dom'
import { ModeToggle } from '../mode-toggle'

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { handleNavigation } = useNavigation()
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const studio = getStudioContext(location.pathname);

    const navLinks = [
        { name: 'Home', id: 'home', path: studio ? `/${studio}` : '/' },
        { name: 'Projects', id: 'projects', path: studio ? `/${studio}/projects` : '/projects' },
        { name: 'Work', id: 'work', path: studio ? `/${studio}/work` : '/work' },
        { name: 'About', id: 'about', path: studio ? `/${studio}/about` : '/about' },
        { name: 'Contact', id: 'contact', path: studio ? `/${studio}/contact` : '/contact' },
    ]

    const onLinkClick = (link: typeof navLinks[0]) => {
        setIsMobileMenuOpen(false);
        
        if (location.pathname !== '/' && !studio) {
            navigate(link.path);
        } else if (studio) {
             navigate(link.path);
        } else {
            handleNavigation(link.id, link.path);
        }
    }

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-background/80 backdrop-blur-md border-border/40 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="/" className="text-2xl font-bold tracking-tighter" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
                    Akruti Studio
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => onLinkClick(link)}
                            className="text-sm font-medium hover:text-primary transition-colors relative group bg-transparent border-none cursor-pointer"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                        </button>
                    ))}
                    <ModeToggle />
                    <Button onClick={() => handleNavigation('contact', '/contact')}>Get Started</Button>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-2 md:hidden">
                    <ModeToggle />
                    <button
                        className="p-2 text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-border/40 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => onLinkClick(link)}
                                    className="text-lg font-medium hover:text-primary transition-colors text-left"
                                >
                                    {link.name}
                                </button>
                            ))}
                            <Button className="w-full" onClick={() => { setIsMobileMenuOpen(false); handleNavigation('contact', '/contact'); }}>
                                Get Started
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
