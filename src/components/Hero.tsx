import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { BackgroundGlow } from "./BackgroundGlow";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-32 overflow-hidden bg-background selection:bg-primary/30">
      <BackgroundGlow />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="lg:col-span-8 flex flex-col items-start">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-white/40 md:text-base">
            Hello, I&apos;m RKN
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-7xl lg:text-8xl">
            Building Games, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-blue-500">
              Tools, and Online Communities
            </span>
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
            Developer scaling and managing Discord tools that power <span className="text-white">76.8k+ communities</span> and <span className="text-white">17.3M+ members</span>, Minecraft servers, indie games, and meaningful internet products.
          </p>

          <p className="mb-10 max-w-xl text-base text-white/40">
            Currently Head of Operations at R.O.T.I. Passionate about game development, community systems, backend infrastructure, and AI tools.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-black shadow-lg shadow-white/5"
            >
              Explore My Work
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:contact@beingrkn.com"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="relative hidden lg:col-span-4 lg:block">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/pfpsite.png"
              alt="RKN"
              fill
              priority
              sizes="(min-width: 1024px) 28vw, 0px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
