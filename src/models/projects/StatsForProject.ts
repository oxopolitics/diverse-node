import { db } from "../../index";
import { firestore } from "firebase-admin";
import FieldValue = firestore.FieldValue;
import {
  TypeReactionCount,
  TypeReactionCountFieldValue,
} from "../comments/StatsForComment";

export const TABLE_STATS_FOR_PROJECT = "stats_for_project";
export const collectionStatsForProject = db.collection(TABLE_STATS_FOR_PROJECT);

export const collectionStatsForProjectHourly = db.collection(
  "stats_for_project_hourly"
);

export const collectionStatsForProjectDaily = db.collection(
  "stats_for_project_daily"
);
export const collectionStatsForProjectMonthly = db.collection(
  "stats_for_project_monthly"
);

export const collectionStatsForProjectYearly = db.collection(
  "stats_for_project_yearly"
);

export interface StatsForProjectSchema {
  id: string;
  projectId: string;
  updatedAt: number;
  totalReactionCount?: number;
  reactionCount?: TypeReactionCount;
  totalReactionUniqueUserCount?: number;
  totalCommentCount?: number;
  totalCommentUniqueUserCount?: number;
  totalPostCount?: number;
}

export interface StatsForProjectInputSchema {
  projectId?: string;
  updatedAt?: number;
  totalReactionCount?: FieldValue;
  reactionCount?: TypeReactionCountFieldValue;
  totalReactionUniqueUserCount?: FieldValue;
  totalCommentCount?: FieldValue;
  totalCommentUniqueUserCount?: FieldValue;
  totalPostCount?: FieldValue;
}
