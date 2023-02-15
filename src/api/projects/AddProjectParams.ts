export interface AddProjectRequestParams {
  title: string;
  description?: string;
  emoji?: string;
}

export interface AddProjectResponseParams {
  projectId: string;
}
