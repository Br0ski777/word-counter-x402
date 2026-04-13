import type { ApiConfig } from "./shared";

export const API_CONFIG: ApiConfig = {
  name: "word-counter",
  slug: "word-counter",
  description: "Analyze text metrics: word count, characters, sentences, paragraphs, and estimated reading time in one call.",
  version: "1.0.0",
  routes: [
    {
      method: "POST",
      path: "/api/count",
      price: "$0.001",
      description: "Count words, characters, sentences, paragraphs, and reading time",
      toolName: "text_count_words",
      toolDescription: `Use this when you need to count words, characters, sentences, or paragraphs in text. Returns comprehensive text statistics with reading time estimate.

1. words -- total word count
2. characters -- character count including spaces
3. charactersNoSpaces -- character count excluding spaces
4. sentences -- number of sentences
5. paragraphs -- number of paragraphs
6. readingTime -- estimated reading time in minutes (based on 200 wpm)

Example output: {"words":250,"characters":1450,"charactersNoSpaces":1200,"sentences":15,"paragraphs":4,"readingTime":1.25}

Use this FOR content length validation, estimating article reading time, or checking if text meets minimum word count requirements. Essential BEFORE publishing blog posts or submitting content with length constraints.

Do NOT use for language detection -- use text_detect_language instead. Do NOT use for sentiment analysis -- use text_analyze_sentiment instead. Do NOT use for text comparison -- use text_compare_diff instead.`,
      inputSchema: {
        type: "object",
        properties: {
          text: { type: "string", description: "The text to analyze" },
        },
        required: ["text"],
      },
      outputSchema: {
          "type": "object",
          "properties": {
            "words": {
              "type": "number",
              "description": "Word count"
            },
            "characters": {
              "type": "number",
              "description": "Character count with spaces"
            },
            "charactersNoSpaces": {
              "type": "number",
              "description": "Character count without spaces"
            },
            "sentences": {
              "type": "number",
              "description": "Sentence count"
            },
            "paragraphs": {
              "type": "number",
              "description": "Paragraph count"
            },
            "readingTimeMinutes": {
              "type": "number",
              "description": "Estimated reading time in minutes"
            },
            "readingTimeSeconds": {
              "type": "number",
              "description": "Estimated reading time in seconds"
            }
          },
          "required": [
            "words",
            "characters",
            "sentences"
          ]
        },
    },
  ],
};
