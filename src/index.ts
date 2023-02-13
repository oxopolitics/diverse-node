import {UpdateCommentRequestParams, UpdateCommentResponseParams} from "./api/comments/UpdateCommentParams";
import {AddCommentRequestParams, AddCommentResponseParams} from "./api/comments/AddCommentParams";
import {DeleteCommentRequestParams, DeleteCommentResponseParams} from "./api/comments/DeleteCommentParams";
import {AddOrUpdateLikeRequestParams} from "./api/likes/AddLikeParams";
import {DeleteLikeRequestParams, DeleteLikeResponseParams} from "./api/likes/DeleteLikeParams";
import {GetBestCommentsRequestParams, GetBestCommentsResponseParams} from "./api/comments/GetBestCommentsParams";

import {DIVERSE_URL, DiverseEndpoint} from "./diverse_constants";
import {GetRecentCommentsRequestParams, GetRecentCommentsResponseParams} from "./api/comments/GetRecentCommentsParams";
import {GetLikeRequestParams, GetLikeResponseParams} from "./api/likes/GetLikeParams";
import fetch from "cross-fetch";

export class DiverseClient {
  projectId: string;
  authToken: string;

  constructor(projectId: string, authToken: string) {
    this.projectId = projectId;
    this.authToken = authToken;
  }

  private callDiverse<T, R>(api: DiverseEndpoint, data: T): Promise<R> {
    let url = DIVERSE_URL[api];

    if (!url) {
      throw new Error("URL is empty.");
    }

    if (url.startsWith("/")) {
      url = url.slice(1);
    }

    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "text/html; charset=UTF-8",
        "Authorization": `Bearer ${this.authToken}`,
      },
      body: JSON.stringify(data),
    })
      .then(async (r: Response) => {
        return (r.headers.get("content-type")?.includes("application/json")
          ? await r.json()
          : await r.text()) as R;
      });
  }

  addComment(requestParams: Omit<AddCommentRequestParams, "projectId">): Promise<AddCommentResponseParams> {
    return this.callDiverse<AddCommentRequestParams, AddCommentResponseParams>(DiverseEndpoint.ADD_COMMENT,
      {
        ...requestParams,
        projectId: this.projectId
      });
  }

  updateComment(requestParams: Omit<UpdateCommentRequestParams, "projectId">): Promise<UpdateCommentResponseParams> {
    return this.callDiverse<UpdateCommentRequestParams, UpdateCommentResponseParams>(DiverseEndpoint.UPDATE_COMMENT, {
      ...requestParams,
      projectId: this.projectId
    });
  }

  deleteComment(requestParams: Omit<DeleteCommentRequestParams, "projectId">): Promise<DeleteCommentResponseParams> {
    return this.callDiverse<DeleteCommentRequestParams, DeleteCommentResponseParams>(DiverseEndpoint.DELETE_COMMENT, {
      ...requestParams,
      projectId: this.projectId
    });
  }

  addOrUpdateLike(requestParams: Omit<AddOrUpdateLikeRequestParams, "projectId">): Promise<DeleteCommentResponseParams> {
    return this.callDiverse<DeleteCommentRequestParams, DeleteCommentResponseParams>(DiverseEndpoint.ADD_OR_UPDATE_LIKE, {
      ...requestParams,
      projectId: this.projectId
    });
  }


  getLike(requestParams: Omit<GetLikeRequestParams, "projectId">): Promise<GetLikeResponseParams> {
    return this.callDiverse<GetLikeRequestParams, GetLikeResponseParams>(DiverseEndpoint.GET_LIKE, {
      ...requestParams,
      projectId: this.projectId
    });
  }

  deleteLike(requestParams: Omit<DeleteLikeRequestParams, "projectId">): Promise<DeleteLikeResponseParams> {
    return this.callDiverse<DeleteLikeRequestParams, DeleteLikeResponseParams>(DiverseEndpoint.DELETE_LIKE, {
      ...requestParams,
      projectId: this.projectId
    });
  }


  getBestComments(requestParams: Omit<GetBestCommentsRequestParams, "projectId">): Promise<GetBestCommentsResponseParams> {
    return this.callDiverse<GetBestCommentsRequestParams, GetBestCommentsResponseParams>(DiverseEndpoint.GET_BEST_COMMENTS, {
      ...requestParams,
      projectId: this.projectId
    });
  }

  getRecentComments(requestParams: Omit<GetRecentCommentsRequestParams, "projectId">): Promise<GetRecentCommentsResponseParams> {
    return this.callDiverse<GetRecentCommentsRequestParams, GetRecentCommentsResponseParams>(DiverseEndpoint.GET_RECENT_COMMENTS, {
      ...requestParams,
      projectId: this.projectId
    });
  }
}
