export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  type: "web" | "mobile" | "game";
  techStack: string[];
  highlights: string[];
  image?: string;
  link?: string;
  linkLabelKey?: string;
  statusKey?: string;
}
