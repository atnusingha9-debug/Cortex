"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronUp, ExternalLink, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { AITool } from "@/lib/types";

interface ToolCardProps {
  tool: AITool;
  index: number;
}

const iconMap: Record<string, React.ReactNode> = {
  FileText: <Sparkles className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Brain: <Sparkles className="w-5 h-5" />,
  Image: <Sparkles className="w-5 h-5" />,
  Code2: <Sparkles className="w-5 h-5" />,
  Volume2: <Sparkles className="w-5 h-5" />,
  Search: <Sparkles className="w-5 h-5" />,
  Video: <Sparkles className="w-5 h-5" />,
  Terminal: <Sparkles className="w-5 h-5" />,
  Notebook: <Sparkles className="w-5 h-5" />,
  UserCircle2: <Sparkles className="w-5 h-5" />,
  PenLine: <Sparkles className="w-5 h-5" />,
  Globe: <Sparkles className="w-5 h-5" />,
  Mic2: <Sparkles className="w-5 h-5" />,
  Copy: <Sparkles className="w-5 h-5" />,
  Palette: <Sparkles className="w-5 h-5" />,
  Headphones: <Sparkles className="w-5 h-5" />,
  Presentation: <Sparkles className="w-5 h-5" />,
};

export function ToolCard({ tool, index }: ToolCardProps) {
  const isInternal = tool.url.startsWith("/");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <Card glow hover className="p-6 h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div
            className={cn(
              "w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center",
              tool.gradient
            )}
          >
            {iconMap[tool.icon] || <Sparkles className="w-5 h-5 text-white" />}
          </div>
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

        <h3 className="text-lg font-semibold text-gray-900 mb-1.5">{tool.name}</h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-3 flex-1">
          {tool.tagline}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {tool.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs text-gray-400 bg-gray-100 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200 mt-auto">
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <ChevronUp className="w-3.5 h-3.5" />
            <span>{tool.upvotes.toLocaleString()}</span>
          </div>
          <Link
            href={tool.url}
            target={isInternal ? undefined : "_blank"}
            rel={isInternal ? undefined : "noopener noreferrer"}
            className="inline-flex items-center gap-1 text-xs font-medium text-cortex-400 hover:text-cortex-300 transition-colors"
          >
            {isInternal ? "Open Tool" : "Visit"}
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </Card>
    </motion.div>
  );
}
