# Word Counter API

[![MCP Server](https://img.shields.io/badge/MCP-server-blue)](https://word-counter.api.klymax402.com/mcp)
[![x402](https://img.shields.io/badge/payments-x402-6E56CF)](https://x402.org)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)

Analyze text metrics: word count, characters, sentences, paragraphs, and estimated reading time in one call. Pay-per-call via [x402](https://x402.org) (USDC on Base L2) -- no API key, no signup, no rate-limit wall.

Part of the [klymax402](https://klymax402.com) marketplace -- 100 x402 micropayment APIs for AI agents, one wallet, USDC on Base.

## Quickstart -- MCP

Add to your MCP client config (Claude Desktop, Cursor, ElizaOS, etc.):

```json
{
  "mcpServers": {
    "word-counter": {
      "url": "https://word-counter.api.klymax402.com/mcp"
    }
  }
}
```

## Quickstart -- HTTP (x402)

```bash
curl -X POST "https://word-counter.api.klymax402.com/api/count" \
  -H "Content-Type: application/json" \
  -d '{"text":"..."}'
# -> 402 Payment Required, with an x402 payment challenge in the response body
```

Any x402-aware client ([`@x402/fetch`](https://www.npmjs.com/package/@x402/fetch), [`x402-agent-tools`](https://www.npmjs.com/package/x402-agent-tools), ATXP) handles the 402 -> sign -> retry cycle automatically.

## Tools

| Tool | Method | Path | Price | Description |
|---|---|---|---|---|
| `text_count_words` | POST | `/api/count` | $0.003 | Count words, characters, sentences, paragraphs, and reading time |

### `text_count_words`

Use this when you need to count words, characters, sentences, or paragraphs in text. Returns comprehensive text statistics with reading time estimate.

**Parameters**

| Name | Type | Required | Description |
|---|---|---|---|
| `text` | string | yes | The text to analyze |

Example response:

```json
{"words":250,"characters":1450,"charactersNoSpaces":1200,"sentences":15,"paragraphs":4,"readingTime":1.25}
```

**When to use**: content length validation, estimating article reading time, or checking if text meets minimum word count requirements. Essential BEFORE publishing blog posts or submitting content with length constraints.

**Not for**: language detection (use `text_detect_language`), sentiment analysis (use `text_analyze_sentiment`), text comparison (use `text_compare_diff`).

## Example agent prompts

- "Count words, characters, sentences, or paragraphs in text"

## Payment

- Protocol: [x402](https://x402.org) -- HTTP-native pay-per-call, no signup, no API key
- Network: Base L2 (`eip155:8453`)
- Asset: USDC
- Facilitator: Coinbase CDP (primary), PayAI (fallback)
- Also reachable via [ATXP](https://atxp.ai) (OAuth-wrapped x402, RFC 9728 protected-resource metadata)

## Part of klymax402

100 x402 micropayment APIs for AI agents -- one wallet, USDC on Base, zero signup.

- Catalog: https://klymax402.com/llms.txt
- Full API reference: https://klymax402.com/llms-full.txt
- Live stats: https://klymax402.com/stats

## License

MIT
