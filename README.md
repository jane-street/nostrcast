# NostrCast

NostrCast is a decentralized, peer-to-peer interactive live-streaming platform built to eliminate corporate monopolies, high platform fees, and de-platforming risks for independent creators. By leveraging the Nostr protocol for identity and communication, Livepeer for low-latency decentralized video infrastructure, and Cashu/Lightning (via NutZaps) for instant micro-tipping, NostrCast provides creators with 100% ownership of their audience and revenue.

## Core Value Proposition

* **0% Corporate Tax:** Traditional platforms like Twitch or YouTube take 30% to 50% of fan support. NostrCast uses peer-to-peer digital tokens, allowing creators to keep 100% of their tips.
* **Censorship Resistance & Data Portability:** There are no traditional accounts or centralized databases. Users authenticate via cryptographic key pairs. If one app or viewer interface fails, creators and viewers can seamlessly migrate to any other mirror by plugging in their public/private keys.
* **Instant Capital Settlement:** Bypasses traditional banking clearinghouses. Tips settle in milliseconds directly into the creator's wallet.
* **Interactive Live Triggers:** Integrates a real-time event pipeline where viewer tips instantly execute physical or visual interactions (e.g., custom sound blasts, screen overlays) on the streamer's dashboard in real time.

---

## The Interaction Loop

1. **The Setup:** The streamer launches the dashboard interface, initializes their streaming keys, and broadcasts their camera feed instantly via decentralized video nodes.
2. **The Connection:** The viewer navigates to the stream link, authenticates with a single click using a Nostr extension or key pair, and connects their digital ecash/Lightning wallet.
3. **The Action:** An interactive dashboard grid exposes custom micro-tip buttons mapped to real-world triggers (e.g., Airhorn: 5¢, Confetti: 25¢, Ghost Scare: 50¢).
4. **The Trigger:** The viewer clicks an interaction button, approves the transaction via their browser wallet, and tokens flash to the streamer's wallet within milliseconds.
5. **The Payoff:** The moment the payment clears the peer-to-peer network, the local WebSocket pulse server registers the verified transaction and pushes an animation/audio event directly onto the live stream for all viewers to experience.

---

## Technical Stack & Architecture

NostrCast integrates specialized, production-ready open-source protocols to guarantee system performance without building custom video encoding or state synchronization engines from scratch.

| Technology Block | Role & Implementation |
| :--- | :--- |
| **Next.js & TypeScript** | Core frontend and backend framework handling state machine tracking, client-side rendering, and responsive application layouts. |
| **Tailwind CSS & Shadcn/ui** | Design system utilized for high-fidelity component layouts and minimalist dark UI aesthetics. |
| **NDK (Nostr Dev Kit)** | Simplifies and optimizes multi-relay connectivity. Manages event propagation, public text chat fetching, and decentralized state logs using `ndk.publish()`. |
| **NIP-61 / Cashu-ts** | Powering the NutZap processing system. Handles peer-to-peer fractional digital tokens for immediate micro-tipping execution. |
| **Livepeer SDK** | Decentralized video rendering layer. Implements the low-overhead `<Player />` component for high-quality, zero-latency stream decoding. |
| **WebSockets (Node.js)** | Real-time state synchronization server. Captures verified on-chain and off-chain transaction receipts to push instant dashboard event triggers. |
## Application Architecture & UI Layout

NostrCast operates on a **two-screen architecture** optimized for low-latency feedback loops. Both components utilize an identical underlying state machine synchronized by public relay events and local WebSocket pipelines.

┌──────────────────────┐│     Livepeer SDK     ││  (Decentralized Video)│└──────────┬───────────┘│▼┌────────────────────────────────────────────────────────┐│                   Nostr Relays (NDK)                   │└───────────┬────────────────────────────────┬───────────┘│                                │▼                                ▼┌───────────────────────┐        ┌───────────────────────┐│   Layout A: Viewer    │        │  Layout B: Streamer   │├───────────────────────┤        ├───────────────────────┤│ • Video Window        │        │ • Outbound Feed Grid  ││ • Interactive Hot Grid│        │ • Event Canvas Overlay││ • Public Relay Chat   │        │ • WebSocket Pulse     │└───────────┬───────────┘        └───────────▲───────────┘│                                ││  NIP-61 NutZap                 │ Verified Trigger└────────────────────────────────┘ (via Local WS)
### Layout A: The Viewer's Arena
Designed for a lightweight, immersive viewing experience:
* **Video Window:** Houses the custom `<Player />` component decoding live HLS/WebRTC segments from the decentralized media mesh.
* **Action Row:** A visual layout matrix containing responsive micro-payment buttons mapped to fixed satoshi valuations.
* **Public Chat:** A highly performant, text-based stream that listens to specified Nostr relays, sanitizing and prepending user pubkeys to incoming text events.

### Layout B: The Streamer's Dashboard
A specialized workflow utility meant to be run locally or mapped into streaming software like OBS Studio:
* **Monitor Grid:** Provides real-time tracking of outbound bitrates, resolution frames, and internal stream telemetry.
* **Event Canvas:** A transparent canvas stack positioned directly above the streamer's operational workspace. It catches rendering instructions passed by the local message queue.
* **WebSocket Pulse:** A background worker that intercepts cryptographic validation proofs from the Cashu ecosystem and pushes audio-visual alerts to the screen.

---

## Getting Started & Local Installation

### Prerequisites
Before cloning the project, ensure you have the following environments configured on your local machine:
* **Node.js:** version `v18.x.x` or higher
* **Package Manager:** `pnpm` (recommended) or `npm`
* **Nostr Identity:** A valid cryptographic pubkey pair (or a browser extension manager like Alby)
* **Livepeer Account:** An active API key to fetch specialized player tokens

### Installation Steps

1. **Clone the project repository to your workspace:**
   ```bash
   git clone https://github.com<your-username>/nostrcast.git
   cd nostrcast
   ```

2. **Install all required dependencies using the lockfile specifications:**
   ```bash
   pnpm install
   ```

3. **Establish your local environmental configuration:**
   Duplicate the root example parameters into an active configuration profile:
   ```bash
   cp .env.example .env.local
   ```
   ## Environment Variables Configuration

Create an `.env.local` file in the root directory of your project. Copy and populate the following keys to bind your decentralized video infrastructure, Nostr relays, and ecash mints securely:

```env
# Application Context
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Livepeer Decoupled Streaming SDK
# Retrieve this token from your Livepeer Studio Dashboard (https://livepeer.org)
LIVEPEER_API_KEY=your_livepeer_api_key_here
NEXT_PUBLIC_LIVEPEER_PLAYBACK_ID=your_default_playback_id_here

# Nostr Network Architecture (NDK)
# Provide comma-separated WebSocket links to preferred public or private relays
NEXT_PUBLIC_NOSTR_RELAYS=wss://relay.damus.io,wss://nos.lol,wss://relay.current.fyi

# Cashu (NIP-61 NutZap Configuration)
# Explicitly targets the default custodial or federated mint used to verify micro-tokens
NEXT_PUBLIC_CASHU_MINT_URL=https://fedi.nut

# Real-Time Event WebSocket Pulse
# Internal WebSocket cluster mapping live execution payloads to OBS/Dashboard overlays
NEXT_PUBLIC_WS_PULSE_SERVER=ws://localhost:8080
```

---

## Running the Application

NostrCast requires spinning up both the client interface and the lightweight local real-time event pipeline synchronously.

### 1. Launch the Real-Time WebSocket Pulse Server
This process listens for verified NIP-61 network confirmations and broadcasts immediate hardware triggers to your streamer interface:

```bash
# Start the standalone event processing loop
node server/ws-pulse.js
```
*Expected console print-out:* `[NostrCast] WebSocket Pulse Engine operational on port 8080`

### 2. Launch the Next.js Client Interface
Open a separate shell terminal window to spin up your client-side compilation pipeline:

```bash
# Start the local hot-reloading development server
pnpm dev
```
*Expected console print-out:* `▲ Next.js 14.x.x - Local: http://localhost:3000`

### 3. Verification Framework
* Navigate to `http://localhost:3000/streamer` to open up your **Streamer Management Dashboard**.
* Navigate to `http://localhost:3000/watch/[streamer_pubkey]` to pull open a sandbox **Viewer Arena**. 
* Keep your terminal window visible to trace incoming text messages and transaction logs.

## Production Build & Optimization

To compile and optimize NostrCast for live production deployment, execute the following script pipeline:

```bash
# 1. Clear any cached development artifacts
rm -rf .next

# 2. Run TypeScript static type compilation and construct the optimized production build
pnpm build

# 3. Spin up the production runtime server locally
pnpm start
```

---

## Design Decisions & Architectural Trade-offs

During the design phase of NostrCast, the engineering team made several deliberate architectural trade-offs to optimize for delivery speed, data privacy, and operational stability:

### 1. External Media Processing via Livepeer SDK vs. Custom WebRTC Infrastructure
* **Decision:** We embedded the specialized Livepeer SDK `<Player />` component rather than writing a custom WebRTC media processing stack from scratch.
* **Trade-off:** This introduces an external infrastructure block. However, it shifts heavy encoding overhead completely off the client machine, providing reliable, globally distributed, zero-latency video rendering out of the box.

### 2. Nostr Relays for Real-Time Feeds vs. Centralized Databases
* **Decision:** Public chat and event metadata are pulled dynamically from public Nostr relays using the Nostr Dev Kit (NDK).
* **Trade-off:** Relay fetching lacks the sub-millisecond query consistency of a centralized SQL database. However, it eliminates central access control points entirely, giving creators true audience portability—even if our primary application domain goes offline.

### 3. NIP-61 Cashu NutZaps vs. Native L1 Bitcoin Payments
* **Decision:** Micro-tips utilize fractional ecash digital tokens via Cashu-ts instead of executing base-layer Bitcoin transactions or open Lightning channels for every event trigger.
* **Trade-off:** Mints maintain short-term custody over outstanding tokens. However, this trade-off is necessary to unlock near-instant payment processing speeds and ultra-low transaction costs needed to build real-time interactive game mechanics without straining the main blockchain.

---

## Known Limitations & Product Roadmap

* **Partial Ledger Verification:** Solvency checking depends on the default configurations of the selected Cashu mint. Future iterations will build a client-side verifier to cross-reference mint assets dynamically against on-chain proof-of-reserves logs.
* **Relay Rate Limits:** Under highly active live events, intensive chat volume can trigger structural rate limits on public relays. The next iteration will implement fallback client-side routing to pull from multiple regional relays automatically.
## Open Source Licensing & Code Compliance

NostrCast is built entirely in the spirit of open-source software cooperation. The entire codebase is distributed under a permissive license framework to ensure long-term usability and auditability by the community.

* **Code License:** Distributed under the **MIT License**. Feel free to fork, modify, and extend this codebase for any personal, educational, or commercial use.
* **Protocol Dependencies:** All integration implementations using NDK, Cashu-ts, and Livepeer strictly respect the open-source licensing terms set by their respective upstream maintainers.

For full license terms and conditions, please consult the `LICENSE` file located in the root repository path.

---

## Hackathon Acknowledgments & Context

This project was built and submitted as part of the **BOSS Battle 2026 Online Hackathon**, an open-source development initiative organized by **Bitshala**.

* **Track Focus:** Track 03 — **Freedom Stack** (Nostr + Ecash)
* **Problem Alignment:** Designed to fulfill the core challenges of decentralizing identity, communication channels, and creator financing. It provides independent creators with verifiable sovereignty and native monetization options without relying on corporate platform monopolies.

---

## Contributing & Community Support

We welcome contributions from developers, UI/UX designers, and protocol engineers. 

1. **Bug Reports & Feature Requests:** Please open an issue in the public GitHub issue tracker detailing the behavior and recreation steps.
2. **Pull Requests:** Fork the repository, create a descriptive feature branch (`feature/your-implementation`), and submit a pull request for review. Ensure all local tests pass and clean documentation is included.
3. **Community & Mentorship:** Join the official ecosystem channels on Discord to discuss architecture decisions, track logs, or request help during development.

---

*“Enter the arena. Ship the code. Own your data.”* Built with 🧡 by Bitcoiners.
