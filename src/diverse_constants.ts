export enum DiverseEndpoint {
  ADD_COMMENT = "addComment",
  DELETE_COMMENT = "deleteComment",
  UPDATE_COMMENT = "updateComment",

  ADD_OR_UPDATE_LIKE = "addOrUpdateLike",
  DELETE_LIKE = "deleteLike",
  GET_BEST_COMMENTS = "getBestComments",
  GET_RECENT_COMMENTS = "getRecentComments",
}

export const DIVERSE_URL = {
  [DiverseEndpoint.ADD_COMMENT]: "https://asia-northeast3-oxopolitics-diverse.cloudfunctions.net/comments-addComment",
  [DiverseEndpoint.UPDATE_COMMENT]: "https://asia-northeast3-oxopolitics-diverse.cloudfunctions.net/comments-updateComment",
  [DiverseEndpoint.DELETE_COMMENT]: "https://asia-northeast3-oxopolitics-diverse.cloudfunctions.net/comments-deleteComment",
  [DiverseEndpoint.ADD_OR_UPDATE_LIKE]: "https://asia-northeast3-oxopolitics-diverse.cloudfunctions.net/likes-addOrUpdateLike",
  [DiverseEndpoint.DELETE_LIKE]: "https://asia-northeast3-oxopolitics-diverse.cloudfunctions.net/likes-deleteLike",
  [DiverseEndpoint.GET_BEST_COMMENTS]: "https://asia-northeast3-oxopolitics-diverse.cloudfunctions.net/comments-getBestComments",
  [DiverseEndpoint.GET_RECENT_COMMENTS]: "https://asia-northeast3-oxopolitics-diverse.cloudfunctions.net/comments-getRecentComments",
};
