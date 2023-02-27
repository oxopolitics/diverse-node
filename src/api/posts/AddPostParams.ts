export interface AddPostRequestParams {
  postId?: string;
  userId: string;
  projectId: string;
  title: string;
}

export interface AddPostResponseParams {
  postId: string;
}
