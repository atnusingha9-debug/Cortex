"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronUp, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { aiTools } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  FileText: <Sparkles className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Brain: <Sparkles className="w-5 h-5" />,
  Image: <Sparkles className="w-5 h-5" />,
  Code2: <Sparkles className="w-5 h-5" />,
  Volume2: <Sparkles className="w-5 h-5" />,
};

export function FeaturedTools() {
  const featured = aiTools.filter((t) => t.featured);

  return (
    <section className="relative py-24 lg:py-32">
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
              Featured Tools
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Curated AI Tools
            </h2>
            <p className="text-surface-400 mt-2 max-w-xl">
              Hand-picked essentials spanning every category, from writing to video generation.
            </p>
          </div>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-sm text-surface-400 hover:text-white transition-colors group"
          >
            View all tools
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {featured.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card glow hover className="p-6 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className={cn(
                    "w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center",
                    tool.gradient
                  )}>
                    {iconMap[tool.icon] || <Sparkles className="w-5 h-5 text-white" />}
                  </div>
                  <Badge variant={tool.pricing === "Free" ? "success" : tool.pricing === "Freemium" ? "warning" : "default"}>
                    {tool.pricing}
                  </Badge>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">{tool.name}</h3>
                <p className="text-sm text-surface-400 leading-relaxed mb-4 line-clamp-2">
                  {tool.tagline}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {tool.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs text-surface-500 bg-white/5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-1.5 text-xs text-surface-500">
                    <ChevronUp className="w-3.5 h-3.5" />
                    <span>{tool.upvotes.toLocaleString()}</span>
                  </div>
                  <Link
                    href={tool.url}
                    target={tool.url.startsWith("http") ? "_blank" : undefined}
                    rel={tool.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1 text-xs font-medium text-cortex-400 hover:text-cortex-300 transition-colors"
                  >
                    {tool.url.startsWith("http") ? "Visit" : "Open"}
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
