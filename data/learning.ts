export type LearningItem = {
  title: string;
  date: string;
  description: string;
  proofUrl?: string;
};

export const learningTimeline: LearningItem[] = [
  {
    title: "Turbin3 Q4 Solana Accelerator",
    date: "Oct 2025 → Nov 2025",
    description:
      "Participated in the Turbin3 Q4 Solana Accelerator, focusing on advanced program development and real-world Solana use cases. Implemented multiple accelerator assignments including escrow programs using Pinocchio and LiteSVM, vault whitelisting logic, transfer hooks, and MagicBlock-related examples, with an emphasis on performance, correctness, and production-ready patterns.",
    proofUrl: "https://github.com/Nitinyadav237/Q4_2025_Accel_NitinYadav",
  },

  {
    title: "Gill Working Group — Solana Testing Tooling",
    date: "Sep 2025 → Oct 2025",
    description:
      "Participated in the Gill working group over ~40 days, collaborating on Solana developer tooling with a focus on testing infrastructure. Designed and implemented the @gillsdk/testing package, covering local validator orchestration, SPL token test fixtures, transaction log inspection, and assertion helpers for program testing. This work strengthened my understanding of Solana runtime behavior, CPI, compute units, and transaction-level debugging.",
    proofUrl: "https://github.com/gillsdk/gill/pull/320",
  },

  {
    title: "Ackee School of Solana",
    date: "Jul 2025 → Sep 2025",
    description:
      "Completed the Ackee School of Solana bootcamp, an advanced program focused on Solana runtime internals, account models, CPI patterns, and program architecture. Implemented multiple programs and tasks including escrow logic, vault patterns, and end-to-end Solana dApps as part of the curriculum.",
    proofUrl: "https://github.com/Nitinyadav237/Ackee_Solana_Bootcamp",
  },

  {
    title: "Turbin3 Solana Builder Program",
    date: "Jun 2025 → Aug 2025",
    description:
      "Completed the Turbin3 Solana Builder program, a 7-week intensive focused on hands-on Solana development. Built multiple on-chain programs including vaults, escrow contracts, AMM primitives, NFT staking logic, and interactive programs such as dice games, while working through structured tasks and real-world Solana workflows.",
    proofUrl: "https://github.com/Nitinyadav237/Q3_25_Builder_NitinYadav",
  },

  {
    title: "Blueshift Solana Programs (Anchor & Pinocchio)",
    date: "May 2025",
    description:
      "Joined Blueshift, an on-chain learning platform, and focused on Solana program development using Anchor and the Pinocchio framework. Built and deployed multiple smart contracts including a SOL vault, a token escrow for secure swaps, and a custom vault implementation using low-level Rust with Pinocchio.",
    proofUrl: "https://github.com/Nitinyadav237/blueshift_program",
  },

  {
    title: "Learn Everything About Rust — Rise In",
    date: "Mar 2025 → Apr 2025",
    description:
      "Completed an in-depth Rust curriculum focused on systems programming fundamentals including ownership, borrowing, lifetimes, concurrency, and memory safety.",
    proofUrl: "https://www.risein.com/certificates/eyCeIN6B",
  },

  {
    title: "Solana Builder Certification — HackQuest",
    date: "Mar 2025",
    description:
      "Certified as a Solana Builder through the HackQuest program co-issued with the Solana Foundation. Covered Solana program development, account models, transactions, and ecosystem tooling, with hands-on exercises and assessments.",
    proofUrl:
      "https://www.hackquest.io/api/certificate/Nitin%20Yadav-1003630.png",
  },

  {
    title: "Alchemy Ethereum Developer Program",
    date: "Jan 2025 → Feb 2025",
    description:
      "Completed Alchemy University's Ethereum Developer program covering blockchain cryptography, Merkle trees, proof of work, Ethereum's account and transaction model, and smart contract development using Solidity and Hardhat. Built ERC-20 tokens, NFT contracts, a multisig wallet, and a Hardhat-based test suite.",
  },
];
