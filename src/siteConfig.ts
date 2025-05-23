import type { SiteConfig } from "./lib/types";
import ProfileImage from "./assets/profile.png";
import XLogo from "./assets/x-logo.svg";

export const siteConfig: SiteConfig = {
  bio: {
    image: ProfileImage,
    name: "Dathan",
    title: "I'm Dathan - a minimalist dev",
    body: "I am a Senior Dev at Tesla, building enterprise software. I primarily work with typescript. I am obsessed with performance and simplicity. I am from Kerala, and I currently live in Berlin.",
  },
  projects: [
    {
      href: "https://typersguild.com",
      title: "typersguild.com",
      description: "Master touch typing through immersive reading. Read classic literature by typing it out, or upload your own books.",
    },
    {
      href: "https://github.com/heydathan/portfolio",
      title: "Portfolio Code",
      description: "Blazingly fast, configurable portfolio website built with Astro. Source code of this website.",
    },
  ],
  socials: [
    {
      icon: XLogo,
      name: "@heydathan",
      link: "https://x.com/heydathan",
    },
  ],
}; 