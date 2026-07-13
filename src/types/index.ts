export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  images: string[];
  category: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Referee {
  name: string;
  title: string;
  organization: string;
  email: string;
  phone: string;
}

export interface ContactInfo {
  address: string;
  email: string;
  phone: string;
}