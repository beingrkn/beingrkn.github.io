"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Journey", href: "#journey" },
  { name: "Games", href: "#games" },
  { name: "Projects", href: "#projects" },
  { name: "Articles", href: "#articles" },
  { name: "Feed", href: "#feed" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 160;
      let currentSection = sectionIds[0];

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;

        if (scrollPosition >= element.offsetTop) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-6">
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/80 p-1.5 shadow-lg backdrop-blur-md md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest transition-colors",
                activeSection === item.href.replace("#", "")
                  ? "bg-white/10 text-white"
                  : "text-white/40"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Trigger Bar */}
        <div className="relative z-[110] flex w-full max-w-[calc(100vw-3rem)] items-center justify-between rounded-full border border-white/10 bg-black/80 px-5 py-3 shadow-lg backdrop-blur-md md:hidden">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-xs font-bold uppercase tracking-widest text-white"
          >
            RKN
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-6 w-6 cursor-pointer items-center justify-center text-white"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-background/95 md:hidden">
          <div className="flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "rounded-full px-5 py-3 text-3xl font-bold uppercase tracking-widest",
                  activeSection === item.href.replace("#", "")
                    ? "bg-white/10 text-white"
                    : "text-white/70"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
