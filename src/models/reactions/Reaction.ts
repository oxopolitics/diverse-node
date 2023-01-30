import {Gender} from "../comments/Comment";

export interface ReactionSchema {
  id: string;
  projectId: string;
  commentId: string;
  postId: string;
  userId: string;
  reaction: string;
  metadata: {
    birthYear?: number;
    gender?: Gender;
    regionId?: string;
  };
  createdAt: number;
  updatedAt: number;
}
