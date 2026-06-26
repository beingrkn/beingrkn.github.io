"use client";

import { motion } from "framer-motion";
import { MessageSquare, Heart, Repeat2, Bookmark, Share2, ArrowUpRight } from "lucide-react";

interface Tweet {
  id: string;
  author: {
    name: string;
    handle: string;
    avatar: string;
    verified: boolean;
  };
  text: string;
  mediaUrl?: string;
  mediaAlt?: string;
  videoUrl?: string;
  date: string;
  stats: {
    views: string;
    replies: string;
    retweets: string;
    likes: string;
    bookmarks: string;
  };
  tweetUrl: string;
}

const tweets: Tweet[] = [
  {
    id: "1",
    author: {
      name: "RKN",
      handle: "@mebeingrkn",
      avatar: "/twitter/pfp.jpg",
      verified: true,
    },
    text: "Finally. It actually feels like you're PLAYING the game now 🥳🥳",
    videoUrl: "/twitter/1.mp4",
    date: "3:50 PM · May 25, 2026",
    stats: {
      views: "1,048",
      replies: "5",
      retweets: "3",
      likes: "17",
      bookmarks: "4",
    },
    tweetUrl: "https://x.com/mebeingrkn/status/2058855806607778070",
  },
  {
    id: "2",
    author: {
      name: "RKN",
      handle: "@mebeingrkn",
      avatar: "/twitter/pfp.jpg",
      verified: true,
    },
    text: "🚨 Someone just built a website that lets you throw coloured water balloons at your favourite X account's profile photo for Holi.",
    videoUrl: "/twitter/2.mp4",
    date: "7:30 AM · Mar 3, 2026",
    stats: {
      views: "3,242",
      replies: "16",
      retweets: "6",
      likes: "47",
      bookmarks: "3",
    },
    tweetUrl: "https://x.com/mebeingrkn/status/2028651573136535990",
  },
  {
    id: "3",
    author: {
      name: "RKN",
      handle: "@mebeingrkn",
      avatar: "/twitter/pfp.jpg",
      verified: true,
    },
    text: "Was working on a game for @TheRawKnee in 2023. Would continue if he comments.",
    videoUrl: "/twitter/3.mp4",
    date: "9:17 PM · Nov 12, 2025",
    stats: {
      views: "1,001",
      replies: "1",
      retweets: "0",
      likes: "8",
      bookmarks: "0",
    },
    tweetUrl: "https://x.com/mebeingrkn/status/1988634777943986181",
  },
];

// Custom X (Twitter) Logo SVG Component
const XLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Custom X (Twitter) Verified Badge SVG Component
const VerifiedBadge = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.79-4-4-4-.495 0-.97.084-1.41.238-.65-1.273-2.02-2.148-3.6-2.148-1.58 0-2.95.875-3.6 2.148-.44-.154-.915-.238-1.41-.238-2.21 0-4 1.79-4 4 0 .495.084.965.238 1.4-1.273.65-2.148 2.02-2.148 3.6 0 1.58.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.79 4 4 4 .495 0 .97-.084 1.41-.238.65 1.273 2.02 2.148 3.6 2.148 1.58 0 2.95-.875 3.6-2.148.44.154.915.238 1.41.238 2.21 0 4-1.79 4-4 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6z"
      fill="#1d9bf0"
    />
    <path
      d="M10 17l-3.5-3.5 1.415-1.415L10 14.17l6.085-6.085L17.5 9.5 10 17z"
      fill="white"
    />
  </svg>
);

export const TwitterFeed = () => {
  return (
    <section id="feed" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-white/40 font-bold mb-4">
              Build In Public
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              On the Feed
            </h3>
            <p className="text-white/60 text-lg max-w-xl">
              Following my game dev journey, feature updates, and technical experiments live on X.
            </p>
          </div>

          <a
            href="https://x.com/mebeingrkn"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full border border-white/10 transition-all flex items-center gap-2 self-start md:self-auto group"
          >
            <XLogo className="w-4 h-4" />
            Follow @mebeingrkn
            <ArrowUpRight className="w-4 h-4 transition-transform" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tweets.map((tweet, index) => (
            <motion.a
              key={tweet.id}
              href={tweet.tweetUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300 group relative h-full"
            >
              {/* Card top border glow on hover */}
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Author Info */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={tweet.author.avatar}
                  alt={tweet.author.name}
                  className="w-10 h-10 rounded-full border border-white/10"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-white text-sm truncate">
                      {tweet.author.name}
                    </span>
                    {tweet.author.verified && (
                      <VerifiedBadge className="w-3.5 h-3.5 shrink-0" />
                    )}
                  </div>
                  <span className="text-xs text-white/40 block truncate">
                    {tweet.author.handle}
                  </span>
                </div>
                <XLogo className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
              </div>

              {/* Tweet Content */}
              <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-2 whitespace-pre-line">
                {tweet.text}
              </p>

              {/* Tweet Video */}
              {tweet.videoUrl && (
                <div className="relative w-full rounded-2xl overflow-hidden mb-4 border border-white/5 aspect-video bg-black/40 group/video">
                  <video
                    src={tweet.videoUrl}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/video:scale-[1.03]"
                    muted
                    loop
                    playsInline
                    autoPlay
                  />
                </div>
              )}

              {/* Tweet Date & Divider pushed to bottom */}
              <div className="mt-auto pt-4">
                <div className="text-[11px] text-white/30 mb-4 flex items-center font-medium">
                  <span>{tweet.date}</span>
                  {tweet.stats.views !== "0" && (
                    <>
                      <span className="mx-1">·</span>
                      <span className="text-white font-semibold">{tweet.stats.views}</span>
                      <span className="ml-1">Views</span>
                    </>
                  )}
                </div>
                <div className="h-px bg-white/5 w-full mb-4" />

                {/* Tweet Stats / Actions */}
                <div className="flex items-center justify-between text-white/40 text-xs px-1">
                  <div className="flex items-center gap-1.5 hover:text-blue-400 transition-colors" title="Replies">
                    <MessageSquare className="w-3.5 h-3.5" />
                    {tweet.stats.replies !== "0" && <span>{tweet.stats.replies}</span>}
                  </div>
                  <div className="flex items-center gap-1.5 hover:text-green-400 transition-colors" title="Reposts">
                    <Repeat2 className="w-3.5 h-3.5" />
                    {tweet.stats.retweets !== "0" && <span>{tweet.stats.retweets}</span>}
                  </div>
                  <div className="flex items-center gap-1.5 hover:text-pink-500 transition-colors" title="Likes">
                    <Heart className="w-3.5 h-3.5" />
                    {tweet.stats.likes !== "0" && <span>{tweet.stats.likes}</span>}
                  </div>
                  <div className="flex items-center gap-1.5 hover:text-blue-400 transition-colors" title="Bookmarks">
                    <Bookmark className="w-3.5 h-3.5" />
                    {tweet.stats.bookmarks !== "0" && <span>{tweet.stats.bookmarks}</span>}
                  </div>
                  <div className="flex items-center gap-1.5 hover:text-blue-400 transition-colors" title="Share">
                    <Share2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
