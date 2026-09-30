ChainTrace
Blockchain Investigation & Fund-Flow Intelligence Platform
ChainTrace is a web-based blockchain investigation platform built for Smart India Hackathon (SIH). It helps investigators trace suspicious cryptocurrency transactions, understand multi-hop fund movements, identify possible cross-chain transfers, and organize blockchain evidence in a structured format.
Problem
Blockchain transactions are public, but investigating complex fund movements can still be difficult.
Some common challenges are:
Funds can move through multiple wallets within a short period of time.
A single amount can be split across multiple wallets and later consolidated.
Funds can move between different blockchains through bridges.
Raw transaction data is difficult to interpret without proper context.
Blockchain evidence such as transaction hashes and timestamps needs to be presented in a format that is easier for investigators and legal teams to understand.
What ChainTrace Does
ChainTrace provides a single interface for analyzing and visualizing suspicious fund movements.
The platform focuses on:
Wallet analysis – Examines wallet activity and transaction behavior.
Fund-flow tracing – Visualizes how funds move between wallets.
Multi-hop analysis – Helps identify chains of transactions across multiple wallets.
Cross-chain analysis – Highlights possible movement of funds between Ethereum and Polygon.
Risk analysis – Calculates wallet and transaction-path risk scores using observable transaction patterns.
Evidence organization – Separates on-chain facts from analytical observations and limitations.
Report generation – Converts investigation findings into a structured evidence package.
Key Features
1. Investigation Command Center
The main dashboard provides an overview of the investigation environment, including:
Active cases
Wallets traced
Cross-chain cases
Evidence packages
Transaction volume trends
Recent investigations
Activity updates
2. Automated Trace Engine
The investigation flow is divided into multiple processing stages:
Address validation
Network discovery
Transaction log retrieval
Data normalization
Graph construction
Pattern detection
Risk scoring
Report generation
This makes the investigation process easier to follow instead of displaying all the raw data at once.
3. Guided Investigation Workflow
ChainTrace organizes the investigation into five main stages:
Wallet Intelligence
Fund Flow
Cross-Chain
Evidence
Report
Each stage focuses on a specific part of the investigation.
4. Interactive Fund-Flow Graph
The fund-flow graph displays wallet-to-wallet transactions as a directed network.
It supports:
Pan and zoom
Fit-to-screen view
Node selection
Transaction path visualization
Ethereum and Polygon network separation
Identification of important transaction paths
5. Cross-Chain Analysis
ChainTrace highlights possible bridge activity between supported networks.
For example, an Ethereum transaction followed by a related Polygon transaction can be displayed as a possible cross-chain movement.
The interface also shows timing information to help investigators examine whether transactions may be related.
6. Risk Analysis
The platform generates a risk score from 0–100 for wallets and transaction paths.
Risk levels are grouped into:
LOW
MEDIUM
HIGH
CRITICAL
The score is based on observable transaction signals such as:
Transfer velocity
Fund splitting
Multiple hops
Contract interactions
Transaction patterns
The score is intended to highlight areas for further investigation and does not by itself establish criminal activity.
7. Investigation Intelligence Board
A compact intelligence panel displays important investigation signals, including:
India Forensics
High Value
Multiple Hops
Cross-Chain
Bridge Candidate
It also provides additional information about the currently selected wallet or transaction.
8. Evidence & Limitations
ChainTrace distinguishes between information that can be directly verified from the blockchain and information that requires external investigation.
On-chain evidence can include:
Transaction hashes
Wallet addresses
Block numbers
Block timestamps
Token transfers
Contract interactions
EVM address checksums
Information that may require external sources includes:
Real-world identity of a wallet owner
KYC information
Bank records
Exchange account information
Other off-chain evidence
This distinction helps keep verified blockchain data separate from analytical observations.
9. Evidence Package
Investigation findings can be organized into a structured evidence report.
The prototype supports:
PDF printing
JSON export
Analyst notes
Transaction and wallet details
Evidence references
10. ChainTrace Assistant
ChainTrace includes an assistant panel that can summarize investigation findings and explain the information shown in the investigation interface.
The prototype also demonstrates basic prompt-injection protection for assistant interactions.
Technology Stack
Category
Technology
Frontend
React 19
Language
TypeScript
Build Tool
Vite
Styling
Tailwind CSS
Icons
Lucide React
UI Feedback
Canvas Confetti
Linting
Oxlint
Project Structure
ChainTrace/
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── types/
│   └── ...
├── public/
├── package.json
├── vite.config.ts
└── README.md
Getting Started
Requirements
Node.js 18 or higher
npm 9 or higher
Installation
Clone the repository:
git clone https://github.com/sonakshirawat1902-png/Chaintrace-.git
Move into the project directory:
cd Chaintrace-
Install dependencies:
npm install
Start the development server:
npm run dev
Build the project:
npm run build
Demo Flow
A typical investigation in ChainTrace follows this flow:
Start Investigation
        ↓
Wallet Intelligence
        ↓
Fund Flow
        ↓
Cross-Chain Analysis
        ↓
Evidence Review
        ↓
Report Generation
The interface is designed so that an investigator can move from a suspicious wallet to its related transaction paths, examine possible cross-chain activity, review the available evidence, and generate a structured report.
Scope & Limitations
ChainTrace is currently a prototype developed for Smart India Hackathon.
The prototype focuses on the investigation interface, analysis workflow, visualization, risk calculation, and evidence presentation.
Some information cannot be established from blockchain data alone. In particular, identifying the real-world person or organization behind a wallet generally requires additional off-chain information such as exchange records, KYC data, or other legally obtained evidence.
Risk scores and detected patterns should therefore be treated as investigative indicators, not as proof of criminal activity.
Future Scope
Possible future improvements include:
Integration with live blockchain RPC/indexing services
Support for additional blockchain networks
More bridge and mixer detection patterns
Advanced graph-based investigation algorithms
Integration with exchange and compliance data where legally available
Improved evidence-chain tracking
Role-based access for investigation teams
Secure case storage and collaboration
Built For
Smart India Hackathon (SIH)
ChainTrace focuses on making complex blockchain fund-flow analysis easier to visualize, investigate, and document for forensic and financial investigation workflows.
Repository
GitHub: https://github.com/sonakshirawat1902-png/Chaintrace-
