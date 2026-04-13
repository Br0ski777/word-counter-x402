import type { ApiConfig } from "./shared";

export const API_CONFIG: ApiConfig = {
  name: "word-counter",
  slug: "word-counter",
  description: "Count words, characters, sentences, paragraphs, and estimate reading time from text.",
  version: "1.0.0",
  routes: [
    {
      method: "POST",
      path: "/api/count",
      price: "$0.001",
      description: "Count words, characters, sentences, paragraphs, and reading time",
      toolName: "text_count_words",
      toolDescription: "Use this when you need to count words, characters, sentences, or paragraphs in a piece of text. Also estimates reading time in minutes. Returns detailed text statistics including word count, character count (with and without spaces), sentence count, paragraph count, and estimated reading time. Do NOT use for language detection — use text_detect_language. Do NOT use for sentiment — use text_analyze_sentiment.",
      inputSchema: {
        type: "object",
        properties: {
          text: { type: "string", description: "The text to analyze" },
        },
        required: ["text"],
      },
    },
  ],
};
