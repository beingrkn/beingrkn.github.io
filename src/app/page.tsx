import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Games } from "@/components/Games";
import { Projects } from "@/components/Projects";
import { Articles } from "@/components/Articles";
import { TwitterFeed } from "@/components/TwitterFeed";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Experience />
      <Games />
      <Projects />
      <Articles />
      <TwitterFeed />
      <Contact />
    </main>
  );
}
