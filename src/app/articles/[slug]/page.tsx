import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import { articles as staticArticles } from "@/lib/data";
import { ArticleDetailClient } from "@/components/articles/ArticleDetailClient";
import type { Article } from "@/lib/types";
import type { ArticleContent } from "@/lib/content-types";

function loadArticleContent(slug: string): Article | null {
  const staticArticle = staticArticles.find((a) => a.id === slug);
  if (!staticArticle) return null;

  const jsonPath = path.join(process.cwd(), "content", "articles", `${slug}.json`);
  if (!fs.existsSync(jsonPath)) return staticArticle;

  try {
    const raw = fs.readFileSync(jsonPath, "utf-8");
    const content: ArticleContent = JSON.parse(raw);
    return {
      ...staticArticle,
      focusKeyword: content.focusKeyword || staticArticle.focusKeyword,
      chapters: content.chapters || [],
      imageAlt: content.imageAlt || staticArticle.imageAlt,
    };
  } catch {
    return staticArticle;
  }
}

export function generateStaticParams() {
  return staticArticles.map((article) => ({ slug: article.id }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = loadArticleContent(slug);

  if (!article) {
    notFound();
  }

  return <ArticleDetailClient article={article} />;
}
