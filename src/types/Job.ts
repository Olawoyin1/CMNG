export interface JobType {
  id: number;
  title: string;
  date: string;
  company?: string;
  description: string;
  category: string;
  state: string;
  type: "Remote" | "Hybrid" | "On-site";
}
