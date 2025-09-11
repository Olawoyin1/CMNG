export interface Job {
  id: number;
  title: string;
  date: string;
  description: string;
  category: string;
  state: string;
  type: "Remote" | "Hybrid" | "On-site";
}
