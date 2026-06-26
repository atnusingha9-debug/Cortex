"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { TableOfContents } from "@/components/seo/TableOfContents";
import { ChapterRenderer } from "@/components/seo/ChapterRenderer";
import { InternalLinkEngine } from "@/components/seo/InternalLinkEngine";
import { formatDate } from "@/lib/utils";
import type { Article } from "@/lib/types";

export function ArticleDetailClient({ article }: { article: Article }) {
  const chapters = article.chapters || [];
  const hasChapterContent = chapters.length > 0;

  const tocItems = hasChapterContent
    ? chapters.filter((ch) => ch.level === 2 || ch.level === 3).map((ch) => ({ heading: ch.heading, level: ch.level }))
    : [];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to articles
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="default">
              {article.category}
            </Badge>
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Clock className="w-3 h-3" />
              {article.readTime} min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            {article.title}
          </h1>

          <div className="flex items-center gap-3 text-sm text-gray-400 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cortex-500 to-accent-500 flex items-center justify-center text-xs font-bold text-white">
                {article.author.charAt(0)}
              </div>
              <div>
                <p className="text-gray-700 font-medium">{article.author}</p>
                <p className="text-gray-400 text-xs">{article.authorRole}</p>
              </div>
            </div>
            <span className="w-px h-8 bg-gray-200" />
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(article.date)}
            </span>
          </div>
        </motion.div>

        {hasChapterContent && tocItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mb-10"
          >
            <TableOfContents chapters={tocItems} />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {hasChapterContent ? (
            <ChapterRenderer
              chapters={chapters}
              focusKeyword={article.focusKeyword || "ai tools"}
              heroImage={article.image}
              heroAlt={article.imageAlt || `${article.title} – comprehensive guide`}
            />
          ) : (
            <>
              <div className="relative rounded-2xl overflow-hidden mb-10">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full aspect-video object-cover"
                />
              </div>
              <article className="prose prose-gray prose-sm sm:prose-base max-w-none">
                {article.content.split("\n\n").map((paragraph, i) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2 key={i} className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4">
                        {paragraph.replace("## ", "")}
                      </h2>
                    );
                  }
                  return (
                    <p key={i} className="text-gray-600 leading-relaxed mb-5">
                      {paragraph}
                    </p>
                  );
                })}
              </article>
            </>
          )}
        </motion.div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs text-gray-400 bg-gray-100 rounded-full border border-gray-200"
              >
                #{tag}
              </span>
            ))}
          </div>

          <InternalLinkEngine currentSlug={article.id} />
        </div>
      </div>
    </div>
  );
}
