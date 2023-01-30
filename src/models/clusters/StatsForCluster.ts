import {TypeReactionCount,} from "../comments/StatsForComment";

export interface StatsForClusterSchema {
  id: string;
  totalComments: number;
  totalReactions: number;
  reactionStats: TypeReactionCount;
}
