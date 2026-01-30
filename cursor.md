class MatteBlackCursor {
  private cursor: HTMLDivElement;
  private mouseX: number = 0;
  private mouseY: number = 0;
  private cursorX: number = 0;
  private cursorY: number = 0;
  private readonly lerpSpeed: number = 0.2;

  constructor() {
    this.cursor = document.createElement('div');
    this.injectStyles();
    this.render();
    this.initListeners();
    this.animate();
  }

  private injectStyles(): void {
    const style = document.createElement('style');
    style.textContent = `
      /* Hide the real cursor globally */
      * { cursor: none !important; }

      .matte-cursor {
        position: fixed;
        top: 0;
        left: 0;
        width: 28px;
        height: 32px;
        z-index: 99999;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s ease;
        
        /* Matte Black Styling */
        background: linear-gradient(145deg, #2a2a2a, #0a0a0a);
        clip-path: polygon(50% 0%, 100% 100%, 50% 82%, 0% 100%);
        
        /* Ambient Occlusion / Shadow to make it pop against dark UI */
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
        border: 0.5px solid rgba(255, 255, 255, 0.05); /* Subtle rim light */
      }
    `;
    document.head.appendChild(style);
  }

  private render(): void {
    this.cursor.classList.add('matte-cursor');
    document.body.appendChild(this.cursor);
  }

  private initListeners(): void {
    window.addEventListener('mousemove', (e: MouseEvent) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      this.cursor.style.opacity = '1';
    });

    // Hide when mouse leaves the window
    document.addEventListener('mouseleave', () => {
      this.cursor.style.opacity = '0';
    });
  }

  private animate(): void {
    // Smooth interpolation logic
    this.cursorX += (this.mouseX - this.cursorX) * this.lerpSpeed;
    this.cursorY += (this.mouseY - this.cursorY) * this.lerpSpeed;

    // Apply transformation (offsetting by half-width to center the tip)
    this.cursor.style.transform = `translate3d(${this.cursorX - 14}px, ${this.cursorY}px, 0)`;

    requestAnimationFrame(() => this.animate());
  }
}

// Initialize
new MatteBlackCursor();