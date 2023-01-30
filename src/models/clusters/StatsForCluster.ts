import { db } from "../../index";
import {
  TypeReactionCount,
  TypeReactionCountFieldValue,
} from "../comments/StatsForComment";
import { firestore } from "firebase-admin";
import FieldValue = firestore.FieldValue;

export const TABLE_STATS_FOR_CLUSTERS = "stats_for_clusters";
export const collectionStatsForClusters = db.collection(
  TABLE_STATS_FOR_CLUSTERS
);

export interface StatsForClusterSchema {
  id: string;
  totalComments: number;
  totalReactions: number;
  reactionStats: TypeReactionCount;
}

export interface StatsForClusterInputSchema {
  id?: string;
  totalComments: FieldValue;
  totalReactions: FieldValue;
  reactionStats: TypeReactionCountFieldValue;
}
