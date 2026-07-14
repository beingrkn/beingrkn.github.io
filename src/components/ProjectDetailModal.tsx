"use client";

import { X, ExternalLink, Cpu, Globe, Zap, MessageSquare, Trophy, UserPlus } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Project } from "./Projects";

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export const ProjectDetailModal = ({ isOpen, onClose, project }: ProjectDetailModalProps) => {
  // Prevent scrolling when modal is open and handle Twitter widget script loading
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";

      if (project?.tweetEmbed) {
        const scriptId = "twitter-wjs";
        if (!document.getElementById(scriptId)) {
          const script = document.createElement("script");
          script.id = scriptId;
          script.src = "https://platform.twitter.com/widgets.js";
          script.async = true;
          document.body.appendChild(script);
        } else {
          const twttr = (window as Window & typeof globalThis & { twttr?: { widgets?: { load: () => void } } }).twttr;
          if (twttr && twttr.widgets) {
            twttr.widgets.load();
          }
        }
      }
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, project]);

  if (!project) return null;

  const isMinecraftDiscord = project.title === "Minecraft-Discord Voice Verification";
  const isRandomGPT = project.title === "RandomGPT Discord Assistant";

  return (
    isOpen ? (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-12">
        {/* Backdrop */}
        <div
          onClick={onClose}
          className="absolute inset-0 bg-black/80"
        />

        {/* Modal Content */}
        <div className="relative max-h-full w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-background shadow-xl">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 z-50 cursor-pointer rounded-full border border-white/10 bg-white/5 p-2 text-white/60"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="mb-12">
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                  {project.title}
                </h2>
                <p className="text-xl text-white/40 font-medium">
                  {isRandomGPT 
                    ? "All-in-one custom Discord bot packed with interactive features for community engagement and utility."
                    : isMinecraftDiscord
                    ? "Real-time cross-platform sync system connecting Minecraft servers with Discord voice channels."
                    : project.description
                  }
                </p>
              </div>

              {/* Main Visual / Diagram / Video */}
              {isMinecraftDiscord && (
                <div className="relative aspect-video mb-12 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                  <Image 
                    src="/projects/MinecraftDiscordVoiceVerification/workflow_minecraft_discord.png" 
                    alt="System Workflow Diagram"
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              )}

              {/* Dynamic workflow image if available */}
              {(!isMinecraftDiscord && project.workflowImage) && (
                <div className="relative mb-12 rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
                  <Image 
                    src={project.workflowImage} 
                    alt={`${project.title} Banner`}
                    width={1200}
                    height={675}
                    sizes="100vw"
                    className="h-auto max-h-[600px] w-full object-contain"
                  />
                </div>
              )}

              {/* Dynamic video embed if available and no workflow image */}
              {(!isMinecraftDiscord && !project.workflowImage && project.videoEmbed) && (
                <div className="relative aspect-video mb-12 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                  <iframe
                    src={project.videoEmbed}
                    title={`${project.title} Video`}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              )}


              {/* Detailed Content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8 space-y-12">
                  {isRandomGPT && (
                    <>
                      <section>
                        <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                          <Zap className="w-4 h-4 text-white/40" />
                          Mrify Command
                        </h3>
                        <div className="relative aspect-video mb-6 rounded-xl overflow-hidden border border-white/10 bg-white/5">
                          <Image 
                            src="/projects/RandomGPT/mrify_image.png" 
                            alt="Mrify Command Example"
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover"
                          />
                        </div>
                        <p className="text-white/60 leading-relaxed mb-4 text-sm md:text-base">
                          A signature feature that generates a personalized Mr. Random-themed logo for users in any color. The bot auto-detects user gender from their roles and applies distinct text styles. It integrates with a MongoDB database to manage a credit system — users receive 3 credits on joining the server and earn more by leveling up. Each logo generation costs 1 credit, encouraging interaction and progression.
                        </p>
                      </section>

                      <section>
                        <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                          <MessageSquare className="w-4 h-4 text-white/40" />
                          Generative AI Chatbot
                        </h3>
                        <div className="relative aspect-video mb-6 rounded-xl overflow-hidden border border-white/10 bg-white/5">
                          <Image 
                            src="/projects/RandomGPT/generativeaichatbot.jpg" 
                            alt="AI Chatbot Preview"
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover"
                          />
                        </div>
                        <p className="text-white/60 leading-relaxed text-sm md:text-base">
                          An AI-powered conversational assistant that delivers human-like real-time chats, adding a touch of personality and entertainment to the server.
                        </p>
                      </section>

                      <section>
                        <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                          <Trophy className="w-4 h-4 text-white/40" />
                          Live IPL Scoreboard
                        </h3>
                        <div className="relative aspect-video mb-6 rounded-xl overflow-hidden border border-white/10 bg-white/5">
                          <Image 
                            src="/projects/RandomGPT/scoreboard_image.png" 
                            alt="IPL Scoreboard Preview"
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover"
                          />
                        </div>
                        <p className="text-white/60 leading-relaxed text-sm md:text-base">
                          Built using <span className="text-white font-medium">Discord.py</span> and integrated with <span className="text-white font-medium">MongoDB</span>, this feature allows users to fetch real-time, detailed IPL cricket match data using the /scoreboard command. It provides a clean, readable scoreboard directly within Discord, boosting engagement by keeping sports fans active in the community without needing to switch apps.
                        </p>
                      </section>

                      <section>
                        <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                          <UserPlus className="w-4 h-4 text-white/40" />
                          Smart Voice Channel Join System
                        </h3>
                        <div className="relative aspect-video mb-6 rounded-xl overflow-hidden border border-white/10 bg-white/5">
                          <Image 
                            src="/projects/RandomGPT/drag_image.jpg" 
                            alt="VC Join System Preview"
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover"
                          />
                        </div>
                        <p className="text-white/60 leading-relaxed text-sm md:text-base">
                          When a VC is full, users can tag someone inside it to request a drag. The mentioned user receives interactive buttons to approve or deny the request with a single click, adding a smooth, non-intrusive way to manage VC entries.
                        </p>
                      </section>
                    </>
                  )}

                  {isMinecraftDiscord && (
                    <section>
                      <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-white/40" />
                        Execution Details
                      </h3>
                      <div className="prose prose-invert max-w-none text-white/60 leading-relaxed space-y-4 text-sm md:text-base">
                        <p>
                          For Mr. Random&apos;s Minecraft SMP, I developed a real-time voice verification system that connected the Minecraft Java server with the Discord community using MongoDB. The system allowed users to register for the SMP, during which a document was created in MongoDB containing their in-game name, Discord ID, and a voice_state boolean.
                        </p>
                        <p>
                          A custom Discord bot written in Python monitored users’ voice channel activity and updated the voice_state to true whenever a user joined a VC, and to false when they left. On the server side, I created a custom Minecraft plugin in Java that regularly queried the database every second.
                        </p>
                        <p>
                          Before allowing a player to join, the plugin checked whether their voice_state was set to true. If not, they were prevented from joining. Additionally, if a player left the Discord VC while already in-game, the plugin would automatically detect the change and kick them from the server in real time.
                        </p>
                        <p>
                          This integration ensured that only those actively participating in the voice chat were allowed to play, encouraging better communication and collaboration among players.
                        </p>
                      </div>
                    </section>
                  )}

                  {/* Generic dynamic section details */}
                  {!isRandomGPT && !isMinecraftDiscord && (
                    <section>
                      <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-white/40" />
                        Execution Details
                      </h3>
                      <div className="prose prose-invert max-w-none text-white/60 leading-relaxed space-y-4 text-sm md:text-base whitespace-pre-wrap">
                        {project.fullDescription || project.description}
                      </div>
                    </section>
                  )}

                  {/* Additional sections mapping if available */}
                  {project.sections && (
                    <div className="space-y-8 mt-8">
                      {project.sections.map((section, idx) => (
                        <div key={idx} className="space-y-4">
                          {section.content && (
                            <p className="text-white/60 leading-relaxed text-sm md:text-base">
                              {section.content}
                            </p>
                          )}
                          {section.videoEmbed && (
                            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/5">
                              <iframe
                                src={section.videoEmbed}
                                title={`${project.title} Video Section ${idx}`}
                                className="w-full h-full border-0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                loading="lazy"
                                allowFullScreen
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tweet embed if available */}
                  {project.tweetEmbed && (
                    <div className="mt-8 flex flex-col items-center w-full">
                      <style dangerouslySetInnerHTML={{ __html: `
                        iframe[id^="twitter-widget-"],
                        .twitter-tweet,
                        .twitter-tweet-rendered {
                          background-color: transparent !important;
                          border: 1px solid rgba(255, 255, 255, 0.05) !important;
                          border-radius: 1.5rem !important;
                          overflow: hidden !important;
                          box-shadow: 0 6px 18px -12px rgba(0, 0, 0, 0.55) !important;
                        }
                      `}} />
                      <blockquote className="twitter-tweet" data-theme="dark" data-align="center" data-link-color="#22d3ee">
                        <p lang="en" dir="ltr">
                          {project.tweetEmbed.text}
                        </p>
                        &mdash; {project.tweetEmbed.authorName} ({project.tweetEmbed.authorHandle}){" "}
                        <a href={project.tweetEmbed.tweetUrl}>{project.tweetEmbed.dateText}</a>
                      </blockquote>
                    </div>
                  )}
                </div>

                <div className="lg:col-span-4 space-y-8">
                  <section>
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Globe className="w-4 h-4 text-white/40" />
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {(project.fullTech || project.tech).split(", ").map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-white/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h3 className="text-white font-bold mb-4">Impact</h3>
                    <p className="text-sm text-white/40 leading-relaxed">
                      {isRandomGPT 
                        ? "Successfully enhanced community interaction and progression through gamified credit systems and real-time utility features."
                        : isMinecraftDiscord
                        ? "Successfully increased Discord server activity by forcing voice channel participation during active Minecraft sessions."
                        : project.title === "IPL XP Betting System"
                        ? "Engaged Mr. Random's community during the 2025 IPL Event with real-time match predictions and automated betting mechanics."
                        : project.title === "Team Chat Plugin"
                        ? "Improved coordination and team organization for three distinct factions in a large-scale Minecraft event."
                        : project.title === "Holix"
                        ? "Built a viral, interactive Holi event website where users threw colored water balloons at custom X profile pictures."
                        : project.title === "Game for Rawknee"
                        ? "Resumed work on a stylized game development project originally started in 2023."

                        : project.title === "Portfolio Web: Mehul Sen"
                        ? "Delivered a premium, high-performance portfolio featuring sleek video editing project integrations."
                        : project.title === "Multiple Minecraft Events (Mr. Random)"
                        ? "Managed and built custom infrastructure for India's largest 20-day Minecraft event with 60 active players."
                        : project.title === "Overlab.in"
                        ? "Established a scalable, high-performance web presence for a creative branding and social agency."
                        : "Successfully designed and deployed features matching community and client goals."
                      }
                    </p>
                  </section>
                  
                  <div className="pt-4 space-y-3">
                    {/* Action Links if available (e.g. Try It, GitHub Repo) */}
                    {project.actionLinks && project.actionLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-center font-bold",
                          link.label === "TRY_IT"
                            ? "bg-white text-black"
                            : "border border-white/10 bg-white/5 text-white"
                        )}
                      >
                        {link.label === "TRY_IT" ? "Try It Live" : "View on GitHub"}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ))}

                    {/* Fallback to detailsLink / visitLink if actionLinks are not defined */}
                    {!project.actionLinks && (project.detailsLink || project.visitLink) && (
                      <a
                        href={project.detailsLink || project.visitLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white py-4 text-center font-bold text-black"
                      >
                        {project.visitLink?.includes("youtube.com") || project.visitLink?.includes("youtu.be")
                          ? "Watch on YouTube"
                          : project.visitLink?.includes("x.com") || project.visitLink?.includes("twitter.com")
                            ? "Watch Video on X"
                            : project.visitLink
                              ? "Visit Website"
                              : project.title === "IPL XP Betting System"
                                ? "Read More"
                                : "View Source"}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null
  );
};
