
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
