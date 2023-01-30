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
