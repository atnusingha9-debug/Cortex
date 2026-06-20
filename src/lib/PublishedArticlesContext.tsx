"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import type { Article } from "./types";

interface PublishedArticlesContextType {
  articles: Article[];
  publishArticle: (article: Article) => void;
}

const PublishedArticlesContext = createContext<PublishedArticlesContextType>({
  articles: [],
  publishArticle: () => {},
});

const STORAGE_KEY = "cortex-published-articles";

export function PublishedArticlesProvider({ children }: { children: ReactNode }) {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setArticles(JSON.parse(stored));
      }
    } catch {}
  }, []);

  const publishArticle = useCallback((article: Article) => {
    setArticles((prev) => {
      const updated = [article, ...prev];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {}
      return updated;
    });
  }, []);

  return (
    <PublishedArticlesContext.Provider value={{ articles, publishArticle }}>
      {children}
    </PublishedArticlesContext.Provider>
  );
}

export function usePublishedArticles() {
  return useContext(PublishedArticlesContext);
}
