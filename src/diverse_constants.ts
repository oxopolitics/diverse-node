export enum DiverseAPI {
  ADD_COMMENT = "addComment",
  DELETE_COMMENT = "deleteComment",
  UPDATE_COMMENT = "updateComment",

  ADD_LIKE = "addLike",
  DELETE_LIKE = "deleteLike",
}

export const DIVERSE_URL = {
  [DiverseAPI.ADD_COMMENT]: "https://asia-northeast3-oxopolitics-diverse.cloudfunctions.net/comments-addComment",
  [DiverseAPI.UPDATE_COMMENT]: "https://asia-northeast3-oxopolitics-diverse.cloudfunctions.net/comments-updateComment",
  [DiverseAPI.DELETE_COMMENT]: "https://asia-northeast3-oxopolitics-diverse.cloudfunctions.net/comments-deleteComment",
  [DiverseAPI.ADD_LIKE]: "https://asia-northeast3-oxopolitics-diverse.cloudfunctions.net/likes-addOrUpdateLike",
  [DiverseAPI.DELETE_LIKE]: "https://asia-northeast3-oxopolitics-diverse.cloudfunctions.net/likes-deleteLike",
};
