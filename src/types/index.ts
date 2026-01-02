export type Language = 'en' | 'ja';

export interface Project {
  title: string;
  description: string;
  tech_stack: string[];
  highlight: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  details: string;
}

export interface Skills {
  [category: string]: string[];
}

export type PublicationType = 'Paper' | 'Game' | 'AI';

export interface Publication {
  type: PublicationType;
  title: string;
  date?: string; // e.g., "Feb 2025"
  venue?: string; // e.g., "IPSJ Interaction 2025"
  url: string;
  thumbnail?: string; // path to image
  description?: string;
}

export interface PortfolioContent {
  profile: {
    name: string;
    role: string;
    tagline: string;
    sub_tagline: string;
    location: string;
    links: {
      github: string;
      linkedin: string;
    };
  };
  about: {
    title: string;
    summary: string;
  };
  projects: {
    title: string;
    items: Project[];
  };
  publications: {
    title: string;
    items: Publication[];
  };
  experience: {
    title: string;
    items: Experience[];
  };
  skills: {
    title: string;
    items: Skills;
  };
  footer: {
    copyright: string;
  };
}

export type PortfolioData = {
  [key in Language]: PortfolioContent;
};
