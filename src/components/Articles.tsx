import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export const Articles = () => {
  return (
    <section id="articles" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-white/40 font-bold mb-4">
            Writing
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Articles
          </h3>
          <p className="text-white/60 text-lg max-w-2xl">
            Thoughts on building, validation, and the uncomfortable questions worth asking before shipping.
          </p>
        </div>

        <a
          href="https://x.com/mebeingrkn/status/2071960824038797579"
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/9] overflow-hidden lg:h-full lg:aspect-auto">
                <Image
                  src="/articles/youre-probably-building-something-nobody-asked-for/banner.png"
                  alt="You’re Probably Building Something Nobody Asked For article banner"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-between">
              <div>
                <h4 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                  You&apos;re Probably Building Something Nobody Asked For.
                </h4>

                <p className="text-white/60 text-base md:text-lg leading-relaxed">
                  A direct take on why validation matters, how builders get trapped in their own excitement, and what to test before investing too much into the wrong thing.
                </p>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white">
                Read on X
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};
