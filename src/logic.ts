import type { Hono } from "hono";

export function registerRoutes(app: Hono) {
  app.post("/api/count", async (c) => {
    const body = await c.req.json().catch(() => null);
    if (!body?.text) {
      return c.json({ error: "Missing required field: text" }, 400);
    }

    const text: string = body.text;
    const trimmed = text.trim();

    if (trimmed.length === 0) {
      return c.json({
        words: 0,
        characters: 0,
        charactersNoSpaces: 0,
        sentences: 0,
        paragraphs: 0,
        readingTimeMinutes: 0,
        readingTimeSeconds: 0,
      });
    }

    const words = trimmed.split(/\s+/).filter((w) => w.length > 0).length;
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, "").length;
    const sentences = trimmed.split(/[.!?]+/).filter((s) => s.trim().length > 0).length;
    const paragraphs = trimmed.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length;

    // Average reading speed: 238 words per minute
    const readingTimeMinutes = Math.round((words / 238) * 10) / 10;
    const readingTimeSeconds = Math.round((words / 238) * 60);

    return c.json({
      words,
      characters,
      charactersNoSpaces,
      sentences,
      paragraphs,
      readingTimeMinutes,
      readingTimeSeconds,
    });
  });
}
