export interface UpdateProjectRequestParams {
  projectId: string;
  title?: string;
  description?: string;
  emoji?: string;
}

export interface UpdateProjectResponseParams {
  projectId: string;
}
