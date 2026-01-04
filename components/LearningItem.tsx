import { IconExternalLink, IconCalendar } from "@tabler/icons-react";
import type { LearningItem } from "@/data/learning";

export default function LearningItem({ item }: { item: LearningItem }) {
  const { title, date, description, proofUrl } = item;

  return (
    <div className="py-5 border-b border-neutral-800 last:border-b-0">
      <div className="flex items-start justify-between gap-4 mb-3">
        <time className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 border border-neutral-800 px-2.5 py-1 text-xs font-medium text-neutral-300">
          <IconCalendar size={14} className="text-neutral-500" />
          <span>{date}</span>
        </time>
      </div>

      <a
        href={proofUrl || "#"}
        target={proofUrl ? "_blank" : undefined}
        rel={proofUrl ? "noopener noreferrer" : undefined}
        className="group inline-flex items-start gap-1.5 mb-2"
      >
        <h3 className="text-base sm:text-lg font-semibold leading-snug text-white">
          {item.title}
        </h3>

        {proofUrl && (
          <IconExternalLink
            size={16}
            className="mt-0.5 text-neutral-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          />
        )}
      </a>

      <p className="text-sm text-neutral-400 leading-relaxed text-balance">
        {description}
      </p>

      {proofUrl && (
        <div className="mt-3">
          <a
            href={proofUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-neutral-200 transition-colors"
          >
            <IconExternalLink size={14} />
            <span>View proof</span>
          </a>
        </div>
      )}
    </div>
  );
}
