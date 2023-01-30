import { db } from "../../index";

export const TABLE_COMMENTS = "comments";
export const collectionComments = db.collection(TABLE_COMMENTS);

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}

export interface CommentSchema {
  id: string;
  commentId?: string;
  comment: string;
  userId: string;
  projectId: string;
  createdAt: number;
  updatedAt: number;
  postId: string;
  parentCommentId?: string;
  metadata?: {
    birthYear?: number;
    gender?: Gender;
    regionId?: string;
  };
}

export interface CommentInputSchema extends Omit<CommentSchema, "id"> {}
