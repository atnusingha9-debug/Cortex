import { type AITool, type Article } from "./types";

export const toolCategories = [
  "All",
  "Text & Writing",
  "Image & Design",
  "Video & Motion",
  "Audio & Speech",
  "Code & Development",
  "Data & Analytics",
  "Marketing & SEO",
  "Productivity",
  "Research",
] as const;

export const aiTools: AITool[] = [
  {
    id: "cortex-publish",
    name: "Cortex Publish",
    tagline: "Auto-generate and publish articles from video URLs",
    description:
      "Private admin tool that extracts transcripts from YouTube, TikTok, and Instagram videos and automatically generates and publishes full articles to the site.",
    category: "Productivity",
    tags: ["transcript", "video", "publishing", "automation"],
    pricing: "Free",
    url: "/video-to-text",
    icon: "FileText",
    featured: false,
    upvotes: 0,
    gradient: "from-indigo-500 to-cyan-500",
  },
  {
    id: "gpt-4",
    name: "GPT-4o",
    tagline: "Multimodal reasoning across text, image, and audio",
    description:
      "OpenAI's most advanced model with real-time reasoning, vision understanding, and multilingual capabilities for any task.",
    category: "Text & Writing",
    tags: ["llm", "multimodal", "reasoning", "chat"],
    pricing: "Freemium",
    url: "https://chatgpt.com",
    icon: "Sparkles",
    featured: true,
    upvotes: 15230,
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    id: "claude",
    name: "Claude 4",
    tagline: "Thoughtful AI assistant for complex reasoning",
    description:
      "Anthropic's frontier model excelling at deep analysis, coding, and nuanced writing with industry-leading safety.",
    category: "Text & Writing",
    tags: ["llm", "reasoning", "analysis", "coding"],
    pricing: "Freemium",
    url: "https://claude.ai",
    icon: "Brain",
    featured: true,
    upvotes: 12450,
    gradient: "from-orange-400 to-rose-500",
  },
  {
    id: "midjourney",
    name: "Midjourney",
    tagline: "Generate cinematic AI imagery from text prompts",
    description:
      "Industry-leading image generation with unparalleled artistic quality, style consistency, and compositional control.",
    category: "Image & Design",
    tags: ["image", "generation", "art", "design"],
    pricing: "Paid",
    url: "https://midjourney.com",
    icon: "Image",
    featured: true,
    upvotes: 18920,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "cursor",
    name: "Cursor",
    tagline: "AI-first code editor for accelerated development",
    description:
      "VS Code fork with deep AI integration, agentic coding, multi-file editing, and context-aware completions.",
    category: "Code & Development",
    tags: ["coding", "ide", "editor", "agent"],
    pricing: "Freemium",
    url: "https://cursor.com",
    icon: "Code2",
    featured: true,
    upvotes: 9870,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    tagline: "Ultra-realistic AI voice synthesis and cloning",
    description:
      "Generate lifelike speech in 29+ languages with emotional range, voice cloning, and real-time API.",
    category: "Audio & Speech",
    tags: ["voice", "tts", "audio", "synthesis"],
    pricing: "Freemium",
    url: "https://elevenlabs.io",
    icon: "Volume2",
    featured: true,
    upvotes: 7650,
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    tagline: "AI-powered research and knowledge discovery",
    description:
      "Conversational search engine with real-time citations, deep research mode, and comprehensive source analysis.",
    category: "Research",
    tags: ["search", "research", "knowledge", "citations"],
    pricing: "Freemium",
    url: "https://perplexity.ai",
    icon: "Search",
    featured: false,
    upvotes: 8920,
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    id: "runway",
    name: "Runway Gen-4",
    tagline: "Generate and edit video with text prompts",
    description:
      "Advanced video generation platform for creating, editing, and enhancing video content using natural language.",
    category: "Video & Motion",
    tags: ["video", "generation", "editing", "motion"],
    pricing: "Paid",
    url: "https://runwayml.com",
    icon: "Video",
    featured: false,
    upvotes: 6540,
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    tagline: "AI pair programmer for every language",
    description:
      "Real-time code suggestions, chat assistance, and pull request summaries integrated directly into your workflow.",
    category: "Code & Development",
    tags: ["coding", "assistant", "ide", "autocomplete"],
    pricing: "Paid",
    url: "https://github.com/features/copilot",
    icon: "Terminal",
    featured: false,
    upvotes: 14300,
    gradient: "from-green-500 to-emerald-600",
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    tagline: "Write, brainstorm, and organize with AI",
    description:
      "AI-powered workspace for note-taking, project management, knowledge bases, and collaborative writing.",
    category: "Productivity",
    tags: ["writing", "notes", "productivity", "workspace"],
    pricing: "Paid",
    url: "https://notion.so",
    icon: "Notebook",
    featured: false,
    upvotes: 5430,
    gradient: "from-stone-400 to-stone-600",
  },
  {
    id: "synthesia",
    name: "Synthesia",
    tagline: "Create professional AI avatar videos",
    description:
      "Generate studio-quality videos with AI avatars from text scripts — no cameras, actors, or studios needed.",
    category: "Video & Motion",
    tags: ["video", "avatars", "presentation", "content"],
    pricing: "Paid",
    url: "https://synthesia.io",
    icon: "UserCircle2",
    featured: false,
    upvotes: 4320,
    gradient: "from-rose-400 to-red-500",
  },
  {
    id: "jasper",
    name: "Jasper",
    tagline: "AI content platform for marketing teams",
    description:
      "Enterprise-grade AI writing assistant built for brand voice consistency, campaign creation, and team collaboration.",
    category: "Marketing & SEO",
    tags: ["writing", "marketing", "content", "brand"],
    pricing: "Paid",
    url: "https://jasper.ai",
    icon: "PenLine",
    featured: false,
    upvotes: 3870,
    gradient: "from-amber-400 to-yellow-500",
  },
  {
    id: "huggingface",
    name: "Hugging Face",
    tagline: "Open platform for AI models and datasets",
    description:
      "The largest open-source AI community for hosting models, datasets, and collaborative ML development.",
    category: "Research",
    tags: ["open-source", "models", "community", "ml"],
    pricing: "Free",
    url: "https://huggingface.co",
    icon: "Globe",
    featured: false,
    upvotes: 9870,
    gradient: "from-yellow-300 to-amber-500",
  },
  {
    id: "descript",
    name: "Descript",
    tagline: "Edit audio and video by editing text",
    description:
      "Revolutionary media editor that transcribes your content so you can edit audio/video as easily as a doc.",
    category: "Video & Motion",
    tags: ["video", "audio", "editing", "transcript"],
    pricing: "Freemium",
    url: "https://descript.com",
    icon: "Mic2",
    featured: false,
    upvotes: 4560,
    gradient: "from-sky-400 to-indigo-500",
  },
  {
    id: "copy-ai",
    name: "Copy.ai",
    tagline: "AI-powered GTM workflows for revenue teams",
    description:
      "Automate go-to-market workflows with AI-generated content, lead research, and multi-channel campaigns.",
    category: "Marketing & SEO",
    tags: ["marketing", "sales", "content", "automation"],
    pricing: "Freemium",
    url: "https://copy.ai",
    icon: "Copy",
    featured: false,
    upvotes: 2980,
    gradient: "from-teal-400 to-cyan-500",
  },
  {
    id: "stable-diffusion",
    name: "Stable Diffusion 3",
    tagline: "Open-source image generation with precision",
    description:
      "State-of-the-art open-source text-to-image model with superior typography, composition, and prompt adherence.",
    category: "Image & Design",
    tags: ["image", "generation", "open-source", "art"],
    pricing: "Free",
    url: "https://stability.ai",
    icon: "Palette",
    featured: false,
    upvotes: 12300,
    gradient: "from-pink-500 to-purple-600",
  },
  {
    id: "otter",
    name: "Otter.ai",
    tagline: "AI meeting assistant that takes notes",
    description:
      "Automatic meeting transcription, action items, and summaries integrated with Zoom, Teams, and Google Meet.",
    category: "Productivity",
    tags: ["meetings", "transcript", "notes", "productivity"],
    pricing: "Freemium",
    url: "https://otter.ai",
    icon: "Headphones",
    featured: false,
    upvotes: 3670,
    gradient: "from-blue-400 to-blue-600",
  },
  {
    id: "gamma",
    name: "Gamma",
    tagline: "Create stunning presentations with AI",
    description:
      "AI-powered presentation builder that turns your ideas into polished slides, documents, and web pages in seconds.",
    category: "Productivity",
    tags: ["presentation", "design", "slides", "content"],
    pricing: "Freemium",
    url: "https://gamma.app",
    icon: "Presentation",
    featured: false,
    upvotes: 5120,
    gradient: "from-green-400 to-emerald-500",
  },
];

export const articles: Article[] = [
  {
    id: "future-of-ai-agents-2026",
    title: "The Rise of Autonomous AI Agents: What to Expect in 2026",
    excerpt:
      "From self-executing workflows to multi-agent swarms, autonomous AI agents are reshaping how businesses operate. Here's what the landscape looks like now.",
    content: `The concept of AI agents has evolved dramatically over the past year. What began as simple chatbot interfaces has transformed into autonomous digital workers capable of executing complex, multi-step tasks with minimal human oversight.

In 2026, we're seeing three distinct categories of AI agents emerge: task-specific agents that excel at narrow functions, generalist agents that can pivot across domains, and multi-agent systems where specialized agents collaborate to solve complex problems.

The implications for businesses are profound. Companies deploying agentic workflows report 40-60% reductions in operational overhead for knowledge work tasks. From automated code review pipelines to self-serve customer resolution systems, the agent economy is accelerating faster than most predicted.

However, challenges remain. Reliability, safety alignment, and the "handoff problem" — where agents need to seamlessly transfer context to humans or other agents — are active areas of research. The companies that crack these challenges will define the next era of enterprise software.`,
    category: "Industry Trends",
    author: "Alex Chen",
    authorRole: "Senior AI Analyst",
    date: "2026-06-15",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    tags: ["ai agents", "automation", "enterprise", "future"],
    featured: true,
  },
  {
    id: "openai-gpt-5-preview",
    title: "GPT-5: Everything We Know About OpenAI's Next Frontier Model",
    excerpt:
      "OpenAI is preparing its most ambitious release yet. We analyze leaked benchmarks, new capabilities, and what GPT-5 means for developers.",
    content: `OpenAI's trajectory from GPT-3.5 to GPT-4o has been nothing short of remarkable. Now, whispers from inside the organization suggest GPT-5 will represent a paradigm shift rather than an incremental update.

Key rumored features include true multimodal reasoning with video understanding, million-token context windows, and significantly improved agentic capabilities. Early benchmark leaks suggest GPT-5 achieves 95% on HumanEval and approaches PhD-level reasoning on domain-specific tests.

For developers, the implications are substantial. The expanded context window alone enables processing entire codebases in a single pass, while improved reasoning capabilities reduce the need for complex chain-of-thought prompting strategies.

Pricing remains a concern, with sources indicating API costs could be 5-10x current GPT-4o rates for the premium tier. However, a distilled "GPT-5 Mini" is expected to maintain competitive pricing for high-volume use cases.`,
    category: "Breaking News",
    author: "Sarah Mitchell",
    authorRole: "Tech Reporter",
    date: "2026-06-12",
    readTime: 8,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=400&fit=crop",
    tags: ["openai", "gpt-5", "llm", "breaking"],
    featured: true,
  },
  {
    id: "video-transcription-ai-comparison",
    title: "Video Transcription Face-Off: AI Tools Compared for Accuracy & Speed",
    excerpt:
      "We tested 8 AI transcription tools across YouTube, podcasts, and noisy recordings. Here's how Whisper, Descript, and Cortex Transcript stack up.",
    content: `Accurate video transcription has become essential for content creators, journalists, and businesses alike. With the proliferation of AI-powered tools, the gap between human and machine transcription accuracy has narrowed dramatically.

Our comprehensive test evaluated 8 transcription tools across 50 videos spanning three categories: clean studio recordings, noisy real-world footage, and technical content with specialized terminology. We measured word error rate (WER), processing speed, speaker diarization accuracy, and cost per hour of content.

The results reveal a market segmenting into three tiers: premium enterprise solutions offering near-human accuracy at $0.25+/minute, mid-range tools balancing cost and quality, and open-source alternatives like Whisper that deliver impressive results for zero cost — albeit with higher technical requirements.

Cortex Transcript, our native tool, performed competitively across all categories with a 4.2% WER on clean audio and 8.7% on noisy recordings, positioning it among the top performers in the free tier.`,
    category: "Comparisons",
    author: "Marcus Webb",
    authorRole: "Product Engineer",
    date: "2026-06-08",
    readTime: 10,
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=400&fit=crop",
    tags: ["transcription", "whisper", "comparison", "tools"],
    featured: true,
  },
  {
    id: "ai-coding-tools-2026",
    title: "The State of AI Coding Assistants: Cursor, Copilot & Beyond",
    excerpt:
      "AI coding tools have evolved from autocomplete to autonomous agents. We compare the leading options and predict where the space is heading.",
    content: `The AI-assisted coding landscape has undergone a dramatic transformation. What started as simple autocomplete suggestions has evolved into AI agents that can understand entire codebases, plan architectural changes, and execute multi-file refactors autonomously.

Cursor has emerged as the frontrunner with its agentic mode, allowing developers to describe features in natural language and have them implemented across multiple files with proper error handling and testing. GitHub Copilot, now in its third major iteration, has responded with deeper IDE integration and its own agent capabilities.

The next frontier is "self-healing code" — AI that not only writes code but monitors production systems, detects anomalies, and automatically generates and deploys fixes. While still early, several startups are already demonstrating promising prototypes.

For individual developers, the message is clear: proficiency with AI coding tools is no longer optional. The productivity differential between developers who leverage these tools and those who don't is approaching 10x on complex tasks.`,
    category: "Developer Tools",
    author: "Priya Patel",
    authorRole: "Senior Developer Advocate",
    date: "2026-06-05",
    readTime: 7,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    tags: ["coding", "cursor", "copilot", "developer-tools"],
    featured: true,
  },
  {
    id: "ai-video-generation-evolution",
    title: "From Text to Cinema: The Evolution of AI Video Generation",
    excerpt:
      "Runway Gen-4, Sora, and Pika 2.0 are redefining what's possible. We analyze the technology, limitations, and creative potential of modern AI video.",
    content: `The journey from grainy 4-second AI clips to cinematic-quality video generation has been remarkably short. Today's models can produce 60-second 4K videos with consistent characters, coherent narrative structure, and increasingly natural motion.

Runway Gen-4 leads in creative control with its multi-modal editing capabilities, allowing creators to modify specific elements within a generated video using text, images, or video references. OpenAI's Sora, while limited in availability, demonstrates superior physics understanding and temporal coherence. Pika 2.0 has carved out a niche with its user-friendly interface and rapid iteration capabilities.

The key technical breakthrough enabling this progress is the shift from pure diffusion models to diffusion-transformer hybrids, which better handle the temporal dimension of video. These architectures understand not just what objects look like, but how they move and interact over time.

Despite the impressive progress, limitations persist. Fine-grained control over character actions, consistent multi-character interactions, and realistic hand movements remain challenging. The industry consensus suggests we're 12-18 months away from production-ready fully generated video content.`,
    category: "Deep Dives",
    author: "Alex Chen",
    authorRole: "Senior AI Analyst",
    date: "2026-05-28",
    readTime: 12,
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=400&fit=crop",
    tags: ["video generation", "runway", "sora", "deep-dive"],
    featured: false,
  },
  {
    id: "ethical-ai-enterprise",
    title: "Building Ethical AI Systems: A Practical Enterprise Framework",
    excerpt:
      "Beyond the hype, companies need actionable ethics frameworks. Here's how leading enterprises are operationalizing responsible AI development.",
    content: `As AI systems become more powerful and autonomous, the ethical frameworks governing their development and deployment have moved from academic discussions to urgent business imperatives. Enterprises are discovering that ethical AI isn't just about avoiding harm — it's about building trust, mitigating regulatory risk, and creating sustainable competitive advantage.

This article presents a practical framework for enterprise AI ethics based on our analysis of 50 Fortune 500 companies' AI governance programs. The framework centers on five pillars: transparency, accountability, fairness, privacy, and robustness.

Transparency requires clear documentation of model capabilities, limitations, and decision-making processes. Accountability establishes clear ownership for AI system outcomes. Fairness involves systematic bias testing across demographic dimensions. Privacy extends beyond data protection to include inference privacy and model inversion resistance. Robustness ensures systems perform reliably across distribution shifts and adversarial conditions.

Implementing this framework doesn't require slowing AI adoption. On the contrary, companies with mature AI governance report 30% faster deployment times because ethical review is integrated into the development pipeline rather than bolted on at the end.`,
    category: "Opinion",
    author: "Dr. Elena Vasquez",
    authorRole: "AI Ethics Researcher",
    date: "2026-05-20",
    readTime: 9,
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
    tags: ["ethics", "enterprise", "governance", "responsible-ai"],
    featured: false,
  },
];

export const articleCategories = [
  "All",
  "Breaking News",
  "Industry Trends",
  "Developer Tools",
  "Deep Dives",
  "Comparisons",
  "Opinion",
];

export const categories = toolCategories;
