import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExperienceItem {
  date: string;
  role: string;
  company: string;
  description: string[];
  link?: string;
}

const experiences: ExperienceItem[] = [
  {
    date: "May 2025 – Present",
    role: "Head of Operations",
    company: "R.O.T.I.",
    link: "https://letsroti.com/",
    description: [
      "Overseeing strategy and scaling for a top-tier multipurpose Discord bot.",
      "Coordinating development and community teams for smooth operations.",
      "Managing 76.8k+ communities with 17.3M+ members & 4.98/5 rating.",
    ],
  },
  {
    date: "Nov 2025 – Present",
    role: "Technical Lead",
    company: "Overlab.in",
    link: "https://www.overlab.in/",
    description: [
      "Overseeing technical operations and supporting platform growth.",
      "Managing and coordinating a team of developers.",
      "Built and currently managing Overlab’s website.",
    ],
  },
  {
    date: "Feb 2021 – Present",
    role: "Community Manager & Lead Dev",
    company: "Mr. Random",
    link: "https://www.youtube.com/@MrRandomUniverse",
    description: [
      "Led development for India’s largest Minecraft event (20-day run).",
      "Builder & Junior Developer for a #1 ranked Indian and world #8 most-voted Minecraft server.",
      "Developed 10+ custom Minecraft plugins.",
      "Coordinated moderators, creators, and community teams.",
    ],
  },
  {
    date: "May 2022 – May 2023",
    role: "Lead Python Developer",
    company: "Orator",
    link: "https://discord.com/discovery/applications/948637316145102868",
    description: [
      "Developed a high-concurrency TTS bot supporting 50+ AI voices.",
      "Scaled bot to 34k+ servers and 3.4M members.",
    ],
  },
  {
    date: "Jul 2021 – Mar 2022",
    role: "Founder & Lead Developer",
    company: "Harmonium Craft",
    description: [
      "Founded India’s most-voted modded survival Minecraft server.",
      "Handled 6k unique monthly players.",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Career Path
          </h3>
        </div>

        <div className="relative border-l border-white/5 ml-4 md:ml-0 space-y-12">
          {experiences.map((exp, index) => {
            const isPresent = exp.date.toLowerCase().includes("present");
            return (
              <div key={index} className="relative pl-8 md:pl-12 py-4">
                {/* Timeline Dot */}
                <div 
                  className={cn(
                    "absolute left-[-5px] top-7 h-2.5 w-2.5 rounded-full border border-background ring-4",
                    isPresent 
                      ? "bg-white ring-white/20" 
                      : "bg-white/10 ring-background"
                  )} 
                />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-white/40 font-medium tracking-wide">
                      {exp.date}
                    </span>
                    <h4 className="text-xl md:text-2xl font-bold text-white">
                      {exp.role}
                    </h4>
                  </div>
                  <div className="inline-flex">
                    {exp.link ? (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white/60"
                      >
                        {exp.company}
                        <ExternalLink className="h-3 w-3 text-white/40" />
                      </a>
                    ) : (
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/30 text-xs font-bold uppercase tracking-wider cursor-default">
                        {exp.company}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-white/60 leading-relaxed">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Highlighted Box */}
        <div className="relative mt-20 overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8">
          <p className="text-white/60 text-sm md:text-base leading-relaxed relative z-10">
            I have also worked for popular creators like <span className="text-white font-medium">Mythpat</span> and <span className="text-white font-medium">Andreobee</span> managing gaming community events, and served as a community moderator at <span className="text-white font-medium">WEX Mobile</span>. These roles highlight my deep community management experience.
          </p>
        </div>
      </div>
    </section>
  );
};
