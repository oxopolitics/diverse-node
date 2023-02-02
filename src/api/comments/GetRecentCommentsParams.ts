import { CommentSchema } from "../../models/comments/Comment";

export interface GetRecentZeroReactionCommentsRequestParams {
  projectId: string;
  postId: string;
  page: number;
  commentsPerPage: number;
}

export interface GetRecentZeroReactionCommentsResponseParams {
  projectId: string;
  postId: string;
  page: number;
  commentsPerPage: number;
  hasMore: boolean;
  comments: CommentSchema[];
}
