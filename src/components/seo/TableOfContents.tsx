"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ListTree, ChevronUp } from "lucide-react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents({ chapters }: { chapters: { heading: string; level: number }[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  const items: TOCItem[] = chapters.map((ch, i) => ({
    id: `chapter-${i}`,
    text: ch.heading,
    level: ch.level,
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px" }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  };

  return (
    <div className="sticky top-28 z-30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors bg-white backdrop-blur-md border border-gray-200 rounded-xl px-4 py-2.5 w-full"
      >
        <ListTree className="w-4 h-4 text-cortex-400" />
        <span>Table of Contents</span>
        <ChevronUp
          className={`w-3.5 h-3.5 ml-auto transition-transform duration-200 ${
            isOpen ? "" : "rotate-180"
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden mt-1"
          >
            <div className="bg-white backdrop-blur-md border border-gray-200 rounded-xl p-3 space-y-0.5">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollTo(item.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left text-sm px-3 py-1.5 rounded-lg transition-all duration-200 ${
                    activeId === item.id
                      ? "bg-cortex-500/10 text-cortex-300 font-medium"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                  }`}
                  style={{ paddingLeft: `${12 + (item.level - 2) * 16}px` }}
                >
                  {item.text}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
