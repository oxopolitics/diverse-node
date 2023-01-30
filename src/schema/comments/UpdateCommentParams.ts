import { Gender } from "./DiverseCommentSchema";

export interface UpdateCommentRequestParams {
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
