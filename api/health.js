// Tells the page whether live AI mode is configured. Never returns the key.
module.exports = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify({ live: Boolean(process.env.ANTHROPIC_API_KEY), model: process.env.ANTHROPIC_MODEL || "claude-sonnet-5-5" }));
};
