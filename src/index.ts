import {callDiverse} from "./callDiverse";
import {UpdateCommentRequestParams, UpdateCommentResponseParams} from "./api/comments/UpdateCommentParams";
import {AddCommentRequestParams, AddCommentResponseParams} from "./api/comments/AddCommentParams";
import {DeleteCommentRequestParams, DeleteCommentResponseParams} from "./api/comments/DeleteCommentParams";
import {AddOrUpdateLikeRequestParams} from "./api/likes/AddLikeParams";
import {DeleteLikeRequestParams, DeleteLikeResponseParams} from "./api/likes/DeleteLikeParams";
import {GetBestCommentsRequestParams, GetBestCommentsResponseParams} from "./api/comments/GetBestCommentsParams";

import {DiverseEndpoint} from "./diverse_constants";
import {GetRecentCommentsRequestParams, GetRecentCommentsResponseParams} from "./api/comments/GetRecentCommentsParams";

export class DiverseClient {
  projectId: string;
  constructor(projectId: string) {
    this.projectId = projectId;
  }

  addComment(requestParams: Omit<AddCommentRequestParams, "projectId">): Promise<AddCommentResponseParams> {
    return callDiverse<AddCommentRequestParams, AddCommentResponseParams>(DiverseEndpoint.ADD_COMMENT,
      {
        ...requestParams,
        projectId: this.projectId
      });
  }

   updateComment(requestParams: Omit<UpdateCommentRequestParams, "projectId">): Promise<UpdateCommentResponseParams> {
    return callDiverse<UpdateCommentRequestParams, UpdateCommentResponseParams>(DiverseEndpoint.UPDATE_COMMENT, {
      ...requestParams,
      projectId: this.projectId
    });
  }

   deleteComment(requestParams: Omit<DeleteCommentRequestParams, "projectId"> ): Promise<DeleteCommentResponseParams> {
    return callDiverse<DeleteCommentRequestParams, DeleteCommentResponseParams>(DiverseEndpoint.DELETE_COMMENT, {
      ...requestParams,
      projectId: this.projectId
    });
  }

   addOrUpdateLike(requestParams: Omit<AddOrUpdateLikeRequestParams, "projectId">): Promise<DeleteCommentResponseParams> {
    return callDiverse<DeleteCommentRequestParams, DeleteCommentResponseParams>(DiverseEndpoint.ADD_OR_UPDATE_LIKE, {
      ...requestParams,
      projectId: this.projectId
    });
  }

   deleteLike(requestParams: Omit<DeleteLikeRequestParams, "projectId">): Promise<DeleteLikeResponseParams> {
    return callDiverse<DeleteLikeRequestParams, DeleteLikeResponseParams>(DiverseEndpoint.DELETE_LIKE, {
      ...requestParams,
      projectId: this.projectId
    });
  }


   getBestComments(requestParams: Omit<GetBestCommentsRequestParams, "projectId">): Promise<GetBestCommentsResponseParams> {
    return callDiverse<GetBestCommentsRequestParams, GetBestCommentsResponseParams>(DiverseEndpoint.GET_BEST_COMMENTS, {
      ...requestParams,
      projectId: this.projectId
    });
  }

   getRecentComments(requestParams: Omit<GetRecentCommentsRequestParams, "projectId">): Promise<GetRecentCommentsResponseParams> {
    return callDiverse<GetRecentCommentsRequestParams, GetRecentCommentsResponseParams>(DiverseEndpoint.GET_RECENT_COMMENTS, {
      ...requestParams,
      projectId: this.projectId
    });
  }
}
