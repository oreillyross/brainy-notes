export type Note = {
  id: string;
  title: string;
  created_at?: Date;
  description?: string;
  url?: string;
};

export type TStatus = "idle" | "loading" | "succeeded" | "failed"  
