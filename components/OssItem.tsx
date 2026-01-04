import {
  IconBrandGithub,
  IconExternalLink,
  IconGitMerge,
  IconGitPullRequest,
} from "@tabler/icons-react";
import type { OssContribution } from "@/data/proof";

export default function OssItem({ item }: { item: OssContribution }) {
  const { org, repo, title, date, status, pr, prUrl, repoUrl } = item;

  return (
    <div className="py-5 border-b border-neutral-800 last:border-b-0">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
        <p className="text-xs uppercase tracking-wide text-neutral-500">
          {org}
          <span className="mx-1 text-neutral-600">/</span>
          <span className="text-neutral-300">{repo}</span>
        </p>

        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-medium whitespace-nowrap self-start ${
            status === "merged"
              ? "bg-purple-500/10 text-purple-300"
              : "bg-emerald-500/10 text-emerald-300"
          }`}
        >
          {status === "merged" ? (
            <>
              <IconGitMerge size={14} />
              <span>Merged</span>
            </>
          ) : (
            <>
              <IconGitPullRequest size={14} />
              <span>Open</span>
            </>
          )}
        </span>
      </div>

      <a
        href={prUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-3 inline-flex items-start gap-1.5"
      >
        <h3 className="text-sm sm:text-base font-semibold leading-snug text-white">
          {title}
        </h3>

        <IconExternalLink
          size={14}
          className="mt-0.5 text-neutral-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100 shrink-0"
        />
      </a>

      <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] text-neutral-400">
        <span>{date}</span>

        <span className="text-neutral-600">•</span>
        <a
          href={prUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-200 transition-colors"
        >
          #{pr}
        </a>

        <span className="text-neutral-600">|</span>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[10px] text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200 transition-colors"
        >
          <IconBrandGithub size={16} />
          <span>repo</span>
        </a>
      </div>
    </div>
  );
}
