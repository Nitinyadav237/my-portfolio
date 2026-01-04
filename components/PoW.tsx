import { proofOfWork } from "@/data/proof";
import OssItem from "@/components/OssItem";
import { IconCode } from "@tabler/icons-react";

export default function PoW() {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <IconCode className="h-5 w-5 sm:h-6 sm:w-6" />
        <h2 className="text-xl sm:text-2xl font-bold">
          Open Source & Proof of Work
        </h2>
      </div>

      <p className="text-sm sm:text-base text-neutral-400 leading-relaxed text-balance pb-6 border-b border-neutral-800">
        A collection of my open-source contributions across the Solana
        ecosystem. Most of my recent work focuses on the Samui Solana wallet,
        where I've shipped bug fixes, form validation improvements, and utility
        functions that directly impact production users. I also contribute to
        developer tooling like Gill SDK and have worked on data analysis tools
        like Pretzel AI.
      </p>

      <div className="mt-8">
        {proofOfWork.map((item) => (
          <OssItem key={`${item.org}-${item.repo}-${item.pr}`} item={item} />
        ))}
      </div>
    </section>
  );
}
