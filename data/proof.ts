export type OssStatus = "merged" | "open" | "closed";

export type OssContribution = {
  org: string;
  repo: string;
  title: string;
  pr: number;
  date: string;
  status: OssStatus;
  prUrl: string;
  repoUrl: string;
};

export const proofOfWork: OssContribution[] = [
  // ─────────────────────────────
  // SAMUI WALLET (CORE WORK)
  // ─────────────────────────────
  {
    org: "samui-build",
    repo: "samui-wallet",
    title: "fix(settings): use type-safe useParams instead of type assertions",
    pr: 858,
    date: "Jan 2026",
    status: "merged",
    prUrl: "https://github.com/samui-build/samui-wallet/pull/858",
    repoUrl: "https://github.com/samui-build/samui-wallet",
  },
  {
    org: "samui-build",
    repo: "samui-wallet",
    title: "feat(solana-client): add bigIntToDecimal utility function",
    pr: 834,
    date: "Dec 2025",
    status: "merged",
    prUrl: "https://github.com/samui-build/samui-wallet/pull/834",
    repoUrl: "https://github.com/samui-build/samui-wallet",
  },
  {
    org: "samui-build",
    repo: "samui-wallet",
    title:
      "feat(onboarding): use react-hook-form/zod in onboarding-feature-import",
    pr: 805,
    date: "Dec 2025",
    status: "merged",
    prUrl: "https://github.com/samui-build/samui-wallet/pull/805",
    repoUrl: "https://github.com/samui-build/samui-wallet",
  },
  {
    org: "samui-build",
    repo: "samui-wallet",
    title:
      "feat(onboarding): use react-hook-form/zod in onboarding-feature-generate",
    pr: 779,
    date: "Dec 2025",
    status: "merged",
    prUrl: "https://github.com/samui-build/samui-wallet/pull/779",
    repoUrl: "https://github.com/samui-build/samui-wallet",
  },
  {
    org: "samui-build",
    repo: "samui-wallet",
    title: "feat(ui): use react-hook-form/zod in ui-prompt",
    pr: 760,
    date: "Dec 2025",
    status: "merged",
    prUrl: "https://github.com/samui-build/samui-wallet/pull/760",
    repoUrl: "https://github.com/samui-build/samui-wallet",
  },
  {
    org: "samui-build",
    repo: "samui-wallet",
    title: "fix(onboarding): resolve duplicate key error when words repeat",
    pr: 700,
    date: "Dec 2025",
    status: "merged",
    prUrl: "https://github.com/samui-build/samui-wallet/pull/700",
    repoUrl: "https://github.com/samui-build/samui-wallet",
  },
  {
    org: "samui-build",
    repo: "samui-wallet",
    title: "fix(ui): error when clicking 12-words button on onboarding screen",
    pr: 693,
    date: "Dec 2025",
    status: "merged",
    prUrl: "https://github.com/samui-build/samui-wallet/pull/693",
    repoUrl: "https://github.com/samui-build/samui-wallet",
  },
  {
    org: "samui-build",
    repo: "samui-wallet",
    title: "fix(settings): network deletion crash",
    pr: 619,
    date: "Nov 2025",
    status: "merged",
    prUrl: "https://github.com/samui-build/samui-wallet/pull/619",
    repoUrl: "https://github.com/samui-build/samui-wallet",
  },
  {
    org: "samui-build",
    repo: "samui-wallet",
    title: "fix(db): add protocol validation to network endpoints",
    pr: 599,
    date: "Nov 2025",
    status: "merged",
    prUrl: "https://github.com/samui-build/samui-wallet/pull/599",
    repoUrl: "https://github.com/samui-build/samui-wallet",
  },
  {
    org: "samui-build",
    repo: "samui-wallet",
    title: "fix(settings): implement ui-prompt",
    pr: 578,
    date: "Nov 2025",
    status: "merged",
    prUrl: "https://github.com/samui-build/samui-wallet/pull/578",
    repoUrl: "https://github.com/samui-build/samui-wallet",
  },
  {
    org: "samui-build",
    repo: "samui-wallet",
    title: "fix(portfolio): transaction group header time",
    pr: 514,
    date: "Nov 2025",
    status: "merged",
    prUrl: "https://github.com/samui-build/samui-wallet/pull/514",
    repoUrl: "https://github.com/samui-build/samui-wallet",
  },
  {
    org: "samui-build",
    repo: "samui-wallet",
    title: "feat: copy button",
    pr: 449,
    date: "Nov 2025",
    status: "merged",
    prUrl: "https://github.com/samui-build/samui-wallet/pull/449",
    repoUrl: "https://github.com/samui-build/samui-wallet",
  },

  // ─────────────────────────────
  // GILL SDK
  // ─────────────────────────────

  {
    org: "gillsdk",
    repo: "gill",
    title: "feat: add gill testing package",
    pr: 320,
    date: "Oct 2025",
    status: "open",
    prUrl: "https://github.com/gillsdk/gill/pull/320",
    repoUrl: "https://github.com/gillsdk/gill",
  },

  // ─────────────────────────────
  // PRETZEL AI
  // ─────────────────────────────
  {
    org: "pretzelai",
    repo: "pretzelai",
    title: "fix(sql/prql): resolve syntax highlighting issues",
    pr: 77,
    date: "May 2024",
    status: "merged",
    prUrl: "https://github.com/pretzelai/pretzelai/pull/77",
    repoUrl: "https://github.com/pretzelai/pretzelai",
  },

  {
    org: "pretzelai",
    repo: "pretzelai",
    title: "fix(sql/prql): syntax highlighting follow-up",
    pr: 71,
    date: "May 2024",
    status: "merged",
    prUrl: "https://github.com/pretzelai/pretzelai/pull/71",
    repoUrl: "https://github.com/pretzelai/pretzelai",
  },
  {
    org: "pretzelai",
    repo: "pretzelai",
    title: "fix(filters): case-insensitive contains / does-not-contain",
    pr: 53,
    date: "Apr 2024",
    status: "merged",
    prUrl: "https://github.com/pretzelai/pretzelai/pull/53",
    repoUrl: "https://github.com/pretzelai/pretzelai",
  },
  {
    org: "pretzelai",
    repo: "pretzelai",
    title: "feat(ui): add remove duplicate button",
    pr: 45,
    date: "Mar 2024",
    status: "merged",
    prUrl: "https://github.com/pretzelai/pretzelai/pull/45",
    repoUrl: "https://github.com/pretzelai/pretzelai",
  },
];
