"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Sparkles, ArrowRight, FileText } from "lucide-react";
import { aiTools, articles } from "@/lib/data";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const allArticles = articles;

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (open) onClose();
        else {
          const event = new CustomEvent("open-search");
          window.dispatchEvent(event);
        }
      }
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  const searchResults = useCallback(() => {
    if (!query.trim()) return { tools: [], articles: [] as typeof allArticles };

    const q = query.toLowerCase();

    const matchedTools = aiTools.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.tagline.toLowerCase().includes(q) ||
        t.tags.some((tag) => tag.toLowerCase().includes(q))
    );

    const matchedArticles = allArticles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.tags.some((tag) => tag.toLowerCase().includes(q))
    );

    return { tools: matchedTools, articles: matchedArticles };
  }, [query, allArticles]);

  const { tools: matchedTools, articles: matchedArticles } = searchResults();

  const handleSelect = (href: string) => {
    onClose();
    router.push(href);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15 }}
            className="relative w-full max-w-2xl bg-white border border-gray-200 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
          >
            {/* Search input */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-200">
              <Search className="w-5 h-5 text-gray-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search tools, articles, topics..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-gray-900 text-base placeholder-gray-400 focus:outline-none"
              />
              {query && (
                <button onClick={() => setQuery("")} className="text-gray-400 hover:text-gray-900 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              )}
              <kbd className="hidden sm:inline-flex px-2 py-0.5 text-xs text-gray-400 bg-gray-100 rounded border border-gray-200">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto">
              {!query.trim() && (
                <div className="p-8 text-center text-sm text-gray-500">
                  Type to search across {aiTools.length} tools and {allArticles.length} articles
                </div>
              )}

              {query.trim() && matchedTools.length === 0 && matchedArticles.length === 0 && (
                <div className="p-8 text-center text-sm text-gray-500">
                  No results for &quot;{query}&quot;
                </div>
              )}

              {matchedTools.length > 0 && (
                <div className="p-3 pb-0">
                  <p className="px-3 py-1.5 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Tools ({matchedTools.length})
                  </p>
                  {matchedTools.slice(0, 5).map((tool) => (
                    <button
                      key={tool.id}
                      onClick={() => handleSelect(tool.url.startsWith("/") ? tool.url : `/tools/${tool.id}`)}
                      className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors text-left group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cortex-500/20 to-accent-500/20 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-cortex-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{tool.name}</p>
                        <p className="text-xs text-gray-500 truncate">{tool.tagline}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors shrink-0" />
                    </button>
                  ))}
                  {matchedTools.length > 5 && (
                    <p className="px-3 py-2 text-xs text-gray-500">
                      +{matchedTools.length - 5} more tools
                    </p>
                  )}
                </div>
              )}

              {matchedArticles.length > 0 && (
                <div className="p-3">
                  <p className="px-3 py-1.5 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Articles ({matchedArticles.length})
                  </p>
                  {matchedArticles.slice(0, 5).map((article) => (
                    <button
                      key={article.id}
                      onClick={() => handleSelect(`/articles/${article.id}`)}
                      className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors text-left group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                        <FileText className="w-4 h-4 text-gray-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{article.title}</p>
                        <p className="text-xs text-gray-500 truncate">{article.category} · {article.readTime} min read</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors shrink-0" />
                    </button>
                  ))}
                  {matchedArticles.length > 5 && (
                    <p className="px-3 py-2 text-xs text-gray-500">
                      +{matchedArticles.length - 5} more articles
                    </p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
