import { Gender } from "../../models/comments/Comment";

export interface AddOrUpdateLikeRequestParams {
  projectId: string;
  commentId: string;
  userId: string;
  birthYear?: number;
  gender?: Gender;
  regionId?: string;
}

export interface AddOrUpdateLikeResponseParams {
  likeId: string;
}
