import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Cortex AI — Premium AI Tools Directory & Article Hub",
    template: "%s | Cortex AI",
  },
  description:
    "Discover the best AI tools across every category. Curated reviews and expert comparisons. Your gateway to the AI ecosystem.",
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
      "Discover the best AI tools across every category. Curated reviews and expert comparisons.",
    type: "website",
    siteName: "Cortex AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cortex AI — Premium AI Tools Directory & Article Hub",
    description:
      "Discover the best AI tools across every category. Curated reviews and expert comparisons.",
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
      </head>
      <body className="min-h-screen bg-surface-950 antialiased">
          <Header />
          <main>{children}</main>
          <Footer />
      </body>
    </html>
  );
}
