const projects = [
  {
    title: "Chick Chick Go",
    category: "Game Dev",
    tags: ["Indie Game", "Arcade Survival", "Game Jam"],
    tech: "Game Dev, Arcade Design",
    fullTech: "Arcade Gameplay Design, Survival Loop Design, UI Polish",
    description: "A fast survival game where you dodge foxes, chain corn pickups, and grab upgrades as the run gets more chaotic.",
    full: `Chick Chick Go is a cheerful arcade survival game built around quick movement, escalating pressure, and satisfying upgrade choices. You play as a chicken trying to survive while collecting corn, avoiding foxes, and pushing your run further each time.

The goal was to keep the game instantly readable and fun while still making every run feel a little more intense. Bright visuals, simple goals, and short survival loops make it easy to jump in while still leaving room for mastery.`,
    image: "assets/games/chick-chick-go/banner.png",
    videos: ["https://www.youtube.com/embed/14FZys3CwiQ"],
    impact: "Successfully designed and deployed features matching community and client goals.",
    links: [["Play on itch.io", "https://beingrkn.itch.io/chick-chick-go"], ["Watch Gameplay", "https://www.youtube.com/watch?v=14FZys3CwiQ"]]
  },
  {
    title: "RandomGPT Discord Assistant",
    category: "Discord Bots",
    tags: ["Image Manipulation", "Discord Bot"],
    tech: "Python, Pillow",
    description: "Advanced bot featuring AI conversations, logo generation, and live IPL scoreboard integration.",
    lead: "All-in-one custom Discord bot packed with interactive features for community engagement and utility.",
    features: [
      {title: "Mrify Command", image: "assets/projects/RandomGPT/mrify_image.png", text: "A signature feature that generates a personalized Mr. Random-themed logo for users in any color. The bot auto-detects user gender from their roles and applies distinct text styles. It integrates with a MongoDB database to manage a credit system. Users receive 3 credits on joining the server and earn more by leveling up. Each logo generation costs 1 credit, encouraging interaction and progression."},
      {title: "Generative AI Chatbot", image: "assets/projects/RandomGPT/generativeaichatbot.jpg", text: "An AI-powered conversational assistant that delivers human-like real-time chats, adding a touch of personality and entertainment to the server."},
      {title: "Live IPL Scoreboard", image: "assets/projects/RandomGPT/scoreboard_image.png", text: "Built using Discord.py and integrated with MongoDB, this feature allows users to fetch real-time, detailed IPL cricket match data using the /scoreboard command. It provides a clean, readable scoreboard directly within Discord, boosting engagement by keeping sports fans active in the community without needing to switch apps."},
      {title: "Smart Voice Channel Join System", image: "assets/projects/RandomGPT/drag_image.jpg", text: "When a VC is full, users can tag someone inside it to request a drag. The mentioned user receives interactive buttons to approve or deny the request with a single click, adding a smooth, non-intrusive way to manage VC entries."}
    ],
    impact: "Successfully enhanced community interaction and progression through gamified credit systems and real-time utility features."
  },
  {
    title: "Portfolio Web: Mehul Sen",
    category: "Web",
    tags: ["Design", "E-commerce"],
    tech: "Python Flask, Supabase, GSAP, Cashfree API",
    fullTech: "Python Flask, Supabase, GSAP, Cashfree API, HTML5/CSS3",
    description: "High-performance portfolio for a leading Indian video editor, featuring a custom Flask-based digital assets store with secure payments.",
    full: "Designed and developed a premium portfolio website for Mehul Sen, a leading Indian video editor. The platform now features a custom digital store section allowing visitors to discover the brand, browse products, create accounts, complete secure purchases via Cashfree, verify payment status, and unlock protected asset downloads after checkout.",
    impact: "Delivered a premium, high-performance portfolio featuring sleek video editing project integrations.",
    links: [["Visit Website", "https://www.mehulsen.in/"]]
  },
  {
    title: "Multiple Minecraft Events (Mr. Random)",
    category: "Minecraft",
    tags: ["Management", "Infrastructure"],
    tech: "Java",
    fullTech: "Java, Spigot API",
    description: "Organized India’s largest 20-day Minecraft event with three teams, custom mechanics, anti-cheat.",
    full: `I hosted the first-ever Minecraft civilization event for Mr. Random, an extraordinary endeavor where more than 1000 people applied to participate. From this massive pool, I carefully filtered and selected 60 people, who were then distributed into 3 distinct teams: Desert, Snow, and Forest. Over the next 15 to 20 real-life days, these 60 players logged in daily to compete and collaborate in this immersive event.

Each team had unique advantages and disadvantages. For example, the Snow team suffered reduced performance during rainy conditions, while the Forest team experienced less forest damage. These mechanics added depth and strategic complexity to the event, making it more engaging and competitive.

While Mr. Random's official video documentation is still pending (and possibly cancelled), attaching below the event captured from participant's perspectives.`,
    image: "assets/projects/MultipleMinecraftEvents/minecraft_event_random.webp",
    videos: ["https://www.youtube.com/embed/IRcg9yW96xI?si=P2_KLTRnZ5zIQwHK", "https://www.youtube.com/embed/c2FvcI9Ezaw?si=g-qYQZFIioUg05Q4"],
    extra: "Beyond this civilization event, I have coded and created custom Minecraft mechanics for many of Mr. Random's other events as well, demonstrating my versatility in designing complex, multi-player game systems and event infrastructure.",
    impact: "Managed and built custom infrastructure for India's largest 20-day Minecraft event with 60 active players."
  },
  {
    title: "Minecraft-Discord Voice Verification",
    category: "Automation",
    tags: ["Security", "Integration"],
    tech: "Java, Python, MongoDB",
    description: "Real-time cross-platform sync system that automatically manages server access based on Discord VC status.",
    lead: "Real-time cross-platform sync system connecting Minecraft servers with Discord voice channels.",
    image: "assets/projects/MinecraftDiscordVoiceVerification/workflow_minecraft_discord.png",
    full: `For Mr. Random's Minecraft SMP, I developed a real-time voice verification system that connected the Minecraft Java server with the Discord community using MongoDB. The system allowed users to register for the SMP, during which a document was created in MongoDB containing their in-game name, Discord ID, and a voice_state boolean.

A custom Discord bot written in Python monitored users’ voice channel activity and updated the voice_state to true whenever a user joined a VC, and to false when they left. On the server side, I created a custom Minecraft plugin in Java that regularly queried the database every second.

Before allowing a player to join, the plugin checked whether their voice_state was set to true. If not, they were prevented from joining. Additionally, if a player left the Discord VC while already in-game, the plugin would automatically detect the change and kick them from the server in real time.

This integration ensured that only those actively participating in the voice chat were allowed to play, encouraging better communication and collaboration among players.`,
    impact: "Successfully increased Discord server activity by forcing voice channel participation during active Minecraft sessions."
  },
  {
    title: "IPL XP Betting System",
    category: "Discord Bots",
    tags: ["Discord Bot", "Gamification"],
    tech: "Python, Discord.py",
    description: "XP-based match prediction and betting system with match locking and global leaderboards.",
    full: `I initially developed the IPL-based XP betting system used in Mr. Random's community during the early phases of the 2025 IPL Event. The system allowed users to place XP-based bets on IPL matches directly within Discord, making the experience highly interactive and engaging.

It featured key mechanics like XP deduction, match locking and result processing, and leaderboard updates. Later, the system was migrated to Skybot (developed by Lakshay Krishna) for improved scalability and additional features-but it still retained core components and critical logic originally written by me. This project reflects my ability to design scalable, gamified systems tightly integrated with real-time events and community engagement.`,
    image: "assets/projects/IPLXPBettingSystem/IPL_Banner.jpg",
    impact: "Engaged Mr. Random's community during the 2025 IPL Event with real-time match predictions and automated betting mechanics.",
    links: [["Read More", "https://github.com/MrRandomUniverse/IPL-Event-2025/blob/main/README.md"]]
  },
  {
    title: "Team Chat Plugin",
    category: "Minecraft",
    tags: ["Communication", "Spigot Plugin"],
    tech: "Java, Spigot API",
    description: "Toggleable cross-environment team communication tool designed for based Minecraft events.",
    full: "Created a custom Minecraft Java plugin for Mr. Random's special event featuring three themed teams: Desert, Snow, and Forest. The plugin introduced a toggable team chat system, allowing players to switch between team only communication and global chat during gameplay. This system helped improve coordination while keeping the event immersive and organized. Built using the Spigot API.",
    image: "assets/projects/TeamChatPlugin/teamchats.png",
    impact: "Improved coordination and team organization for three distinct factions in a large-scale Minecraft event."
  },
  {
    title: "Overlab.in",
    category: "Web",
    tags: ["UI/UX", "Web Dev"],
    tech: "TypeScript, React",
    description: "Designed, developed, and managed the website behind Overlab, enabling the agency to build unforgettable social identities through a strong and scalable digital presence.",
    full: "Designed, developed, and managed the website behind Overlab, enabling the agency to build unforgettable social identities through a strong and scalable digital presence.",
    impact: "Established a scalable, high-performance web presence for a creative branding and social agency.",
    links: [["Visit Website", "https://www.overlab.in/"]]
  },
  {
    title: "Holix",
    category: "Web",
    tags: ["Interactive", "Game Dev"],
    tech: "Godot, GDScript",
    description: "A playful Holi website where you throw colored water balloons at any X profile picture.",
    full: `Holix is a fun side project built for Holi. It lets you throw colored water balloons at your favorite X account's profile picture in a playful 3D scene.

Controls
WASD - Move around
Mouse - Look around
Left Click - Throw water balloon
E - Open profile picture
M - Lock/Unlock mouse
Space - Jump
TAB - Restart scene

How to Load a Profile Picture
1. Go to any user's profile on x.com (e.g., https://x.com/username)
2. Click on their profile picture - this opens a page like https://x.com/{username}/photo
3. Right-click the image and choose Open image in new tab or Copy image address
4. The URL should look similar to: https://pbs.twimg.com/profile_images/2013680447725740033/LEIqdjJP_400x400.jpg
5. Copy the image URL and paste it into the in-game menu (press Esc to open)
6. Submit and start throwing balloons!`,
    impact: "Built a viral, interactive Holi event website where users threw colored water balloons at custom X profile pictures.",
    tweetEmbed: {
      text: "🚨 Someone just built a website that lets you throw coloured water balloons at your favourite X account's profile photo for Holi.",
      tweetUrl: "https://twitter.com/mebeingrkn/status/2028651573136535990?ref_src=twsrc%5Etfw",
      authorName: "RKN",
      authorHandle: "@mebeingrkn",
      dateText: "March 3, 2026"
    },
    links: [["Try It Live", "https://beingrkn.github.io/holix/"], ["View on GitHub", "https://github.com/beingrkn/holix"]]
  },
  {
    title: "Game for Rawknee",
    category: "Game Dev",
    tags: ["Indie Game", "In Progress", "Unity 3D"],
    tech: "Unity, C#",
    description: "An incomplete game project developed in 2023 while attempting to create dev logs.",
    full: "Back in January 2023, I started this exciting journey to document my game development process through devlogs. This video is the first 55 seconds I edited as part of that attempt. The game was progressing well, but unfortunately, I never completed the full video. Shortly after, I got deeply involved in my JEE preparation and had to put the project and devlogs on hold. Now, after a long break, I'm slowly getting back into learning game development again bit by bit, day by day. This video stands as a reminder of where I left off, and the journey I'm preparing to restart. I'm excited to inform that I've resumed working on this game and am committed to completing it this time around. Stay tuned for more updates as I continue this development journey!",
    videos: ["https://www.youtube.com/embed/ULL151OcQ1s?si=c2hUsXQh9wSoYLPl"],
    impact: "Resumed work on a stylized game development project originally started in 2023.",
    links: [["Watch on YouTube", "https://www.youtube.com/watch?v=ULL151OcQ1s"]]
  }
];

const projectList = document.querySelector("#project-list");

function renderProjects(filter = "All") {
  projectList.innerHTML = projects.map((project, index) => `
    <button class="project-row" data-index="${index}" ${filter !== "All" && project.category !== filter ? "hidden" : ""}>
      <span class="num">${String(index + 1).padStart(2, "0")}</span>
      <h3>${project.title}</h3>
      <p>${project.category}<br>${project.tech}</p>
      <span class="view-label">View More</span>
    </button>`).join("");
}

renderProjects();

const projectDialog = document.querySelector("#project-dialog");
const dialogBody = projectDialog.querySelector(".dialog-body");

function normalizeKickerLabel(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim().replace(/s$/, "");
}

function buildDialogKicker(project) {
  const parts = [];
  [project.category, ...project.tags].forEach(item => {
    const normalized = normalizeKickerLabel(item);
    if (!normalized) return;
    const overlaps = parts.some(existing => {
      const prior = normalizeKickerLabel(existing);
      return prior === normalized || prior.startsWith(`${normalized} `) || normalized.startsWith(`${prior} `);
    });
    if (!overlaps) parts.push(item);
  });
  return parts.join(" / ");
}

function loadTwitterWidgets(scope) {
  const render = () => {
    if (window.twttr?.widgets?.load) window.twttr.widgets.load(scope);
  };
  const existing = document.getElementById("twitter-wjs");
  if (existing) {
    render();
    return;
  }
  const script = document.createElement("script");
  script.id = "twitter-wjs";
  script.src = "https://platform.twitter.com/widgets.js";
  script.async = true;
  script.onload = render;
  document.body.appendChild(script);
}

projectList.addEventListener("click", event => {
  const row = event.target.closest(".project-row");
  if (!row) return;
  const project = projects[Number(row.dataset.index)];
  if (project.title === "Chick Chick Go") {
    location.href = "chickchickgo/";
    return;
  }
  const features = (project.features || []).map(feature => `
    <section class="project-feature">
      <h3>${feature.title}</h3>
      <img src="${feature.image}" alt="${feature.title}">
      <p>${feature.text}</p>
    </section>`).join("");
  const videos = (project.videos || []).map((video, index) => `
    <div class="embed-wrap"><iframe src="${video}" title="${project.title} video ${index + 1}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading="lazy" allowfullscreen></iframe></div>`).join("");
  const links = (project.links || []).map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener">${label}</a>`).join("");
  const tweetEmbed = project.tweetEmbed ? `
    <div class="tweet-embed-wrap">
      <blockquote class="twitter-tweet" data-theme="dark" data-align="center" data-link-color="#22d3ee">
        <p lang="en" dir="ltr">${project.tweetEmbed.text}</p>
        &mdash; ${project.tweetEmbed.authorName} (${project.tweetEmbed.authorHandle}) <a href="${project.tweetEmbed.tweetUrl}">${project.tweetEmbed.dateText}</a>
      </blockquote>
    </div>` : "";
  dialogBody.innerHTML = `
    <span class="dialog-kicker">${buildDialogKicker(project)}</span>
    <h2>${project.title}</h2>
    <p class="lead">${project.lead || project.description}</p>
    ${project.image ? `<img src="${project.image}" alt="${project.title} visual">` : ""}
    <div class="dialog-meta"><div><span>Tech Stack</span>${project.fullTech || project.tech}</div><div><span>Impact</span>${project.impact}</div></div>
    ${project.full ? `<section class="project-copy"><h3>Execution Details</h3><p class="description">${project.full}</p></section>` : ""}
    ${features}
    ${project.extra ? `<p class="description extra-copy">${project.extra}</p>` : ""}
    ${videos}
    ${tweetEmbed}
    ${links ? `<div class="dialog-links">${links}</div>` : ""}`;
  if (project.tweetEmbed) loadTwitterWidgets(dialogBody);
  projectDialog.showModal();
});

document.querySelectorAll(".filters button").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".filters button").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  renderProjects(button.dataset.filter);
}));

document.querySelectorAll(".dialog-close").forEach(button => button.addEventListener("click", () => button.closest("dialog").close()));
document.querySelectorAll("dialog").forEach(dialog => dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
}));

const screenshotPaths = [
  "assets/games/chick-chick-go/screenshot-1.png",
  "assets/games/chick-chick-go/screenshot-2.png",
  "assets/games/chick-chick-go/screenshot-3.png",
  "assets/games/chick-chick-go/screenshot-4.png"
];
const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxControls = lightbox.querySelectorAll(".lightbox-control");
let activeScreenshot = null;

function showScreenshot(index) {
  activeScreenshot = (index + screenshotPaths.length) % screenshotPaths.length;
  lightboxImage.src = screenshotPaths[activeScreenshot];
  lightbox.classList.remove("single-image");
  lightboxControls.forEach(control => control.hidden = false);
  if (!lightbox.open) lightbox.showModal();
}

document.querySelectorAll("[data-lightbox-index]").forEach(button => button.addEventListener("click", () => showScreenshot(Number(button.dataset.lightboxIndex))));
document.querySelectorAll("[data-lightbox]").forEach(button => button.addEventListener("click", () => {
  const index = screenshotPaths.indexOf(button.dataset.lightbox);
  if (index >= 0) return showScreenshot(index);
  activeScreenshot = null;
  lightboxImage.src = button.dataset.lightbox;
  lightbox.classList.add("single-image");
  lightboxControls.forEach(control => control.hidden = true);
  lightbox.showModal();
}));
lightbox.querySelector(".previous").addEventListener("click", () => showScreenshot(activeScreenshot - 1));
lightbox.querySelector(".next").addEventListener("click", () => showScreenshot(activeScreenshot + 1));
addEventListener("keydown", event => {
  if (!lightbox.open || activeScreenshot === null) return;
  if (event.key === "ArrowLeft") showScreenshot(activeScreenshot - 1);
  if (event.key === "ArrowRight") showScreenshot(activeScreenshot + 1);
});

document.querySelectorAll("[data-copy]").forEach(button => button.addEventListener("click", async () => {
  const value = button.dataset.copy;
  try {
    await navigator.clipboard.writeText(value);
  } catch {
    const area = document.createElement("textarea");
    area.value = value;
    document.body.append(area);
    area.select();
    document.execCommand("copy");
    area.remove();
  }
  const label = button.querySelector("strong");
  const original = label.textContent;
  label.textContent = "COPIED";
  setTimeout(() => label.textContent = original, 1500);
}));

const sections = [...document.querySelectorAll("[data-section]")];
const navLinks = [...document.querySelectorAll(".rail-nav a")];
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
  });
}, {rootMargin: "-25% 0px -65% 0px"});
sections.forEach(section => observer.observe(section));

const progress = document.querySelector(".progress span");
addEventListener("scroll", () => {
  const maximum = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${maximum ? scrollY / maximum * 100 : 0}%`;
}, {passive: true});
