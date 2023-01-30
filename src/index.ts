import {callDiverse} from "./callDiverse";
import {DiverseAPI} from "./diverse_constants";
import {UpdateCommentRequestParams, UpdateCommentResponseParams} from "./api/comments/UpdateCommentParams";
import {AddCommentRequestParams, AddCommentResponseParams} from "./api/comments/AddCommentParams";
import {DeleteCommentRequestParams, DeleteCommentResponseParams} from "./api/comments/DeleteCommentParams";
import {AddOrUpdateLikeRequestParams} from "./api/likes/AddLikeParams";
import {DeleteLikeRequestParams, DeleteLikeResponseParams} from "./api/likes/DeleteLikeParams";
import {GetBestCommentsRequestParams, GetBestCommentsResponseParams} from "./api/comments/GetBestCommentsParams";

export function addComment(requestParams: AddCommentRequestParams): Promise<AddCommentResponseParams> {
  return callDiverse<AddCommentRequestParams, AddCommentResponseParams>(DiverseAPI.ADD_COMMENT, requestParams);
}

export function updateComment(requestParams: UpdateCommentRequestParams): Promise<UpdateCommentResponseParams> {
  return callDiverse<UpdateCommentRequestParams, UpdateCommentResponseParams>(DiverseAPI.UPDATE_COMMENT, requestParams);
}

export function deleteComment(requestParams: DeleteCommentRequestParams): Promise<DeleteCommentResponseParams> {
  return callDiverse<DeleteCommentRequestParams, DeleteCommentResponseParams>(DiverseAPI.DELETE_COMMENT, requestParams);
}

export function addOrUpdateLike(requestParams: AddOrUpdateLikeRequestParams): Promise<DeleteCommentResponseParams> {
  return callDiverse<DeleteCommentRequestParams, DeleteCommentResponseParams>(DiverseAPI.ADD_OR_UPDATE_LIKE, requestParams);
}

export function deleteLike(requestParams: DeleteLikeRequestParams): Promise<DeleteLikeResponseParams> {
  return callDiverse<DeleteLikeRequestParams, DeleteLikeResponseParams>(DiverseAPI.DELETE_LIKE, requestParams);
}


export function getBestComments(requestParams: GetBestCommentsRequestParams): Promise<GetBestCommentsResponseParams> {
  return callDiverse<GetBestCommentsRequestParams, GetBestCommentsResponseParams>(DiverseAPI.DELETE_LIKE, requestParams);
}
