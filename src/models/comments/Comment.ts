import {StatsForCommentSchema} from "./StatsForComment";

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
  diverseUserId: string;
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
  commentStats?: StatsForCommentSchema;
}
