import { createContext, useContext, useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

type NavigationContextType = {
    isExpanding: string | null;
    handleNavigation: (sectionId: string, path: string) => void;
};

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
    const [isExpanding, setIsExpanding] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleNavigation = (sectionId: string, path: string) => {
        // 1. Scroll to the section
        const element = document.getElementById(sectionId);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: y, behavior: 'smooth' });

            // 2. Wait for scroll (approximate duration) then expand
            setTimeout(() => {
                setIsExpanding(sectionId);
                
                // 3. Wait for expansion animation then navigate
                setTimeout(() => {
                    navigate(path, { state: { fromZoom: true } });
                    // Keep isExpanding set for a bit longer so the exit animation 
                    // of the current page doesn't "snap" back
                    setTimeout(() => {
                        setIsExpanding(null);
                    }, 1000); 
                }, 700); // Trigger navigation slightly before expansion completes
            }, 800); // Duration of scroll
        } else {
            // Direct navigation if element not found (e.g. already on subpage)
            navigate(path);
        }
    };

    return (
        <NavigationContext.Provider value={{ isExpanding, handleNavigation }}>
            {children}
        </NavigationContext.Provider>
    );
}

export function useNavigation() {
    const context = useContext(NavigationContext);
    if (context === undefined) {
        throw new Error('useNavigation must be used within a NavigationProvider');
    }
    return context;
}
