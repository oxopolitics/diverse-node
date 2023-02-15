import { Gender } from "../../models/comments/Comment";

export interface AddCommentRequestParams {
  commentId?: string;

  comment: string;
  userId: string;
  projectId: string;
  postId: string;
  parentCommentId?: string;
  birthYear?: number;
  gender?: Gender;
  regionId?: string;
}

export interface AddCommentResponseParams {
  commentId: string;
}
