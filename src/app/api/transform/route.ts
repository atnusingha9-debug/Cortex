import { NextRequest, NextResponse } from "next/server";

interface TransformRequest {
  url: string;
}

interface TransformResponse {
  rawTranscript: string;
  summarizedArticle: string;
  socialPost: string;
  metadata: {
    title: string;
    duration: string;
    platform: string;
  };
}

function extractPlatform(url: string): string | null {
  if (url.includes("youtube.com") || url.includes("youtu.be")) return "YouTube";
  if (url.includes("tiktok.com")) return "TikTok";
  if (url.includes("instagram.com")) return "Instagram";
  return null;
}

function extractVideoId(url: string, platform: string): string | null {
  switch (platform) {
    case "YouTube": {
      const match = url.match(
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/
      );
      return match ? match[1] : null;
    }
    case "TikTok": {
      const match = url.match(/tiktok\.com\/@[\w.-]+\/video\/(\d+)/);
      return match ? match[1] : null;
    }
    case "Instagram": {
      const match = url.match(/instagram\.com\/(?:p|reel|tv)\/([a-zA-Z0-9_-]+)/);
      return match ? match[1] : null;
    }
    default:
      return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: TransformRequest = await request.json();

    if (!body.url || typeof body.url !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid 'url' field in request body" },
        { status: 400 }
      );
    }

    const platform = extractPlatform(body.url);
    if (!platform) {
      return NextResponse.json(
        {
          error:
            "Unsupported URL. Please provide a valid YouTube, TikTok, or Instagram video URL.",
        },
        { status: 400 }
      );
    }

    const videoId = extractVideoId(body.url, platform);
    if (!videoId) {
      return NextResponse.json(
        { error: `Could not extract video ID from the provided ${platform} URL.` },
        { status: 400 }
      );
    }

    // ============================================================
    // PRODUCTION IMPLEMENTATION NOTES:
    // ============================================================
    // 
    // For YouTube, use `ytdl` or `yt-dlp` to fetch video metadata
    // and audio, then pipe to Whisper API (local via Ollama, or
    // cloud via OpenAI Whisper) for transcription.
    //
    //   const ytdl = require('ytdl-core');
    //   const info = await ytdl.getInfo(videoId);
    //   const audioStream = ytdl(videoId, { quality: 'lowestaudio' });
    //   // Transcribe via Whisper API:
    //   const transcription = await openai.audio.transcriptions.create({
    //     model: 'whisper-1',
    //     file: audioStream,
    //   });
    //
    // For TikTok/Instagram, use:
    //   - RapidAPI / SocialData APIs for fetching video captions
    //   - yt-dlp as a subprocess for direct audio extraction
    //   - Browser automation (Playwright) as fallback for caption
    //     extraction from public pages
    //
    // ============================================================

    // Mock response for demo/development
    const response: TransformResponse = {
      rawTranscript: `[Auto-generated transcript for ${platform} video ${videoId}]\n\nThis is an AI-generated transcript. In production, this would contain the actual transcribed text from the video audio processed through a Whisper model or similar ASR system.\n\nThe quality of the transcript depends on audio clarity, background noise levels, and speaker articulation. For optimal results, ensure the video has clear, well-recorded audio.\n\n---\nPlatform: ${platform}\nVideo ID: ${videoId}\nGenerated: ${new Date().toISOString()}`,
      summarizedArticle: `## Summary of ${platform} Video\n\nThis video covers key insights and information related to the content. The AI-generated summary highlights the main points and takeaways.\n\n### Key Points:\n1. Main topic introduction and context\n2. Core arguments and evidence presented\n3. Conclusions and implications\n\nThe summary is generated using advanced NLP techniques to extract and condense the most important information from the full transcript.`,
      socialPost: `📹 Just watched an insightful video on ${platform}!\n\nHere are my key takeaways:\n\n1️⃣ The main argument presented challenges conventional thinking\n2️⃣ Supporting evidence provides compelling context\n3️⃣ The conclusion offers actionable next steps\n\nFull transcript available via Cortex AI.\n\n#VideoInsights #AI #ContentCreation`,
      metadata: {
        title: `${platform} Video - ${videoId}`,
        duration: "14:32",
        platform,
      },
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Transform API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing the video." },
      { status: 500 }
    );
  }
}
