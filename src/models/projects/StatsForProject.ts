import {TypeReactionCount} from "../comments/StatsForComment";

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
