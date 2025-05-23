export interface LinkItem {
  href: string;
  title: string;
  description: string;
}

export interface SocialLinkItem {
  icon: ImageMetadata;
  name: string;
  link: string;
}

export interface SiteConfig {
  bio: {
    image: ImageMetadata;
    name: string;
    title: string;
    body: string;
  };
  projects: LinkItem[];
  socials: SocialLinkItem[];
} 