import Link from "next/link";

const relatedContent: Record<string, { href: string; label: string }[]> = {
  "future-of-ai-agents-2026": [
    { href: "/ai-coding-assistants", label: "AI coding assistants" },
    { href: "/build-ai-agent-2026-guide", label: "Build your own AI agent" },
  ],
  "openai-gpt-5-preview": [
    { href: "/chatgpt-vs-claude-vs-gemini-2026", label: "ChatGPT vs Claude vs Gemini" },
    { href: "/ai-coding-assistants", label: "AI coding assistants" },
  ],
  "video-transcription-ai-comparison": [
    { href: "/best-ai-transcription-tools-compared", label: "Best AI transcription tools" },
    { href: "/ai-video-editing-beginners-guide", label: "AI video editing guide" },
  ],
  "ai-coding-tools-2026": [
    { href: "/ai-code-generation-complete-guide", label: "AI code generation guide" },
    { href: "/ai-coding-assistants", label: "AI coding assistants" },
  ],
  "ai-video-generation-evolution": [
    { href: "/ai-video-editing-beginners-guide", label: "AI video editing for beginners" },
    { href: "/best-ai-tools-content-creation-2026", label: "Best AI tools for content creation" },
  ],
  "ethical-ai-enterprise": [
    { href: "/future-of-ai-agents-2026", label: "Future of AI agents" },
    { href: "/ai-for-small-business-automation", label: "AI for small business" },
  ],
  "best-ai-tools-content-creation-2026": [
    { href: "/ai-tools-for-studying", label: "AI tools for studying" },
    { href: "/ai-video-generation-evolution", label: "AI video generation evolution" },
  ],
  "ai-video-editing-beginners-guide": [
    { href: "/video-transcription-ai-comparison", label: "Video transcription comparison" },
    { href: "/best-ai-tools-content-creation-2026", label: "Best AI content creation tools" },
  ],
  "chatgpt-vs-claude-vs-gemini-2026": [
    { href: "/openai-gpt-5-preview", label: "GPT-5 preview" },
    { href: "/ai-coding-tools-2026", label: "AI coding tools comparison" },
  ],
  "free-ai-tools-students-2026": [
    { href: "/ai-tools-for-studying", label: "AI tools for studying" },
    { href: "/ai-tools-for-research", label: "AI tools for research" },
  ],
  "ai-for-seo-tools-strategies": [
    { href: "/ai-social-media-management-tools", label: "AI social media tools" },
    { href: "/best-ai-tools-content-creation-2026", label: "Best AI content creation tools" },
  ],
  "best-ai-image-generators-compared": [
    { href: "/best-ai-tools-content-creation-2026", label: "Best AI content creation tools" },
    { href: "/ai-video-generation-evolution", label: "AI video generation" },
  ],
  "build-ai-agent-2026-guide": [
    { href: "/future-of-ai-agents-2026", label: "Future of AI agents" },
    { href: "/ai-coding-tools-2026", label: "AI coding tools" },
  ],
  "ai-for-small-business-automation": [
    { href: "/ethical-ai-enterprise", label: "Ethical AI for enterprise" },
    { href: "/ai-social-media-management-tools", label: "AI social media tools" },
  ],
  "best-ai-transcription-tools-compared": [
    { href: "/video-transcription-ai-comparison", label: "Video transcription face-off" },
    { href: "/ai-video-editing-beginners-guide", label: "AI video editing guide" },
  ],
  "ai-code-generation-complete-guide": [
    { href: "/ai-coding-tools-2026", label: "AI coding tools comparison" },
    { href: "/ai-coding-assistants", label: "AI coding assistants" },
  ],
  "best-ai-voice-generators-2026": [
    { href: "/best-ai-tools-content-creation-2026", label: "Best AI content creation tools" },
    { href: "/video-transcription-ai-comparison", label: "Video transcription tools" },
  ],
  "ai-social-media-management-tools": [
    { href: "/ai-for-seo-tools-strategies", label: "AI for SEO strategies" },
    { href: "/best-ai-tools-content-creation-2026", label: "Best AI content creation tools" },
  ],
};

export function InternalLinkEngine({ currentSlug }: { currentSlug: string }) {
  const links = relatedContent[currentSlug];
  if (!links || links.length === 0) return null;

  return (
    <div className="mt-12 p-5 bg-cortex-500/5 border border-cortex-500/10 rounded-xl">
      <p className="text-xs font-semibold text-cortex-400 uppercase tracking-wider mb-3">
        Related Reading
      </p>
      <div className="flex flex-wrap gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="inline-flex items-center gap-1.5 text-sm text-surface-300 hover:text-cortex-300 transition-colors bg-white/[0.03] hover:bg-white/[0.06] px-3 py-1.5 rounded-lg border border-white/5"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function getInternalLinks(slug: string) {
  return relatedContent[slug] || [];
}
