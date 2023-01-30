import { db } from "../../index";
import { firestore } from "firebase-admin";
import FieldValue = firestore.FieldValue;

export const TABLE_REACTION_UNIQUE_USER_FOR_PROJECT =
  "reaction_unique_user_for_project";
export const collectionReactionUniqueUserForProject = db.collection(
  TABLE_REACTION_UNIQUE_USER_FOR_PROJECT
);

export interface ReactionUniqueUserForProjectSchema {
  id: string;
  projectId: string;
  userId: string;
  updatedAt: number;
  count: number;
}

export interface ReactionUniqueUserForProjectInputSchema
  extends Omit<ReactionUniqueUserForProjectSchema, "count" | "id"> {
  count: FieldValue;
}
