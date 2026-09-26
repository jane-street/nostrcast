# 🚀 NostrCast | Decentralized Federated Live Streaming Arena
### *A Sovereign Protocol Layer over PeerTube powered by Nostr & Cashu***2026 Boss Battle Hackathon Submission**

[![Framework: Next.js](https://img.shields.io/badge/Framework-Next.js%2015-black?style=flat-squared&logo=nextdotjs)](https://nextjs.org)
[![Language: TypeScript](https://img.shields.io/badge/Language-TypeScript-blue?style=flat-squared&logo=typescript)](https://www.typescriptlang.org)
[![Protocol: Nostr](https://img.shields.io/badge/Protocol-Nostr-purple?style=flat-squared)](https://nostr.com)
[![Streaming: PeerTube](https://shields.io)](https://joinpeertube.org)
[![Payments: Cashu / NutZaps](https://img.shields.io/badge/Payments-Cashu%20%2F%20NutZaps-ff9900?style=flat-squared)](https://cashu.space)
---## 🛑 The Crisis: The Host Chokepoint & Exploited InfrastructureIndependent creators today are completely trapped inside giant platform monopolies (Twitch, YouTube Live, Kick) that build digital feudal estates on top of their talent. While federated software like PeerTube offers a powerful self-hosted alternative, it introduces severe structural architectural limitations:
1. **The Host Dependency Trap:** A creator's channel identity, follower graph, and media files reside completely inside a single PeerTube host's database. If the host goes insolvent, acts maliciously, or pulls the plug, the creator loses their entire audience with zero data portability.2. **The Infrastructure Tax & Cost Drain:** Running high-bandwidth video transcoding and content distribution strains host nodes financially, yet there are no native micro-incentive systems to reward hosts for disk, bandwidth, and maintenance.3. **Fragile Digital Sovereignty:** True censorship resistance is only as strong as the weakest custodian or server manager in the stack. 
### ⚡ The Breakthrough: Absolute Digital Sovereignty & Fair Incentives**NostrCast** tears down these choke points. We decouple the delivery infrastructure from the digital identity, transforming PeerTube into an open, commoditized, and financially incentivized media utility mesh where **no single host is a gatekeeper**. 
* **Cryptographic Channel Portability:** Channel keys are unlinked from specific host databases. Identity belongs strictly to the user via Nostr public/private key-pairs. If a PeerTube host behaves maliciously or drops off the network, the creator simply inputs their cryptographic key into another mirror or instance and resumes broadcasting to their sovereign audience instantly.* **Automated Split-Payment Settlement:** Built-in programmatic monetization via NIP-61 ensures every interactive e-cash micro-tip (NutZap) splits value natively at the execution mint: routing an automated percentage directly to the PeerTube host to pay for disk and bandwidth reservation, and the rest straight to the creator.* **Instantaneous Environmental Feedback:** Transitions passive video consumption into an interactive, gamified, and highly sovereign live-arcade environment.
---## 🏗️ Technical Architecture & Open-Source Pipeline
NostrCast strictly avoids custom, brittle central architectures. Instead, our design pattern orchestrates specialized, ultra-fast decentralized open-source blocks into an integrated high-performance stack using PeerTube instances purely as stateless processing and HLS streaming nodes.


[ Streamer Node ] (OBS Outbound via RTMPS / WebRTC)
│
▼
🎬 PeerTube Instance Node (Stateless Transcoding, Chunking & Storage Engine)
│
▼
==============================================================
[ Viewer Arena UI ]
==============================================================
┌────────────────────────┬────────────────────────────────┐
│ HLS VideoJS Matrix │ Dynamic Relays (NDK Stream) │
│ (Low-Latency Sync Core)│ (P2P Identity & Social Graph)│
└────────────────────────┴────────────────────────────────┘
│
[ Interactive Action Buttons (Airhorn / Confetti) ]
│ (Triggers NIP-61 / Cashu-ts Mint)
▼
💸 Programmatic E-Cash Split-Settlement
├── ⚡ Creator Public Key Share (75%)
└── ⚡ Host Node Bandwidth Split (25%)
│
▼ (WS Pulse Confirmation)
⚡ Real-Time Stream Overlay Engine
## 🧩 Core Component Breakdown

| Technology Block | Sub-System Role & Implementation Context |
|---|---|
| Next.js & TypeScript | Core single-page application framework for real-time client state and layout transitions. |
| Tailwind & Shadcn/ui | Optimized styling infrastructure for high-fidelity dark-mode interfaces. |
| NDK (Nostr Dev Kit) | Asynchronous cryptographic relay clustering for serverless stream state routing. |
| NIP-61 / Cashu-ts | NutZap execution engine for e-cash micro-tipping and automated split payments. |
| PeerTube Rest API & HLS | P2P video distribution via instance HLS live endpoints and streaming fragments. |
| WebSockets (Node.js) | High-frequency event handler for payment validation and UI canvas updates. |

------------------------------
## 🕹️ Deep Dive: The Interactive Gamification & Migration Loop
NostrCast links payment rails to both the creator and host infrastructure via a dedicated WebSocket pipeline:

   1. Infrastructure Setup: The broadcaster initializes an outbound stream via PeerTube and publishes configuration data to the Nostr relay mesh.
   2. Sovereign Connection: Fans connect instantly via e-cash browser extensions without traditional passwords.
   3. Micro-Action Trigger: Viewers select interactive actions (Airhorn, Confetti) from the interface grid.
   4. E-Cash Split Settlement: A NutZap fractional e-cash token splits automatically, routing 75% to the creator and 25% to the host node for bandwidth coverage.
   5. Stream Payload: Validated tokens trigger immediate synchronized audio-visual canvas overlays across global peers.
   6. Host Migration: If a host fails or censors content, clients seamlessly switch to fallback instance nodes without losing social or data graphs.

------------------------------
## 💻 Quickstart & Execution Runbook## Prerequisites

* 
* Node.js v18.x or greater
* A Nostr extension (e.g., Alby) or cryptographic keypair
* 

## 1. Installation
Clone the repository and install dependencies:

git clone https://github.com/jane-street/nostrcast.git
cd nostrcast
npm install

## 2. Environment Ingestion Matrix (.env.local)
Configure your network environment links:

NEXT_PUBLIC_NOSTR_RELAYS="wss://relay.damus.io,wss://nos.lol,wss://relay.nostr.band"
NEXT_PUBLIC_CASHU_MINT="https://mint.cashu.space"
NEXT_PUBLIC_PEERTUBE_INSTANCE_URL="https://your-peertube-instance.com"
NEXT_PUBLIC_PEERTUBE_VIDEO_ID="your_live_stream_uuid_here"

## 3. Execution Pipeline
Boot the development server locally:

npm run dev

Access http://localhost:3000 in your browser.
------------------------------
## 🛡️ Hackathon Final Arena: Hardened Defense Matrix

* 
* Q: How do you prevent server congestion during massive tipping spikes?
* A: Video transcoding is offloaded to background threads on PeerTube nodes, while tipping validation and canvas rendering operate independently via WebSockets.
* Q: What stops a malicious host from hijacking a creator's identity or followers?
* A: All identity graphs and channel states bind directly to the creator's cryptographic Nostr keys, keeping data portable across relays.
* Q: How is mainstream adoption achieved without crypto familiarity?
* A: NIP-46 remote signing and hidden UI abstraction layers allow Web2 users to interact seamlessly.
* 

------------------------------
## 🗺️ Project Execution Roadmap

* 
* High-fidelity dark mode wireframes & multi-layout configurations
* Next.js structural framework & state routing architecture
* PeerTube API route integrations and HLS web player rendering structures
* Automated NIP-61 Cashu split-payment calculation layer (Creator/Host Allocation)
* Inter-instance automated stream re-routing and fallback triggers
* 

Developed with raw passion for the 2026 Boss Battle Hackathon. Reclaiming the internet—one instance at a time.
