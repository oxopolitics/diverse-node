import { db } from "../../index";
import { firestore } from "firebase-admin";
import FieldValue = firestore.FieldValue;

export const TABLE_STATS_FOR_COMMENT = "stats_for_comment";
export const collectionStatsForComment = db.collection(TABLE_STATS_FOR_COMMENT);

export const collectionStatsForCommentHourly = db.collection(
  "stats_for_comment_hourly"
);
export const collectionStatsForCommentDaily = db.collection(
  "stats_for_comment_daily"
);
export const collectionStatsForCommentMonthly = db.collection(
  "stats_for_comment_monthly"
);
export const collectionStatsForCommentYearly = db.collection(
  "stats_for_comment_yearly"
);

export type TypeReactionCount = Record<string, number>;

export interface StatsForCommentSchema {
  id: string;
  commentId: string;
  updatedAt: number;
  totalReactionCount: number;
  reactionCount: TypeReactionCount;
  reactionsPerRegion: Record<string, TypeReactionCount>;
  reactionsPerBirthYearGender: Record<
    number,
    Record<string, TypeReactionCount>
  >;
  clusterId?: string;
}

export type TypeReactionCountFieldValue = Record<string, FieldValue>;

export interface StatsForCommentInputSchema {
  id?: string;
  commentId?: string;
  updatedAt?: number;
  totalReactionCount?: FieldValue;
  reactionCount?: TypeReactionCountFieldValue;
  reactionsPerRegion?: Record<string, TypeReactionCountFieldValue>;
  reactionsPerBirthYearGender?: Record<
    number,
    Record<string, TypeReactionCountFieldValue>
  >;
}
