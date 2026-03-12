export interface Tender {
  id: string;
  ref: string;
  title: string;
  titleMr: string;
  category: "machinery" | "civil" | "agriculture" | "it" | "notice" | "eoi";
  badge: "tender" | "urgent" | "notice";
  emd: string;
  deadline: string;
  published: string;
}

export interface Notice {
  id: string;
  type: "general" | "tender" | "urgent" | "rti";
  title: string;
  titleMr: string;
  body: string;
  date: string;
  linkLabel: string;
}

export interface Project {
  id: string;
  icon: string;
  title: string;
  titleMr: string;
  description: string;
  status: "planned" | "progress" | "approved";
  statusLabel: string;
  investment: string;
}

export interface Job {
  id: string;
  icon: string;
  title: string;
  titleMr: string;
  vacancies: number;
  qualification: string;
  open: boolean;
}

export type Language = "en" | "mr";
