import { Hero } from "@/components/home/Hero";
import { FeaturedTools } from "@/components/home/FeaturedTools";
import { TrendingArticles } from "@/components/home/TrendingArticles";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedTools />
      <TrendingArticles />
    </>
  );
}
