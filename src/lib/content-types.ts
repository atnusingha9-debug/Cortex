export interface TextBlock {
  type: "paragraph" | "list" | "code";
  content: string;
  items?: string[];
}

export interface ToolProfile {
  name: string;
  heading: string;
  url?: string;
  textBlocks: string[];
  features?: string[];
}

export interface Chapter {
  heading: string;
  level: 2 | 3 | 4;
  textBlocks: string[];
  imageSrc?: string;
  imageAlt?: string;
  tools?: ToolProfile[];
}

export interface ArticleContent {
  id: string;
  title: string;
  focusKeyword: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: number;
  image: string;
  imageAlt: string;
  tags: string[];
  featured: boolean;
  chapters: Chapter[];
}
