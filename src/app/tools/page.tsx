"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { ToolFilters } from "@/components/tools/ToolFilters";
import { ToolCard } from "@/components/tools/ToolCard";
import { Badge } from "@/components/ui/Badge";
import { aiTools } from "@/lib/data";

export default function ToolsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [pricing, setPricing] = useState("All");

  const filtered = useMemo(() => {
    return aiTools.filter((tool) => {
      const matchesSearch =
        !search ||
        tool.name.toLowerCase().includes(search.toLowerCase()) ||
        tool.tagline.toLowerCase().includes(search.toLowerCase()) ||
        tool.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));

      const matchesCategory = category === "All" || tool.category === category;
      const matchesPricing = pricing === "All" || tool.pricing === pricing;

      return matchesSearch && matchesCategory && matchesPricing;
    });
  }, [search, category, pricing]);

  const hasFilters = Boolean(search || category !== "All" || pricing !== "All");

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setPricing("All");
  };

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
            Directory
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            AI Tools Directory
          </h1>
          <p className="text-gray-500 max-w-2xl">
            Explore {aiTools.length} carefully curated AI tools across {new Set(aiTools.map((t) => t.category)).size} categories. Filter by category, pricing, or search for exactly what you need.
          </p>
        </motion.div>

        <ToolFilters
          search={search}
          category={category}
          pricing={pricing}
          onSearchChange={setSearch}
          onCategoryChange={setCategory}
          onPricingChange={setPricing}
          onClear={clearFilters}
          hasFilters={hasFilters}
        />

        <div className="mt-8 mb-4 flex items-center justify-between text-sm text-gray-400">
          <span>
            Showing{" "}
            <span className="text-gray-900 font-medium">{filtered.length}</span> tool{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {filtered.map((tool, index) => (
              <ToolCard key={tool.id} tool={tool} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg mb-2">No tools found</p>
            <p className="text-gray-400 text-sm">
              Try adjusting your filters or search terms
            </p>
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="mt-4 px-4 py-2 text-sm text-cortex-400 hover:text-cortex-300 transition-colors"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
