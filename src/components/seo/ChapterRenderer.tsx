"use client";

import type { Chapter, ToolProfile } from "@/lib/content-types";

interface ChapterRendererProps {
  chapters: Chapter[];
  focusKeyword: string;
  heroImage?: string;
  heroAlt?: string;
}

function buildAlt(baseAlt: string, keyword: string, chapterHeading: string): string {
  const phrase = baseAlt || `Visual representation of ${keyword}`;
  if (phrase.toLowerCase().includes(keyword.toLowerCase())) return phrase;
  return `${phrase} – ${keyword} workflow for ${chapterHeading.toLowerCase()}`;
}

function ChapterImage({ src, alt, lazy }: { src: string; alt: string; lazy: boolean }) {
  if (!src) return null;
  return (
    <div className="relative rounded-2xl overflow-hidden my-10">
      <img
        src={src}
        alt={alt}
        loading={lazy ? "lazy" : "eager"}
        className="w-full aspect-video object-cover"
      />
    </div>
  );
}

function renderTextBlocks(blocks: string[]) {
  return blocks.map((block, i) => {
    if (block.startsWith("```")) {
      const code = block.replace(/```\w*\n?/, "").replace(/\n?```$/, "");
      return (
        <pre
          key={i}
          className="bg-surface-900 rounded-xl p-4 overflow-x-auto text-sm text-surface-200 border border-white/5 mb-5 font-mono"
        >
          <code>{code}</code>
        </pre>
      );
    }
    return (
      <p key={i} className="text-surface-300 leading-relaxed mb-5">
        {block}
      </p>
    );
  });
}

function ToolProfileCard({
  tool,
  keyword,
  chapterHeading,
}: {
  tool: ToolProfile;
  keyword: string;
  chapterHeading: string;
}) {
  return (
    <div className="my-8 p-5 bg-surface-900/40 border border-white/5 rounded-xl">
      <h3 className="text-lg font-bold text-white mb-3">{tool.heading}</h3>
      {tool.textBlocks.map((block, i) => (
        <p key={i} className="text-surface-300 leading-relaxed mb-3">
          {block}
        </p>
      ))}
      {tool.features && tool.features.length > 0 && (
        <div className="mt-4 space-y-2">
          {tool.features.map((feat, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-cortex-400 mt-1 shrink-0">&#9656;</span>
              <div>
                <h4 className="text-sm font-semibold text-white">{feat}</h4>
              </div>
            </div>
          ))}
        </div>
      )}
      {tool.url && (
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-cortex-400 hover:text-cortex-300 transition-colors mt-3"
        >
          Visit {tool.name} &rarr;
        </a>
      )}
    </div>
  );
}

export function ChapterRenderer({ chapters, focusKeyword, heroImage, heroAlt }: ChapterRendererProps) {
  return (
    <div className="space-y-4">
      {heroImage && (
        <div className="relative rounded-2xl overflow-hidden mb-10">
          <img
            src={heroImage}
            alt={heroAlt || `Overview of ${focusKeyword} featured in this guide`}
            loading="eager"
            className="w-full aspect-video object-cover"
          />
        </div>
      )}

      {chapters.map((chapter, i) => {
        const isH2 = chapter.level === 2;
        const HeadingTag = `h${chapter.level}` as "h2" | "h3" | "h4";
        const headingStyles: Record<number, string> = {
          2: "text-xl sm:text-2xl font-bold text-white mt-12 mb-4",
          3: "text-lg font-bold text-white mt-8 mb-3",
          4: "text-sm font-semibold text-cortex-300 uppercase tracking-wider mt-6 mb-2",
        };

        const altText = buildAlt(
          chapter.imageAlt || "",
          focusKeyword,
          chapter.heading
        );

        return (
          <section key={i} id={`chapter-${i}`}>
            <HeadingTag className={headingStyles[chapter.level]}>
              {chapter.heading}
            </HeadingTag>

            {renderTextBlocks(chapter.textBlocks)}

            {chapter.tools?.map((tool, ti) => (
              <ToolProfileCard
                key={ti}
                tool={tool}
                keyword={focusKeyword}
                chapterHeading={chapter.heading}
              />
            ))}

            {isH2 && chapter.imageSrc && (
              <ChapterImage src={chapter.imageSrc} alt={altText} lazy />
            )}
          </section>
        );
      })}
    </div>
  );
}
