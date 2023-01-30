import { db } from "../../index";
import { Gender } from "../comments/Comment";

export const TABLE_REACTIONS = "reactions";
export const collectionReactions = db.collection(TABLE_REACTIONS);

export const REACTION_LIKE = "like";

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

export interface ReactionInputSchema
  extends Omit<ReactionSchema, "id" | "count"> {}
