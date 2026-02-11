export function Footer() {
    return (
        <footer className="bg-background border-t border-border/40 py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-bold mb-2">Akruti Studio</h2>
                    <p className="text-muted-foreground text-sm">
                        Crafting digital experiences that matter.
                    </p>
                </div>

                <div className="flex items-center space-x-6">
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
                </div>

                <p className="text-sm text-muted-foreground text-center md:text-right">
                    &copy; {new Date().getFullYear()} Akruti Studio. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
