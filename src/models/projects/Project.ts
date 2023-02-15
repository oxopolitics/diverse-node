
export interface ProjectSchema {
  userId: string;
  projectId: string;
  title: string;
  description: string;
  emoji?: string;
  createdAt: number;
  updatedAt: number;
}
