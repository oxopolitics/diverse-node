import { db } from "../../index";

export const TABLE_USERS = "users";
export const usersCollection = db.collection(TABLE_USERS);

export interface UserSchema {
  id: string;
  projectId: string;
  updatedAt: number;
  clusterId?: string;
}

export interface UserInputSchema extends Omit<UserSchema, "id"> {}
