import { db } from "../../index";
import { firestore } from "firebase-admin";
import FieldValue = firestore.FieldValue;
import {
  TypeReactionCount,
  TypeReactionCountFieldValue,
} from "../comments/StatsForComment";

export const TABLE_STATS_FOR_POST = "stats_for_post";
export const collectionStatsForPost = db.collection(TABLE_STATS_FOR_POST);

export const collectionStatsForPostHourly = db.collection(
  "stats_for_post_hourly"
);
export const collectionStatsForPostDaily = db.collection(
  "stats_for_post_daily"
);
export const collectionStatsForPostMonthly = db.collection(
  "stats_for_post_monthly"
);
export const collectionStatsForPostYearly = db.collection(
  "stats_for_post_yearly"
);

export interface StatsForPostSchema {
  id: string;
  projectId: string;
  postId: string;
  updatedAt: number;
  totalReactionCount: number;
  reactionCount: TypeReactionCount;
  totalReactionUniqueUserCount: number;
  totalCommentCount: number;
  totalCommentUniqueUserCount: number;
  commentsPerRegion: Record<string, number>;
  commentsPerBirthYearGender: Record<number, Record<string, number>>;
}

export interface StatsForPostInputSchema {
  projectId?: string;
  postId?: string;
  updatedAt?: number;
  totalReactionCount?: FieldValue;
  reactionCount?: TypeReactionCountFieldValue;
  totalReactionUniqueUserCount?: FieldValue;
  totalCommentCount?: FieldValue;
  totalCommentUniqueUserCount?: FieldValue;
  commentsPerRegion?: Record<string, FieldValue>;
  commentsPerBirthYearGender?: Record<number, Record<string, FieldValue>>;
}
