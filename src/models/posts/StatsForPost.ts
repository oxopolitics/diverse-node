import {TypeReactionCount} from "../comments/StatsForComment";

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
