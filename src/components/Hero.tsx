"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BackgroundGlow } from "./BackgroundGlow";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-32 overflow-hidden bg-background selection:bg-primary/30">
      <BackgroundGlow />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="lg:col-span-8 flex flex-col items-start">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Crafting digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-blue-500">
              spaces that scale.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mb-8 leading-relaxed"
          >
            19-year-old developer scaling and managing Discord tools that power <span className="text-white">76.8k+ communities</span> and <span className="text-white">17.3M+ members</span>, Minecraft servers, indie games, and meaningful internet products.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base text-white/40 max-w-xl mb-10"
          >
            Currently Head of Operations at R.O.T.I. Passionate about game development, community systems, backend infrastructure, and AI tools.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all flex items-center gap-2 group shadow-xl shadow-white/5"
            >
              Explore My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="mailto:contact@beingrkn.com"
              className="px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="lg:col-span-4 hidden lg:block relative">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="/pfpsite.png"
              alt="RKN"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
