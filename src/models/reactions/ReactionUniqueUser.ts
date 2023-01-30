import { db } from "../../index";
import { firestore } from "firebase-admin";
import FieldValue = firestore.FieldValue;

export const TABLE_REACTION_UNIQUE_USER_FOR_POST =
  "reaction_unique_user_for_post";
export const collectionReactionUniqueUserForPost = db.collection(
  TABLE_REACTION_UNIQUE_USER_FOR_POST
);

export interface ReactionUniqueUserForPostSchema {
  id: string;
  projectId: string;
  postId: string;
  userId: string;
  updatedAt: number;
  count: number;
}

export interface ReactionUniqueUserInputSchema
  extends Omit<ReactionUniqueUserForPostSchema, "id" | "count"> {
  count: FieldValue;
}
