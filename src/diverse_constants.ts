export enum DiverseEndpoint {
  ADD_COMMENT = "addComment",
  DELETE_COMMENT = "deleteComment",
  UPDATE_COMMENT = "updateComment",

  ADD_OR_UPDATE_LIKE = "addOrUpdateLike",
  GET_LIKE = "getLike",
  DELETE_LIKE = "deleteLike",
  GET_BEST_COMMENTS = "getBestComments",
  GET_RECENT_COMMENTS = "getRecentComments",
}

export enum DiverseEndpointGroup {
  COMMENTS_ENDPOINT = `https://asia-northeast3-oxopolitics-diverse.cloudfunctions.net/comments-`,
  LIKES_ENDPOINT = "https://asia-northeast3-oxopolitics-diverse.cloudfunctions.net/likes-"
}

function getEndpoint(group: DiverseEndpointGroup, endpoint: DiverseEndpoint) {
  return group + endpoint;
}


export const DIVERSE_URL = {
  [DiverseEndpoint.ADD_COMMENT]: getEndpoint(DiverseEndpointGroup.COMMENTS_ENDPOINT, DiverseEndpoint.ADD_COMMENT),
  [DiverseEndpoint.UPDATE_COMMENT]: getEndpoint(DiverseEndpointGroup.COMMENTS_ENDPOINT, DiverseEndpoint.UPDATE_COMMENT),
  [DiverseEndpoint.DELETE_COMMENT]: getEndpoint(DiverseEndpointGroup.COMMENTS_ENDPOINT, DiverseEndpoint.DELETE_COMMENT),
  [DiverseEndpoint.ADD_OR_UPDATE_LIKE]: getEndpoint(DiverseEndpointGroup.LIKES_ENDPOINT, DiverseEndpoint.ADD_OR_UPDATE_LIKE),
  [DiverseEndpoint.GET_LIKE]: getEndpoint(DiverseEndpointGroup.LIKES_ENDPOINT, DiverseEndpoint.GET_LIKE),
  [DiverseEndpoint.DELETE_LIKE]: getEndpoint(DiverseEndpointGroup.LIKES_ENDPOINT, DiverseEndpoint.DELETE_LIKE),
  [DiverseEndpoint.GET_BEST_COMMENTS]: getEndpoint(DiverseEndpointGroup.COMMENTS_ENDPOINT, DiverseEndpoint.GET_BEST_COMMENTS),
  [DiverseEndpoint.GET_RECENT_COMMENTS]: getEndpoint(DiverseEndpointGroup.COMMENTS_ENDPOINT, DiverseEndpoint.GET_RECENT_COMMENTS),
};
