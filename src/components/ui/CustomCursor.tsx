import { useEffect, useRef } from 'react'

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null)
    
    // State refs
    const mouse = useRef({ x: 0, y: 0 })
    const pos = useRef({ x: 0, y: 0 })
    
    // Increased smoothness factor
    const lerpSpeed = 0.25

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX
            mouse.current.y = e.clientY
            
            if (cursorRef.current) {
                cursorRef.current.style.opacity = '1'
            }
        }

        const handleMouseLeave = () => {
            if (cursorRef.current) {
                cursorRef.current.style.opacity = '0'
            }
        }

        window.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseleave', handleMouseLeave)

        // Animation Loop
        let animationFrameId: number

        const animate = () => {
            // Smooth interpolation
            pos.current.x += (mouse.current.x - pos.current.x) * lerpSpeed
            pos.current.y += (mouse.current.y - pos.current.y) * lerpSpeed

            if (cursorRef.current) {
                // 3D Transform Logic
                // 1. Translate tip to mouse position (x - 12 centers the 24px width)
                // 2. Perspective: Gives depth to the rotations
                // 3. Rotate Z: The standard "cursor angle" (increased to -25deg)
                // 4. Rotate X: Tilts the top away/towards (20deg adds "thickness" view)
                // 5. Rotate Y: Slight side tilt (-10deg)
                cursorRef.current.style.transform = `
                    translate3d(${pos.current.x - 12}px, ${pos.current.y}px, 0) 
                    perspective(800px) 
                    rotateZ(-30deg) 
                    rotateX(20deg) 
                    rotateY(-10deg)
                `
            }

            animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseleave', handleMouseLeave)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <>
            <style>{`
                /* Hide the real cursor globally */
                * { cursor: none !important; }

                .matte-cursor {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 24px;
                    height: 32px; /* Reduced from 36px */
                    z-index: 99999;
                    pointer-events: none;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    
                    /* Shape: Sharp arrowhead */
                    clip-path: polygon(50% 0%, 100% 85%, 50% 70%, 0% 85%);
                    
                    /* 3D Finish (Metallic / Chrome) */
                    background: linear-gradient(135deg, #e0e0e0 0%, #bdc3c7 20%, #2c3e50 50%, #bdc3c7 80%, #e0e0e0 100%);
                    
                    /* Internal lighting details to simulate metallic depth/edges */
                    box-shadow: 
                        inset 1px 1px 0px rgba(255, 255, 255, 0.9),  /* High specular rim light */
                        inset -1px -1px 0px rgba(0, 0, 0, 0.6),      /* Sharp shadow */
                        inset 2px 2px 5px rgba(255, 255, 255, 0.5),  /* Surface sheen */
                        0px 5px 15px rgba(0,0,0,0.3);                /* Drop shadow for lift */

                    transform-style: preserve-3d;
                    will-change: transform;
                }
            `}</style>
            
            {/* Main Cursor Only - Trail Removed */}
            <div ref={cursorRef} className="matte-cursor" />
        </>
    )
}
