import { DiverseCommentSchema } from "./DiverseCommentSchema";

export interface GetBestCommentsRequestParams {
  projectId: string;
  postId: string;
}

export interface GetBestCommentsResponseParams {
  projectId: string;
  postId: string;
  bestComments: DiverseCommentSchema[];
}
