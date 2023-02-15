import { Gender } from "../../models/comments/Comment";

export interface AddProjectRequestParams {
  projectId: string;
  title?: string;
  description?: string;
  emoji?: string;
}

export interface AddProjectResponseParams {
  projectId: string;
}
