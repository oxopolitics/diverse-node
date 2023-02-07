export interface GetLikeRequestParams {
  projectId: string;
  commentId: string;
  userId: string;
}

export interface GetLikeResponseParams {
  exists: boolean;
  reaction?: string;
}
