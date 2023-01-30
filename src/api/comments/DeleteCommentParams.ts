export interface DeleteCommentRequestParams {
  projectId: string;
  commentId: string;
}
export interface DeleteCommentResponseParams {
  commentId: string;
  deletedAt: number;
}
