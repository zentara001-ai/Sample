export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    thumbnail: string;
    images: string[];
    technologies: string[];
    role: string;
    year: string;
}

export const projects: Project[] = [
    {
        id: "jackal-ai",
        title: "Jackal",
        description: "A fully local, voice-activated AI assistant powered by Ollama and Python.",
        longDescription: "Jackal is a cutting-edge personal AI assistant designed for total data privacy and offline capability. By orchestrating open-source Large Language Models (LLMs) via Ollama and LM Studio, Jackal brings intelligence directly to your local hardware.\n\nKey Capabilities:\n• Local Intelligence: Runs entirely on your machine using optimized models, ensuring zero data leakage to the cloud.\n• Voice Interface: Features a sophisticated bi-directional voice system. You speak, it listens, thinks, and replies with a natural synthesized voice.\n• Real-Time Web Search: While primarily local, Jackal can securely access the web to fetch real-time information when requested.\n• System Control: Integrated with system-level hooks to execute local commands, manage files, and automate workflows.\n• Hardware Optimized: Built with Python to efficiently leverage local GPU/CPU resources for low-latency inference.",
        thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
        ],
        technologies: ["Python", "Ollama", "LM Studio", "SpeechRecognition", "PyAudio"],
        role: "AI Architect & Developer",
        year: "2025"
    },
    {
        id: "study-iq",
        title: "Study IQ",
        description: "A comprehensive educational management platform bridging teachers, students, and parents.",
        longDescription: "Study IQ is a robust educational institution management application designed to streamline communication and learning. Built with the Flutter engine, it provides a unified platform for the entire educational ecosystem.\n\nCore Features:\n• Unified Communication: Seamless messaging channel between lecturers, teachers, students, and parents via Internet or mobile data.\n• Digital Notes: Lecturers can instantly broadcast notes and study materials to entire classes.\n• Student Tools: Students can receive materials, organize them, and create their own digital notes directly within the app.\n• Parent Connect: Direct line of communication for parents to stay updated on their child's progress and attendance.\n• Real-Time Updates: Instant access to dynamic timetables, exam schedules, and class group announcements.",
        thumbnail: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80"
        ],
        technologies: ["Flutter", "Dart", "Firebase", "Node.js"],
        role: "Mobile App Developer",
        year: "2024"
    },
    {
        id: "to-dzzee",
        title: "To-dzzee",
        description: "An aesthetically pleasing, feature-rich To-Do List app built with Flutter.",
        longDescription: "To-dzzee is more than just a task manager; it's a productivity companion designed with a focus on aesthetics and user experience. Built using Flutter, it helps users organize their life through a beautiful, intuitive interface.\n\nKey Features:\n• Task Management: Create complex tasks with nested subtasks to break down big goals.\n• Smart Reminders: Set precise timers and urgent alarms so you never miss a deadline.\n• Calendar Integration: A visual calendar view to track upcoming tasks and review past activity.\n• History Log: A dedicated history tab to audit your completed work.\n• Productivity Analytics: A comprehensive dashboard showing task completion rates and productivity trends to keep you motivated.",
        thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        ],
        technologies: ["Flutter", "Dart", "Drift", "Riverpod", "Local Notifications"],
        role: "Mobile App Developer",
        year: "2024"
    },
    {
        id: "prompt-master-ai",
        title: "Prompt Master AI",
        description: "A premier marketplace and studio for high-quality generative AI prompts.",
        longDescription: "Prompt Master AI is a comprehensive ecosystem designed for the new wave of AI creators. It serves as both a marketplace for discovering engineering excellence and a studio for crafting narrative-driven content.\n\nKey Features:\n• Extensive Marketplace: Browse over 150+ pre-built, high-quality prompts tailored for Cinematography, Image Generation, Video Synthesis, and 3D Modeling.\n• Cinema Prompt Studio: A dedicated workspace where users can input a raw story idea and automatically generate character sketches, detailed storylines, and professional script formats.\n• Cross-Modal Support: Optimized for diverse outputs ranging from photorealistic images to complex 3D assets.\n• Creator Economy: A platform for prompt engineers to share and monetize their specialized workflows.",
        thumbnail: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
        ],
        technologies: ["TypeScript", "React", "Node.js", "OpenAI API", "Tailwind CSS"],
        role: "Full Stack Developer",
        year: "2024"
    }
];