"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ContactMethod {
  name: string;
  value: string;
  href: string;
  isCopyable?: boolean;
  icon: (className?: string) => React.ReactNode;
  hoverColor: string;
}

const MailIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36 1.993 1.228 1.993 1.228 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 0C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.687.073-4.947s-.014-3.667-.072-4.947c-.2-4.358-2.617-6.78-6.979-6.98C15.668.014 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.074 3.756.172 5.502 1.946 5.674 5.675.059 1.265.074 1.645.074 4.85s-.015 3.585-.074 4.85c-.172 3.725-1.922 5.502-5.674 5.676-1.265.058-1.645.074-4.85.074s-3.585-.016-4.85-.074c-3.756-.172-5.502-1.947-5.674-5.676-.059-1.265-.074-1.645-.074-4.85s.015-3.585.074-4.85c.172-3.725 1.922-5.502 5.674-5.675 1.265-.058 1.645-.074 4.85-.074zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
  </svg>
);

const SignalIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 0q-.934 0-1.83.139l.17 1.111a11 11 0 0 1 3.32 0l.172-1.111A12 12 0 0 0 12 0M9.152.34A12 12 0 0 0 5.77 1.742l.584.961a10.8 10.8 0 0 1 3.066-1.27zm5.696 0-.268 1.094a10.8 10.8 0 0 1 3.066 1.27l.584-.962A12 12 0 0 0 14.848.34M12 2.25a9.75 9.75 0 0 0-8.539 14.459c.074.134.1.292.064.441l-1.013 4.338 4.338-1.013a.62.62 0 0 1 .441.064A9.7 9.7 0 0 0 12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m-7.092.068a12 12 0 0 0-2.59 2.59l.909.664a11 11 0 0 1 2.345-2.345zm14.184 0-.664.909a11 11 0 0 1 2.345 2.345l.909-.664a12 12 0 0 0-2.59-2.59M1.742 5.77A12 12 0 0 0 .34 9.152l1.094.268a10.8 10.8 0 0 1 1.269-3.066zm20.516 0-.961.584a10.8 10.8 0 0 1 1.27 3.066l1.093-.268a12 12 0 0 0-1.402-3.383M.138 10.168A12 12 0 0 0 0 12q0 .934.139 1.83l1.111-.17A11 11 0 0 1 1.125 12q0-.848.125-1.66zm23.723.002-1.111.17q.125.812.125 1.66c0 .848-.042 1.12-.125 1.66l1.111.172a12.1 12.1 0 0 0 0-3.662M1.434 14.58l-1.094.268a12 12 0 0 0 .96 2.591l-.265 1.14 1.096.255.36-1.539-.188-.365a10.8 10.8 0 0 1-.87-2.35m21.133 0a10.8 10.8 0 0 1-1.27 3.067l.962.584a12 12 0 0 0 1.402-3.383zm-1.793 3.848a11 11 0 0 1-2.345 2.345l.664.909a12 12 0 0 0 2.59-2.59zm-19.959 1.1L.357 21.48a1.8 1.8 0 0 0 2.162 2.161l1.954-.455-.256-1.095-1.953.455a.675.675 0 0 1-.81-.81l.454-1.954zm16.832 1.769a10.8 10.8 0 0 1-3.066 1.27l.268 1.093a12 12 0 0 0 3.382-1.402zm-10.94.213-1.54.36.256 1.095 1.139-.266c.814.415 1.683.74 2.591.961l.268-1.094a10.8 10.8 0 0 1-2.35-.869zm3.634 1.24-.172 1.111a12.1 12.1 0 0 0 3.662 0l-.17-1.111q-.812.125-1.66.125a11 11 0 0 1-1.66-.125" />
  </svg>
);

export const Contact = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (e: React.MouseEvent, text: string, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers or insecure contexts
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
    } catch (err) {
      console.warn("Failed to copy text: ", err);
    }
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const contactMethods: ContactMethod[] = [
    {
      name: "Email",
      value: "contact@beingrkn.com",
      href: "mailto:contact@beingrkn.com",
      icon: (className) => <MailIcon className={className} />,
      hoverColor: "group-hover:text-white",
    },
    {
      name: "Twitter",
      value: "mebeingrkn",
      href: "https://x.com/mebeingrkn",
      icon: (className) => <XIcon className={className} />,
      hoverColor: "group-hover:text-sky-400",
    },
    {
      name: "Discord",
      value: "beingrkn",
      href: "#",
      isCopyable: true,
      icon: (className) => <DiscordIcon className={className} />,
      hoverColor: "group-hover:text-[#5865F2]",
    },
    {
      name: "Instagram",
      value: "beingrkn",
      href: "https://instagram.com/beingrkn",
      icon: (className) => <InstagramIcon className={className} />,
      hoverColor: "group-hover:text-[#E1306C]",
    },
    {
      name: "Signal",
      value: "beingrkn",
      href: "#",
      isCopyable: true,
      icon: (className) => <SignalIcon className={className} />,
      hoverColor: "group-hover:text-[#3A76F0]",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-white/40 font-bold mb-4">
            Connect
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Get in Touch
          </h3>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Let&apos;s discuss game development, server systems, scaling Discord tools, or potential collaborations.
          </p>
        </motion.div>

        {/* Minimalist social links grid/row without boxes */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 max-w-4xl mx-auto mt-6">
          {contactMethods.map((method, index) => {
            const isCopy = method.isCopyable;
            const isCopied = copiedId === method.name;

            const iconElement = (
              <span className={cn(
                "text-white/40 transition-colors duration-300 flex items-center shrink-0",
                method.hoverColor
              )}>
                {method.icon("w-6 h-6")}
              </span>
            );

            const textElement = (
              <span className={cn(
                "text-base font-semibold transition-colors duration-300 select-all",
                isCopied ? "text-emerald-400 font-bold" : "text-white/60 group-hover:text-white"
              )}>
                {isCopied ? "copied!" : method.value}
              </span>
            );

            if (isCopy) {
              return (
                <motion.button
                  key={method.name}
                  onClick={(e) => handleCopy(e, method.value, method.name)}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="flex items-center gap-3 group cursor-pointer select-none py-1.5 transition-all duration-300 hover:-translate-y-0.5"
                  title={`Copy ${method.name}`}
                >
                  {iconElement}
                  {textElement}
                </motion.button>
              );
            }

            return (
              <motion.a
                key={method.name}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="flex items-center gap-3 group py-1.5 transition-all duration-300 hover:-translate-y-0.5"
              >
                {iconElement}
                {textElement}
              </motion.a>
            );
          })}
        </div>

        {/* Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-all flex items-center gap-2.5 shadow-xl shadow-white/5 group"
          >
            Open Resume
            <ArrowUpRight className="w-4 h-4 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
