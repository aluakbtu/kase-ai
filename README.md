# KASE AI (AAA+)
Static site + two Vercel serverless functions. Offline mode works with no setup.
Deploy: push the folder to GitHub, import it in Vercel (framework: Other), deploy.
Live AI mode: Vercel project > Settings > Environment Variables > ANTHROPIC_API_KEY (and optionally ANTHROPIC_MODEL), then redeploy.
Local check: npx serve .
