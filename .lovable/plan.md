
## Website Rebuild: "One Journey Per Customer"

### Narrative Shift
**From:** "AI-Powered Retention for B2C Apps" (sounds like another marketing tool)
**To:** "The AI behind every customer decision" — an autonomous system that decides, generates, learns, and optimizes every interaction.

### New Tagline
**"Every customer. One intelligent journey."**

### Structure: Single-page website with optional /about
Strip navigation to: Home (scrollable single-page) | About | Blog | Get a Demo

### Homepage Sections (single flowing page):

**1. Hero** — Big, bold, Auxia-style
- Headline: "Every customer gets their own journey."
- Sub: "Thoughtnudge is the AI-native system behind every customer interaction — deciding what to do next, generating creative variations to test, constantly learning, and optimizing performance across your entire lifecycle."
- CTA: "Request a Demo" + "See how it works" (scrolls down)

**2. The Problem** — "Your stack wasn't built for this"
- Brief, sharp contrast: Rules → Segments → Batch campaigns → Same journey for everyone
- vs. What customers actually need: unique, adaptive, real-time

**3. How It Works** — "Learn. Decide. Act. Repeat."
- 3-panel visual showing the agentic loop
- Deep RL learns from every interaction
- Agentic memory builds persistent understanding per customer
- Behavioral science shapes the creative and timing
- Each panel: icon + short description

**4. The Engine** — "Three layers. One intelligence."
- Data Layer: Ingests behavioral signals from your stack
- Intelligence Layer: Per-customer agent that runs micro-experiments
- Action Layer: Executes across channels — unique journey per customer
- Visual: clean layered diagram

**5. What Changes** — Metrics/outcomes
- "From batch to individual" — stats showing lift
- 3-4 bold metrics: conversion lift, churn reduction, CLTV growth

**6. Built for Enterprise** — Trust signals
- Works on your data warehouse
- No journey builder needed
- SOC2 / GDPR ready
- Measurable ROI in weeks

**7. Final CTA** — "Turn every customer interaction into impact."
- "Request a Demo" button

### Technical Changes:
1. Simplify navbar: Home | About | Blog | Request a Demo
2. Rebuild Index.tsx as single flowing page with new components
3. Simplify footer
4. Keep existing color theme (dark teal/emerald)
5. Keep routes for /about, /blogs, /blog/:slug, /growth-audit but remove clutter routes from nav
