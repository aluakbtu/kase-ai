// Vercel serverless function: live AI mode.
// The model only sees verified passages from kb.js and must cite them. No key = 503, and the site falls back to the offline engine.
const KB = require("../kb.js");

const SYSTEM = [
  "You are KASE AI, an educational guide to Kazakhstan's stock market for retail investors.",
  "Answer ONLY from the CONTEXT passages provided. Do not use outside facts, memory or guesses for any number, date, company or rule.",
  "After every figure or factual claim from the context, add its source tag in square brackets, for example [S1]. Use only tags that appear in the context. Never invent a tag.",
  "If the context does not contain the answer, say you do not have a verified source for it and name where to look (KASE trading results, indices and indicators, analytics and reviews). Do not guess.",
  "Never give investment advice: no buy, sell or hold suggestions, no price or exchange-rate forecasts, no 'best' picks. If asked, say you explain facts and risks only, and offer relevant facts from the context.",
  "State the 'as of' date for market figures. Keep numbers exactly as written in the context. If a number is marked calc, say it is calculated.",
  "Use plain language and short sentences. Define terms the first time you use them. Reply in the language the user wrote in (Kazakh, Russian or English).",
  "Never ask for or repeat personal identifiers or card numbers.",
  "Length: Beginner mode, at most 120 words, no tables. Experienced mode, at most 220 words; compact lists are fine."
].join("\n");

function send(res, code, obj) {
  res.statusCode = code;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(obj));
}

module.exports = async (req, res) => {
  if (req.method !== "POST") return send(res, 405, { error: "POST only" });
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return send(res, 503, { error: "live_mode_not_configured" });

  let body = req.body;
  if (typeof body === "string") { try { body = JSON.parse(body); } catch (e) { body = {}; } }
  body = body || {};
  const q = String(body.q || "").trim().slice(0, 500);
  const mode = body.mode === "expert" ? "Experienced" : "Beginner";
  if (!q) return send(res, 400, { error: "empty_question" });

  // Guardrails run before any model call.
  const cls = KB.classify(q);
  if (cls.type === "advice" || cls.type === "forecast" || cls.type === "pii") {
    return send(res, 422, { error: "blocked_by_guardrail", type: cls.type });
  }

  const hits = KB.retrieve(q, 3);
  if (!hits.length) return send(res, 404, { error: "no_verified_passage" });
  const ctx = KB.contextFor(hits);

  const model = process.env.ANTHROPIC_MODEL || "claude-sonnet-5-5";
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), 25000);
  try {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      signal: ctl.signal,
      headers: { "content-type": "application/json", "x-api-key": key, "anthropic-version": "2023-06-01" },
      body: JSON.stringify({
        model,
        max_tokens: 700,
        temperature: 0,
        system: SYSTEM,
        messages: [{ role: "user", content: "MODE: " + mode + "\n\nCONTEXT:\n" + ctx.text + "\n\nUSER QUESTION: " + q }]
      })
    });
    if (!r.ok) return send(res, 502, { error: "model_error", status: r.status });
    const data = await r.json();
    let text = (data.content || []).map((c) => c.text || "").join("").trim();
    // keep only source tags that were actually in the context
    const allowed = new Set(ctx.ids);
    text = text.replace(/\[(S\d+)\]/g, (m, id) => (allowed.has(id) ? m : ""));
    const used = Array.from(new Set((text.match(/\[(S\d+)\]/g) || []).map((m) => m.slice(1, -1))));
    return send(res, 200, { answer: text, sources: used.length ? used : ctx.ids, model });
  } catch (e) {
    return send(res, 504, { error: "timeout_or_network" });
  } finally {
    clearTimeout(timer);
  }
};
