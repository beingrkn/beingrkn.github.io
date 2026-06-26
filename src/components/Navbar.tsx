"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Journey", href: "#journey" },
  { name: "Projects", href: "#projects" },
  { name: "Feed", href: "#feed" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-6">
        {/* Desktop Navigation */}
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              {item.name}
            </Link>
          ))}
        </motion.nav>

        {/* Mobile Navigation Trigger Bar */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex md:hidden items-center justify-between w-full max-w-[calc(100vw-3rem)] px-5 py-3 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl relative z-[110]"
        >
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-xs font-bold uppercase tracking-widest text-white"
          >
            RKN
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-6 h-6 text-white cursor-pointer focus:outline-none flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between relative">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full h-0.5 bg-white rounded-full origin-center"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="w-full h-0.5 bg-white rounded-full"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full h-0.5 bg-white rounded-full origin-center"
              />
            </div>
          </button>
        </motion.div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-2xl z-[90] flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-bold uppercase tracking-widest text-white/50 hover:text-white transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
