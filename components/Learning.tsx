import { learningTimeline } from "@/data/learning";
import LearningItem from "@/components/LearningItem";
import { IconBook } from "@tabler/icons-react";

export default function Learning() {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <IconBook className="h-5 w-5 sm:h-6 sm:w-6" />
        <h2 className="text-xl sm:text-2xl font-bold">Learning</h2>
      </div>

      <p className="text-sm sm:text-base text-neutral-400 leading-relaxed text-balance pb-5 border-b border-neutral-800 ">
        Structured learning path through hands-on development. Started with
        Ethereum fundamentals and smart contracts through Alchemy, then
        transitioned to Solana with deep dives into program development, account
        models, runtime behavior, and testing infrastructure through Turbin3 and
        Ackee bootcamps.
      </p>

      <div className="mt-8">
        {learningTimeline.map((item, idx) => (
          <LearningItem key={idx} item={item} />
        ))}
      </div>
    </section>
  );
}
