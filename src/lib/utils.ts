import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

export function extractVideoId(url: string): { platform: string; id: string } | null {
  const patterns = [
    { platform: "YouTube", regex: /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/ },
    { platform: "YouTube", regex: /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/ },
    { platform: "TikTok", regex: /tiktok\.com\/@[\w.-]+\/video\/(\d+)/ },
    { platform: "Instagram", regex: /instagram\.com\/(?:p|reel|tv)\/([a-zA-Z0-9_-]+)/ },
  ];

  for (const { platform, regex } of patterns) {
    const match = url.match(regex);
    if (match) {
      return { platform, id: match[1] };
    }
  }
  return null;
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length).trimEnd() + "...";
}

export function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
