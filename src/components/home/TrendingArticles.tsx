"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { articles } from "@/lib/data";

export function TrendingArticles() {
  const trending = articles.filter((a) => a.featured);

  return (
    <section className="relative py-24 lg:py-32 bg-surface-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <Badge variant="primary" className="mb-4">
              <Sparkles className="w-3 h-3 mr-1" />
              Trending Now
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Latest Insights
            </h2>
            <p className="text-surface-400 mt-2 max-w-xl">
              In-depth analysis, comparisons, and breaking news from the AI frontier.
            </p>
          </div>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm text-surface-400 hover:text-white transition-colors group"
          >
            All articles
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trending.slice(0, 3).map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={`/articles/${article.id}`}>
                <Card glow hover className="h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-900 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <Badge>{article.category}</Badge>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-surface-500 mb-3">
                      <span>{article.author}</span>
                      <span className="w-1 h-1 rounded-full bg-surface-600" />
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime} min read
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2 leading-snug line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-surface-400 leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 mt-4 text-xs text-surface-500">
                      <span>{formatDate(article.date)}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
