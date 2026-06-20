import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PublishedArticlesProvider } from "@/lib/PublishedArticlesContext";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Cortex AI — Premium AI Tools Directory & Article Hub",
    template: "%s | Cortex AI",
  },
  description:
    "Discover the best AI tools across every category. Curated reviews, expert comparisons, and a powerful video-to-text tool. Your gateway to the AI ecosystem.",
  keywords: [
    "AI tools",
    "AI directory",
    "AI articles",
    "video transcript",
    "YouTube transcript",
    "TikTok transcript",
    "AI comparison",
    "machine learning tools",
    "GPT",
    "Claude",
  ],
  openGraph: {
    title: "Cortex AI — Premium AI Tools Directory & Article Hub",
    description:
      "Discover the best AI tools across every category. Curated reviews, expert comparisons, and a powerful video-to-text tool.",
    type: "website",
    siteName: "Cortex AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cortex AI — Premium AI Tools Directory & Article Hub",
    description:
      "Discover the best AI tools across every category. Curated reviews, expert comparisons, and a powerful video-to-text tool.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script src="https://quge5.com/88/tag.min.js" data-zone="251740" async data-cfasync="false"></script>
        <script>(function(s){s.dataset.zone='11175750',s.src='https://n6wxm.com/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))</script>
      </head>
      <body className="min-h-screen bg-surface-950 antialiased">
        <PublishedArticlesProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </PublishedArticlesProvider>
      </body>
    </html>
  );
}
