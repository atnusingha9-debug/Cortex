interface SEOArticleLayoutProps {
  children: React.ReactNode;
}

export function SEOArticleLayout({ children }: SEOArticleLayoutProps) {
  return (
    <div className="pt-24 pb-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert prose-sm sm:prose-base">
        {children}
      </article>
    </div>
  );
}
