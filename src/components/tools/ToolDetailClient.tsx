"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronUp, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import type { AITool } from "@/lib/types";

export function ToolDetailClient({ tool, related }: { tool: AITool; related: AITool[] }) {
  const isInternal = tool.url.startsWith("/");

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to tools
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex items-start gap-6 mb-8"
        >
          <div
            className={cn(
              "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center shrink-0",
              tool.gradient
            )}
          >
            <span className="text-2xl font-bold text-white">{tool.name.charAt(0)}</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{tool.name}</h1>
              <Badge
                variant={
                  tool.pricing === "Free"
                    ? "success"
                    : tool.pricing === "Freemium"
                      ? "warning"
                      : "default"
                }
              >
                {tool.pricing}
              </Badge>
            </div>
            <p className="text-gray-500 text-lg">{tool.tagline}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Card className="p-6 mb-8">
            <p className="text-gray-600 leading-relaxed mb-6">{tool.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {tool.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs text-gray-400 bg-gray-100 rounded-full border border-gray-200"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center gap-1.5 text-sm text-gray-400">
                <ChevronUp className="w-4 h-4" />
                <span>{tool.upvotes.toLocaleString()} upvotes</span>
              </div>
              <Link
                href={tool.url}
                target={isInternal ? undefined : "_blank"}
                rel={isInternal ? undefined : "noopener noreferrer"}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-cortex-500 to-accent-500 rounded-xl hover:from-cortex-400 hover:to-accent-400 transition-all"
              >
                {isInternal ? "Open Tool" : "Visit Website"}
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </Card>
        </motion.div>

        {related.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              More in {tool.category}
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link key={r.id} href={`/tools/${r.id}`}>
                  <Card hover className="p-4 h-full">
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">{r.name}</h3>
                    <p className="text-xs text-gray-400 line-clamp-2">{r.tagline}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
