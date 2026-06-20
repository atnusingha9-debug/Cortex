export interface AITool {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: ToolCategory;
  tags: string[];
  pricing: "Free" | "Freemium" | "Paid";
  url: string;
  icon: string;
  featured: boolean;
  upvotes: number;
  gradient: string;
}

export type ToolCategory =
  | "All"
  | "Text & Writing"
  | "Image & Design"
  | "Video & Motion"
  | "Audio & Speech"
  | "Code & Development"
  | "Data & Analytics"
  | "Marketing & SEO"
  | "Productivity"
  | "Research";

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: number;
  image: string;
  tags: string[];
  featured: boolean;
}

export interface ProcessingStep {
  id: string;
  label: string;
  status: "pending" | "active" | "completed" | "error";
}

export interface TransformResult {
  rawTranscript: string;
  summarizedArticle: string;
  socialPost: string;
  metadata: {
    title: string;
    duration: string;
    platform: string;
  };
}
