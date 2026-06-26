import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { TwitterFeed } from "@/components/TwitterFeed";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Experience />
      <Projects />
      <TwitterFeed />
      <Contact />
    </main>
  );
}
