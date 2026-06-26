"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Clock, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatDate, cn } from "@/lib/utils";
import { articles as staticArticles, articleCategories } from "@/lib/data";

export default function ArticlesPage() {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    if (category === "All") return staticArticles;
    return staticArticles.filter((a) => a.category === category);
  }, [category]);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <Badge variant="primary" className="mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            Insights
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Articles & Insights
          </h1>
          <p className="text-gray-500 max-w-2xl">
            In-depth analysis, expert comparisons, and breaking news from the cutting edge of artificial intelligence.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-8">
          {articleCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                "px-3.5 py-1.5 text-sm font-medium rounded-lg border transition-all duration-200",
                category === cat
                  ? "bg-cortex-500/10 border-cortex-500/30 text-cortex-300"
                  : "bg-transparent border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-200"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {filtered.map((article, index) => {
            return (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                <Link href={`/articles/${article.id}`}>
                  <Card hover className="flex flex-col sm:flex-row overflow-hidden">
                    <div className="relative sm:w-72 h-48 sm:h-auto shrink-0">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/40 via-transparent to-transparent sm:bg-gradient-to-l sm:from-gray-900/40 sm:via-transparent sm:to-transparent" />
                    </div>
                    <div className="p-6 flex flex-col justify-center flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="default">{article.category}</Badge>
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <Clock className="w-3 h-3" />
                          {article.readTime} min read
                        </span>
                      </div>
                      <h2 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                        {article.title}
                      </h2>
                      <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <span className="text-gray-700">{article.author}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-300" />
                          <span>{formatDate(article.date)}</span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-cortex-400 transition-all">
                          Read more
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
