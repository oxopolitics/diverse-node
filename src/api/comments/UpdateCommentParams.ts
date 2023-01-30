import { Gender } from "../../models/comments/Comment";

export interface UpdateCommentRequestParams {
  projectId: string;
  commentId: string;
  comment: string;
  parentCommentId?: string;
  birthYear?: number;
  gender?: Gender;
  regionId?: string;
}

export interface UpdateCommentResponseParams {
  commentId: string;
  updatedAt: number;
}
