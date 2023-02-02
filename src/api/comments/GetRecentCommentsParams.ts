import { CommentSchema } from "../../models/comments/Comment";

export interface GetRecentCommentsRequestParams {
  projectId: string;
  postId: string;
  page: number;
  commentsPerPage: number;
  maxReactions?: number;
}

export interface GetRecentCommentsResponseParams {
  projectId: string;
  postId: string;
  page: number;
  commentsPerPage: number;
  hasMore: boolean;
  comments: CommentSchema[];
}
