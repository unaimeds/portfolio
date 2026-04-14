import { twMerge } from "tailwind-merge";

export function cn(originalClass: string, newClass: string): string {
    return twMerge(originalClass, newClass);
}
