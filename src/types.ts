export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  impactTags: string[];
  link: string;
  image: string;
}

export interface Experience {
  year: string;
  location: string;
  role: string;
  company: string;
}

export interface Education {
  period: string;
  location: string;
  institution: string;
  degree: string;
  courses: string[];
  awards: { title: string; date: string; description: string }[];
}
