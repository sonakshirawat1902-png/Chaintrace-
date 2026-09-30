# ChainTrace India

Blockchain investigation intelligence prototype — traces suspicious crypto funds across
wallets, smart contracts and multiple networks, reconstructs fund flows, correlates
cross-chain movement, links every claim to evidence, and monitors wallets for new
activity.

**This is a hackathon/SIH demo prototype.** All blockchain data is simulated. There is no
real backend, no live blockchain connection, and no API keys required or used.

## Tech stack (as actually built — nothing migrated)

This prototype is **plain HTML, CSS and vanilla JavaScript** — no UI framework
(no React, no Vue). It was originally built and iterated as a single self-contained
`.html` file; this repository splits that same, unmodified code into a conventional
project layout so it can be run with a normal dev server and published to GitHub.

- **Vite** — used only as a local dev server / static build tool. It does not add any
  framework; it just serves `index.html`, `src/style.css` and `src/main.js`.
- **No other runtime dependencies.** No React Flow, no Recharts, no Tailwind, no icon
  library — the graph, charts and icons are hand-built with inline SVG and CSS inside
  `src/main.js` / `src/style.css`.
- Client-side hash routing (`#/dashboard`, `#/investigation/:caseId`, etc.), implemented
  directly in `src/main.js` — no `react-router` or similar.

> If you were expecting a React/Tailwind/React Flow stack: an earlier planning pass in
> this project (`PRD.md` / `PROMPT_CHAIN.md`, if present in your repo) sketched that stack
> as a *target* for a from-scratch rebuild. The prototype that was actually built and
> demoed — and that this repo contains — is the vanilla HTML/CSS/JS version described
> above. Nothing here was migrated or redesigned.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (typically `http://localhost:5173`). The app boots straight
into the Investigation Dashboard.

Other scripts:

```bash
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

## What's simulated / mocked, and why

Everything the app shows — wallets, transactions, entities, risk scores, evidence
records, cross-chain events and monitoring alerts — is **hardcoded demo data** defined at
the top of `src/main.js` (`TX`, `NS`, `EDG`, `EVID`, `PRIOR`, `CASES`, etc.). There is no
backend and no blockchain node/indexer integration, because:

- The product's own demo principles require it: the UI explicitly labels itself
  **"Prototype — Simulated Blockchain Data"** and never claims mock data is live.
- A real version would need a blockchain indexer (e.g. Etherscan/Polygonscan APIs or a
  node + The Graph), a risk-scoring service, and a case-management backend — out of scope
  for a local demo.

If you later want to connect real data, the data is already shaped as discrete,
swappable arrays/objects at the top of `src/main.js` (transaction list, node list, edge
list, evidence map) — replace those with real API calls/fetches; the rendering and
interaction code below them doesn't need to change.

## Feature checklist (preserved from the working prototype)

- Investigation dashboard with KPIs, recent-investigations table, activity feed, current
  investigation lead, and a "How this finding was generated" panel.
- "Start New Investigation" wallet-search flow with a simulated multi-step trace sequence.
- Investigation detail page with a transaction-intelligence table, transaction detail
  drawer, simulated on-chain record modal, and "Add to Fund Flow".
- Fund-Flow graph (inline SVG, not a canvas/WebGL library): multi-hop path + branching,
  click-to-inspect nodes/edges, path highlighting via "Investigate This Path", explainable
  risk scores with factor breakdowns, an AI-style reasoning panel, an investigation
  priority list, evidence linking, zoom/pan/fit/reset, and network/asset/direction/depth
  filters.
- Cross-Chain Intelligence page with the Ethereum → Polygon correlation visual, the
  correlation-evidence checklist, alternative-mechanisms comparison, timeline, and
  evidence-gap callout.
- Evidence & Investigation Report page with the "available vs. not established from
  public blockchain data" split and a demo evidence table.
- External Intelligence Request modal.
- Investigation Monitoring page with three alert types (new transaction, new destination
  wallet, cross-chain activity) and working re-analyse / view-graph actions.
- Guided "Start Demo" walkthrough (Prev/Next/End) that drives the whole story end to end.

## Project structure

```
ChainTrace/
├── index.html          # page shell: sidebar, app mount point, drawer/modal/demo bar
├── package.json
├── vite.config.js
├── .gitignore
├── README.md
└── src/
    ├── main.js          # all app logic: demo data, routing, rendering, interactions
    └── style.css        # all styling (design tokens, layout, components, animations)
```

## What to upload to GitHub

Everything in this project folder **except**:
- `node_modules/`
- `dist/`
- any `.env` file with real credentials (none is used by this prototype)

`.gitignore` already excludes these.
