import { notFound } from "next/navigation";
import { aiTools } from "@/lib/data";
import { ToolDetailClient } from "@/components/tools/ToolDetailClient";

export function generateStaticParams() {
  return aiTools.map((tool) => ({ slug: tool.id }));
}

export default async function ToolDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = aiTools.find((t) => t.id === slug);
  if (!tool) notFound();

  const related = aiTools.filter(
    (t) => t.category === tool.category && t.id !== tool.id
  ).slice(0, 3);

  return <ToolDetailClient tool={tool} related={related} />;
}
