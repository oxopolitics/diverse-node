import { DiverseCommentSchema } from "./DiverseCommentSchema";

export interface GetCommentsRequestParams {
  projectId: string;
  postId: string;
  page: number;
  commentsPerPage: number;
}

export interface GetCommentsResponseParams {
  projectId: string;
  postId: string;
  page: number;
  commentsPerPage: number;
  hasMore: boolean;
  comments: DiverseCommentSchema[];
}
