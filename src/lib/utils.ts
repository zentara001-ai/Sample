import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function getStudioContext(pathname: string) {
    if (pathname.includes('design')) return 'design';
    if (pathname.includes('app-creation')) return 'app-creation';
    if (pathname.includes('interior')) return 'interior';
    return null;
}
