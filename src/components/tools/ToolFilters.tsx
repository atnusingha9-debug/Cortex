"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { toolCategories } from "@/lib/data";

interface ToolFiltersProps {
  search: string;
  category: string;
  pricing: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onPricingChange: (value: string) => void;
  onClear: () => void;
  hasFilters: boolean;
}

const pricingOptions = ["All", "Free", "Freemium", "Paid"];

export function ToolFilters({
  search,
  category,
  pricing,
  onSearchChange,
  onCategoryChange,
  onPricingChange,
  onClear,
  hasFilters,
}: ToolFiltersProps) {
  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search tools..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-cortex-500/50 focus:ring-1 focus:ring-cortex-500/30 transition-all"
        />
        {search && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {toolCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
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

      {/* Pricing Filter */}
      <div className="flex items-center gap-2">
        <SlidersHorizontal className="w-4 h-4 text-gray-400" />
        <span className="text-sm text-gray-400 mr-2">Pricing:</span>
        {pricingOptions.map((opt) => (
          <button
            key={opt}
            onClick={() => onPricingChange(opt)}
            className={cn(
              "px-3 py-1 text-xs font-medium rounded-md border transition-all duration-200",
              pricing === opt
                ? "bg-gray-100 border-gray-200 text-gray-900"
                : "bg-transparent border-gray-200 text-gray-400 hover:text-gray-600"
            )}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* Clear filters */}
      <AnimatePresence>
        {hasFilters && (
          <motion.button
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            onClick={onClear}
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-3 h-3" />
            Clear all filters
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
