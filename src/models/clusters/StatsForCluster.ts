import {TypeReactionCount,} from "../comments/StatsForComment";

export interface StatsForClusterSchema {
  id: string;
  updatedAt: number;
  totalComments: number;
  totalReactions: number;
  uniqueReactionUsers: number;
  reactionStats: TypeReactionCount;
}
