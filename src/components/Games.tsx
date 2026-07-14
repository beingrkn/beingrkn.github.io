"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Play, X } from "lucide-react";
import Image from "next/image";

const screenshots = [
  "/games/chick-chick-go/screenshot-1.png",
  "/games/chick-chick-go/screenshot-2.png",
  "/games/chick-chick-go/screenshot-3.png",
  "/games/chick-chick-go/screenshot-4.png",
];

export const Games = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState<number | null>(null);

  useEffect(() => {
    if (isOpen || activeScreenshotIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, activeScreenshotIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (activeScreenshotIndex === null) return;

      if (event.key === "Escape") {
        setActiveScreenshotIndex(null);
      }

      if (event.key === "ArrowLeft") {
        setActiveScreenshotIndex((prev) =>
          prev === null ? prev : (prev - 1 + screenshots.length) % screenshots.length
        );
      }

      if (event.key === "ArrowRight") {
        setActiveScreenshotIndex((prev) =>
          prev === null ? prev : (prev + 1) % screenshots.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeScreenshotIndex]);

  const showPreviousScreenshot = () => {
    setActiveScreenshotIndex((prev) =>
      prev === null ? prev : (prev - 1 + screenshots.length) % screenshots.length
    );
  };

  const showNextScreenshot = () => {
    setActiveScreenshotIndex((prev) =>
      prev === null ? prev : (prev + 1) % screenshots.length
    );
  };

  return (
    <>
      <section id="games" className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16">
            <h2 className="text-sm uppercase tracking-[0.3em] text-white/40 font-bold mb-4">
              Playable Work
            </h2>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                  Games
                </h3>
                <p className="text-white/60 text-lg max-w-2xl">
                  Small worlds, tight mechanics, and experiments that turn ideas into something you can actually play.
                </p>
              </div>

              <a
                href="https://beingrkn.itch.io/chick-chick-go"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white md:self-auto"
              >
                Play on itch.io
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <article className="overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02]">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-7">
                <div className="relative aspect-[16/10] overflow-hidden lg:h-full lg:aspect-auto">
                  <Image
                    src="/games/chick-chick-go/banner.png"
                    alt="Chick Chick Go banner"
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Indie Game", "Arcade Survival", "Game Jam"].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mb-4">
                    <h4 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
                      Chick Chick Go
                    </h4>
                    <p className="text-white/60 text-base md:text-lg leading-relaxed">
                      A fast, cheerful survival game where you dodge foxes, chain corn pickups, and grab upgrades while the chaos keeps escalating.
                    </p>
                  </div>

                  <p className="text-sm text-white/40 leading-relaxed">
                    Open the popup to view gameplay, screenshots, and the itch embed in one place.
                  </p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setIsOpen(true)}
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-black"
                  >
                    View Details
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <a
                    href="https://www.youtube.com/watch?v=14FZys3CwiQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white"
                  >
                    <Play className="w-4 h-4" />
                    Watch Gameplay
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-12">
          <div
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/80"
          />

          <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-[2rem] border border-white/10 bg-background shadow-xl">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-5 top-5 z-20 cursor-pointer rounded-full border border-white/10 bg-white/5 p-2 text-white/60"
                aria-label="Close game details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-5 md:p-8 lg:p-10">
                <div className="mb-8 md:mb-10">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {["Indie Game", "Arcade Survival", "Game Jam"].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                      <h4 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-3">
                        Chick Chick Go
                      </h4>
                      <p className="text-white/60 text-base md:text-lg max-w-3xl leading-relaxed">
                        A fast, cheerful survival game where you dodge foxes, chain corn pickups, and grab upgrades while the chaos keeps escalating.
                      </p>
                    </div>

                    <a
                      href="https://beingrkn.itch.io/chick-chick-go"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex self-start rounded-full bg-white px-6 py-3.5 font-semibold text-black"
                    >
                      Play on itch.io
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.02] mb-6">
                  <div className="relative aspect-[16/9] overflow-hidden md:aspect-[16/8]">
                    <Image
                      src="/games/chick-chick-go/banner.png"
                      alt="Chick Chick Go banner"
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="mb-6 space-y-6">
                  <div className="rounded-[2rem] bg-white/[0.02] border border-white/5 p-4 md:p-5">
                    <iframe
                      title="Chick Chick Go itch embed"
                      src="https://itch.io/embed/4771180?linkback=true"
                      className="w-full h-[190px] md:h-[210px] border-0 rounded-[1.5rem] bg-black/20"
                      loading="lazy"
                    />
                  </div>

                  <div className="aspect-video overflow-hidden rounded-[2rem]">
                    <iframe
                      src="https://www.youtube.com/embed/14FZys3CwiQ"
                      title="Chick Chick Go gameplay video"
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      loading="lazy"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {screenshots.map((screenshot, index) => (
                    <button
                      key={screenshot}
                      type="button"
                      onClick={() => setActiveScreenshotIndex(index)}
                      className="rounded-[2rem] overflow-hidden border border-white/5 bg-white/[0.02] cursor-pointer text-left"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={screenshot}
                          alt={`Chick Chick Go screenshot ${index + 1}`}
                          fill
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
        </div>
      )}

      {activeScreenshotIndex !== null && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-6">
          <div
            onClick={() => setActiveScreenshotIndex(null)}
            className="absolute inset-0 bg-black/90"
          />

          <div className="relative w-full max-w-6xl">
              <button
                type="button"
                onClick={() => setActiveScreenshotIndex(null)}
                className="absolute right-3 top-3 z-20 cursor-pointer rounded-full border border-white/10 bg-black/50 p-2 text-white/70 md:right-5 md:top-5"
                aria-label="Close screenshot viewer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-black">
                <div className="relative aspect-[16/10] md:aspect-[16/9]">
                  <Image
                    src={screenshots[activeScreenshotIndex]}
                    alt={`Chick Chick Go screenshot ${activeScreenshotIndex + 1}`}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>

                <button
                  type="button"
                  onClick={showPreviousScreenshot}
                  className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-full border border-white/10 bg-black/50 p-3 text-white md:left-5"
                  aria-label="Previous screenshot"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={showNextScreenshot}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-full border border-white/10 bg-black/50 p-3 text-white md:right-5"
                  aria-label="Next screenshot"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/55 border border-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white/80">
                  {activeScreenshotIndex + 1} / {screenshots.length}
                </div>
              </div>
            </div>
        </div>
      )}
    </>
  );
};
