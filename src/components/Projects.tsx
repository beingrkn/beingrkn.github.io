"use client";

import { useState } from "react";
import { ArrowUpRight, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProjectDetailModal } from "./ProjectDetailModal";

export interface ActionLink {
  label: string;
  url: string;
}

export interface TweetEmbed {
  text: string;
  mediaUrl: string;
  tweetUrl: string;
  authorName: string;
  authorHandle: string;
  dateText: string;
}

export interface Section {
  videoEmbed?: string;
  content?: string;
}

export interface Project {
  title: string;
  category: string;
  tags: string[];
  description: string;
  tech: string;
  cta: string;
  link?: string;
  fullDescription?: string;
  fullTech?: string;
  workflowImage?: string;
  detailsLink?: string;
  visitLink?: string;
  videoEmbed?: string;
  actionLinks?: ActionLink[];
  tweetEmbed?: TweetEmbed;
  sections?: Section[];
}

const projects: Project[] = [
  {
    title: "Minecraft-Discord Voice Verification",
    category: "Automation",
    tags: ["Security", "Integration"],
    description: "Real-time cross-platform sync system that automatically manages server access based on Discord VC status.",
    tech: "Java, Python, MongoDB",
    cta: "Read More",
  },
  {
    title: "RandomGPT Discord Assistant",
    category: "Discord Bots",
    tags: ["Image Manipulation", "Discord Bot"],
    description: "Advanced bot featuring AI conversations, logo generation, and live IPL scoreboard integration.",
    tech: "Python, Pillow",
    cta: "Read More",
  },
  {
    title: "IPL XP Betting System",
    category: "Discord Bots",
    tags: ["Discord Bot", "Gamification"],
    description: "XP-based match prediction and betting system with match locking and global leaderboards.",
    tech: "Python, Discord.py",
    cta: "Read More",
    fullDescription: "I initially developed the IPL-based XP betting system used in Mr. Random's community during the early phases of the 2025 IPL Event. The system allowed users to place XP-based bets on IPL matches directly within Discord, making the experience highly interactive and engaging.\n\nIt featured key mechanics like XP deduction, match locking and result processing, and leaderboard updates. Later, the system was migrated to Skybot (developed by Lakshay Krishna) for improved scalability and additional features-but it still retained core components and critical logic originally written by me. This project reflects my ability to design scalable, gamified systems tightly integrated with real-time events and community engagement.",
    fullTech: "Python, Discord.py",
    workflowImage: "/projects/IPLXPBettingSystem/IPL_Banner.jpg",
    detailsLink: "https://github.com/MrRandomUniverse/IPL-Event-2025/blob/main/README.md"
  },
  {
    title: "Team Chat Plugin",
    category: "Minecraft",
    tags: ["Communication", "Spigot Plugin"],
    description: "Toggleable cross-environment team communication tool designed for based Minecraft events.",
    tech: "Java, Spigot API",
    cta: "Read More",
    fullDescription: "Created a custom Minecraft Java plugin for Mr. Random's special event featuring three themed teams: Desert, Snow, and Forest. The plugin introduced a toggable team chat system, allowing players to switch between team only communication and global chat during gameplay. This system helped improve coordination while keeping the event immersive and organized. Built using the Spigot API.",
    fullTech: "Java, Spigot API",
    workflowImage: "/projects/TeamChatPlugin/teamchats.png"
  },
  {
    title: "Holix",
    category: "Web",
    tags: ["Interactive", "Game Dev"],
    description: "A playful Holi website where you throw colored water balloons at any X profile picture.",
    tech: "Godot, GDScript",
    cta: "Read More",
    fullDescription: "Holix is a fun side project built for Holi. It lets you throw colored water balloons at your favorite X account's profile picture in a playful 3D scene.\n\nControls\n- WASD - Move around\n- Mouse - Look around\n- Left Click - Throw water balloon\n- E - Open profile picture\n- M - Lock/Unlock mouse\n- Space - Jump\n- TAB - Restart scene\n\nHow to Load a Profile Picture\n1. Go to any user's profile on x.com (e.g., https://x.com/username)\n2. Click on their profile picture - this opens a page like https://x.com/{username}/photo\n3. Right-click the image and choose Open image in new tab or Copy image address\n4. The URL should look similar to: https://pbs.twimg.com/profile_images/2013680447725740033/LEIqdjJP_400x400.jpg\n5. Copy the image URL and paste it into the in-game menu (press Esc to open)\n6. Submit and start throwing balloons!",
    fullTech: "Godot, GDScript",
    actionLinks: [
      {
        label: "TRY_IT",
        url: "https://beingrkn.github.io/holix/"
      },
      {
        label: "GITHUB_REPO",
        url: "https://github.com/beingrkn/holix"
      }
    ],
    tweetEmbed: {
      text: "🚨 Someone just built a website that lets you throw coloured water balloons at your favourite X account's profile photo for Holi.",
      mediaUrl: "https://t.co/mb1Ufh7jiH",
      tweetUrl: "https://twitter.com/mebeingrkn/status/2028651573136535990?ref_src=twsrc%5Etfw",
      authorName: "RKN",
      authorHandle: "@mebeingrkn",
      dateText: "March 3, 2026"
    }
  },
  {
    title: "Game for Rawknee",
    category: "Game Dev",
    tags: ["Indie Game", "In Progress", "Unity 3D"],
    description: "An incomplete game project developed in 2023 while attempting to create dev logs.",
    tech: "Unity, C#",
    cta: "Read More",
    fullDescription: "Back in January 2023, I started this exciting journey to document my game development process through devlogs. This video is the first 55 seconds I edited as part of that attempt. The game was progressing well, but unfortunately, I never completed the full video. Shortly after, I got deeply involved in my JEE preparation and had to put the project and devlogs on hold. Now, after a long break, I'm slowly getting back into learning game development again bit by bit, day by day. This video stands as a reminder of where I left off, and the journey I'm preparing to restart. I'm excited to inform that I've resumed working on this game and am committed to completing it this time around. Stay tuned for more updates as I continue this development journey!",
    fullTech: "Unity, C#",
    videoEmbed: "https://www.youtube.com/embed/ULL151OcQ1s?si=c2hUsXQh9wSoYLPl",
    visitLink: "https://www.youtube.com/watch?v=ULL151OcQ1s"
  },
  {
    title: "Chick Chick Go",
    category: "Game Dev",
    tags: ["Indie Game", "Arcade Survival", "Game Jam"],
    description: "A fast survival game where you dodge foxes, chain corn pickups, and grab upgrades as the run gets more chaotic.",
    tech: "Game Dev, Arcade Design",
    cta: "Read More",
    fullDescription: "Chick Chick Go is a cheerful arcade survival game built around quick movement, escalating pressure, and satisfying upgrade choices. You play as a chicken trying to survive while collecting corn, avoiding foxes, and pushing your run further each time.\n\nThe goal was to keep the game instantly readable and fun while still making every run feel a little more intense. Bright visuals, simple goals, and short survival loops make it easy to jump in while still leaving room for mastery.",
    fullTech: "Arcade Gameplay Design, Survival Loop Design, UI Polish",
    workflowImage: "/games/chick-chick-go/banner.png",
    videoEmbed: "https://www.youtube.com/embed/14FZys3CwiQ",
    visitLink: "https://beingrkn.itch.io/chick-chick-go",
    actionLinks: [
      {
        label: "PLAY_ON_ITCH",
        url: "https://beingrkn.itch.io/chick-chick-go"
      },
      {
        label: "WATCH_GAMEPLAY",
        url: "https://www.youtube.com/watch?v=14FZys3CwiQ"
      }
    ]
  },
  {
    title: "Portfolio Web: Mehul Sen",
    category: "Web",
    tags: ["Design", "E-commerce"],
    description: "High-performance portfolio for a leading Indian video editor, featuring a custom Flask-based digital assets store with secure payments.",
    tech: "Python Flask, Supabase, GSAP, Cashfree API",
    cta: "Read More",
    visitLink: "https://www.mehulsen.in/",
    fullDescription: "Designed and developed a premium portfolio website for Mehul Sen, a leading Indian video editor. The platform now features a custom digital store section allowing visitors to discover the brand, browse products, create accounts, complete secure purchases via Cashfree, verify payment status, and unlock protected asset downloads after checkout.",
    fullTech: "Python Flask, Supabase, GSAP, Cashfree API, HTML5/CSS3"
  },
  {
    title: "Multiple Minecraft Events (Mr. Random)",
    category: "Minecraft",
    tags: ["Management", "Infrastructure"],
    description: "Organized India’s largest 20-day Minecraft event with three teams, custom mechanics, anti-cheat.",
    tech: "Java",
    cta: "Read More",
    fullDescription: "I hosted the first-ever Minecraft civilization event for Mr. Random, an extraordinary endeavor where more than 1000 people applied to participate. From this massive pool, I carefully filtered and selected 60 people, who were then distributed into 3 distinct teams: Desert, Snow, and Forest. Over the next 15 to 20 real-life days, these 60 players logged in daily to compete and collaborate in this immersive event.\n\nEach team had unique advantages and disadvantages. For example, the Snow team suffered reduced performance during rainy conditions, while the Forest team experienced less forest damage. These mechanics added depth and strategic complexity to the event, making it more engaging and competitive.\n\nWhile Mr. Random's official video documentation is still pending (and possibly cancelled), attaching below the event captured from participant's perspectives.",
    fullTech: "Java, Spigot API",
    workflowImage: "/projects/MultipleMinecraftEvents/minecraft_event_random.webp",
    sections: [
      {
        videoEmbed: "https://www.youtube.com/embed/IRcg9yW96xI?si=P2_KLTRnZ5zIQwHK"
      },
      {
        content: "Beyond this civilization event, I have coded and created custom Minecraft mechanics for many of Mr. Random's other events as well, demonstrating my versatility in designing complex, multi-player game systems and event infrastructure."
      },
      {
        videoEmbed: "https://www.youtube.com/embed/c2FvcI9Ezaw?si=g-qYQZFIioUg05Q4"
      }
    ]
  },
  {
    title: "Overlab.in",
    category: "Web",
    tags: ["UI/UX", "Web Dev"],
    description: "Designed, developed, and managed the website behind Overlab, enabling the agency to build unforgettable social identities through a strong and scalable digital presence.",
    tech: "TypeScript, React",
    cta: "Visit",
    visitLink: "https://www.overlab.in/"
  },
];


const categories = ["All", "Web", "Discord Bots", "Minecraft", "Game Dev", "Automation"];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-white/40 font-bold mb-4">
            Featured Work
          </h2>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Projects
              </h3>
              <p className="text-white/60 text-lg max-w-xl">
                Building tools, communities, games, and digital experiences that scale.
              </p>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider",
                    activeCategory === cat
                      ? "bg-white text-black border-white"
                      : "border-white/5 bg-white/5 text-white/40"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="group relative flex cursor-pointer flex-col rounded-3xl border border-white/5 bg-white/[0.02] p-8"
            >
              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h4 className="mb-3 text-xl font-bold text-white">
                  {project.title}
                </h4>
                
                <p className="mb-8 line-clamp-3 text-sm leading-relaxed text-white/50">
                  {project.description}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-6">
                  <div className="flex items-center gap-2 text-white/30">
                    <Code2 className="h-3.5 w-3.5" />
                    <span className="max-w-[120px] truncate text-[10px] font-medium tracking-wide">
                      {project.tech}
                    </span>
                  </div>
                  
                  <button className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white">
                    {project.cta}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectDetailModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        project={selectedProject} 
      />
    </section>
  );
};
