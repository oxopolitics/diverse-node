export interface AddPostRequestParams {
  userId: string;
  projectId: string;
  postId?: string;
}

export interface AddPostResponseParams {
  postId: string;
}
