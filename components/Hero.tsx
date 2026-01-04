import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

export default function Hero() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-semibold tracking-tight">Nitin Yadav</h1>

      <p className="text-lg text-neutral-300">
        Frontend Engineer | Solana Developer
      </p>

       <p className="text-balance text-neutral-400 leading-relaxed">
        Frontend engineer with strong TypeScript and React experience, now
        focusing on Solana and Rust development. I build production UIs and
        contribute to open-source projects, with recent work on the Samui Solana
        wallet and ecosystem tooling. Currently expanding my skills in on-chain
        program development, Solana runtime concepts, and testing
        infrastructure.
      </p>

      {/* Status */}
      <div className="flex items-center gap-2 text-sm text-green-400">
        <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
        Open to opportunities
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <a
          href="https://github.com/Nitinyadav237"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
          aria-label="GitHub"
        >
          <IconBrandGithub size={24} />
        </a>

        <a
          href="https://x.com/NitinYa84"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
          aria-label="X (Twitter)"
        >
          <IconBrandX size={24} />
        </a>

        <a
          href="https://www.linkedin.com/in/nitin-yadav237/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
          aria-label="LinkedIn"
        >
          <IconBrandLinkedin size={24} />
        </a>

        <a
          href="mailto:nitin.yadav.ny2115@gmail.com"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
          aria-label="Email"
        >
          <IconMail size={24} />
        </a>
      </div>
    </section>
  );
}
